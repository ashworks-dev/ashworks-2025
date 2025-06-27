#!/usr/bin/env python3
"""
Flask API Server for Project Management
Provides REST endpoints for managing project data.
"""

'''
Token codes ...
  { token: "1049", note: "pkey" },
  { token: "9687", note: "pkey" },
  { token: "5212", note: "pkey" },
  { token: "4593", note: "pkey" },
  { token: "1158", note: "pkey" }
'''

from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import json
import os
import sys
from datetime import datetime
from project_manager import ProjectManager
import uuid
from werkzeug.utils import secure_filename
from PIL import Image
import io
import subprocess
import shutil

app = Flask(__name__)
CORS(app)  # Enable CORS for Angular frontend

# Configuration
PROJECTS_FILE = 'data/projects.json'
UPLOAD_FOLDER = 'src/assets/images'
MAX_WIDTH = 1920
MAX_HEIGHT = 1080
QUALITY = 85
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'webp'}
MAX_FILE_SIZE = 2 * 1024 * 1024  # 2MB max file size

# Image optimization settings
ASSETS_PORTFOLIO_DIR = 'src/assets/portfolio'

# Ensure upload directory exists
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
os.makedirs('data', exist_ok=True)

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def generate_filename(original_filename):
    """Generate a unique filename for uploaded images"""
    timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
    unique_id = str(uuid.uuid4())[:8]
    extension = original_filename.rsplit('.', 1)[1].lower()
    return f"{timestamp}_{unique_id}.{extension}"

def optimize_image(file, filename):
    """Optimize image for web use"""
    try:
        # Read the image
        image = Image.open(file)
        
        # Convert to RGB if necessary
        if image.mode in ('RGBA', 'LA', 'P'):
            # Create a white background
            background = Image.new('RGB', image.size, (255, 255, 255))
            if image.mode == 'P':
                image = image.convert('RGBA')
            background.paste(image, mask=image.split()[-1] if image.mode == 'RGBA' else None)
            image = background
        
        # Resize if too large
        if image.width > MAX_WIDTH or image.height > MAX_HEIGHT:
            image.thumbnail((MAX_WIDTH, MAX_HEIGHT), Image.Resampling.LANCZOS)
        
        # Save optimized image
        output = io.BytesIO()
        image.save(output, format='JPEG', quality=QUALITY, optimize=True)
        output.seek(0)
        
        # Generate filename
        name, ext = os.path.splitext(filename)
        optimized_filename = f"{name}_optimized.jpg"
        
        return output, optimized_filename
    except Exception as e:
        print(f"Error optimizing image: {e}")
        return None, filename

def load_projects():
    """Load projects from JSON file with fallback to empty structure"""
    try:
        if os.path.exists(PROJECTS_FILE):
            with open(PROJECTS_FILE, 'r', encoding='utf-8') as f:
                data = json.load(f)
                # Ensure the structure is compatible with the new media format
                if 'projects' in data:
                    for client in data['projects']:
                        for project in client.get('projects', []):
                            # Convert old posterImage to new media structure if needed
                            if 'posterImage' in project and 'media' not in project:
                                project['media'] = []
                                if project['posterImage']:
                                    project['media'].append({
                                        'type': 'image',
                                        'url': project['posterImage'],
                                        'title': 'Poster Image',
                                        'isPoster': True
                                    })
                                # Remove old posterImage field
                                project.pop('posterImage', None)
                    return data
                else:
                    return {'projects': []}
        else:
            return {'projects': []}
    except Exception as e:
        print(f"Error loading projects: {e}")
        return {'projects': []}

def save_projects(data):
    """Save projects to JSON file"""
    try:
        with open(PROJECTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error saving projects: {e}")
        return False

def publish_to_angular(data):
    """Publish projects data to Angular assets directory"""
    try:
        # Copy JSON file to Angular assets directory
        angular_assets_json = 'src/assets/projects.json'
        with open(angular_assets_json, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"Published to Angular assets: {angular_assets_json}")
        return True
    except Exception as e:
        print(f"Error publishing to Angular: {e}")
        return False

# Initialize project manager
project_manager = ProjectManager()

@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/editor')
def editor():
    return send_from_directory('.', 'project_editor.html')

@app.route('/editor/<path:filename>')
def serve_editor_file(filename):
    """Serve editor static files (CSS, JS)"""
    return send_from_directory('editor', filename)

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all projects"""
    try:
        data = load_projects()
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/projects', methods=['POST'])
def save_projects_api():
    """Save projects data"""
    try:
        data = request.get_json()
        if save_projects(data):
            return jsonify({'success': True, 'message': 'Projects saved successfully'})
        else:
            return jsonify({'success': False, 'error': 'Failed to save projects'}), 500
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/upload-image', methods=['POST'])
def upload_image():
    """Upload and optimize an image file"""
    try:
        if 'file' not in request.files:
            return jsonify({'success': False, 'error': 'No file provided'}), 400
        
        file = request.files['file']
        if file.filename == '':
            return jsonify({'success': False, 'error': 'No file selected'}), 400
        
        if file and allowed_file(file.filename):
            # Generate unique filename
            timestamp = datetime.now().strftime('%Y%m%d_%H%M%S')
            filename = secure_filename(file.filename)
            name, ext = os.path.splitext(filename)
            unique_filename = f"{name}_{timestamp}{ext}"
            
            # Optimize the image
            optimized_image, final_filename = optimize_image(file, unique_filename)
            
            if optimized_image is None:
                return jsonify({'success': False, 'error': 'Failed to process image'}), 500
            
            # Save the optimized image
            filepath = os.path.join(UPLOAD_FOLDER, final_filename)
            with open(filepath, 'wb') as f:
                f.write(optimized_image.getvalue())
            
            # Return the URL path
            url = f"/assets/images/{final_filename}"
            
            return jsonify({
                'success': True,
                'url': url,
                'filename': final_filename
            })
        else:
            return jsonify({'success': False, 'error': 'Invalid file type'}), 400
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/api/publish', methods=['POST'])
def publish_projects():
    """Publish projects to Angular"""
    try:
        data = request.get_json()
        if publish_to_angular(data):
            return jsonify({'success': True, 'message': 'Projects published to Angular successfully'})
        else:
            return jsonify({'success': False, 'error': 'Failed to publish projects'}), 500
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

@app.route('/assets/images/<filename>')
def serve_image(filename):
    """Serve uploaded images"""
    return send_from_directory(UPLOAD_FOLDER, filename)

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint."""
    return jsonify({'status': 'healthy', 'timestamp': datetime.now().isoformat()})

@app.route('/assets/portfolio/<filename>')
def serve_portfolio_image(filename):
    """Serve portfolio images"""
    return send_from_directory('src/assets/portfolio', filename)

if __name__ == '__main__':
    print("Starting Project Management API Server...")
    print("API endpoints:")
    print("  GET  /api/projects - Get all projects")
    print("  POST /api/projects - Save all projects")
    print("  POST /api/export   - Export to TypeScript")
    print("  POST /api/publish  - Save and export")
    print("  GET  /api/health   - Health check")
    print("\nServer will run on http://localhost:5001")
    print("Press Ctrl+C to stop")
    
    app.run(debug=True, host='0.0.0.0', port=5001) 