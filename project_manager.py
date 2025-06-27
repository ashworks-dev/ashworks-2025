#!/usr/bin/env python3
"""
Project Manager Service
Manages video project entries for the Angular portfolio site.
"""

import json
import os
import sys
from typing import List, Dict, Any, Optional
from datetime import datetime

class ProjectManager:
    def __init__(self, data_file: str = "data/projects.json"):
        self.data_file = data_file
        self.data = self.load_data()
    
    def load_data(self) -> Dict[str, Any]:
        """Load project data from JSON file."""
        try:
            with open(self.data_file, 'r', encoding='utf-8') as f:
                return json.load(f)
        except FileNotFoundError:
            print(f"Data file {self.data_file} not found. Creating new file.")
            return {"projects": []}
        except json.JSONDecodeError as e:
            print(f"Error parsing JSON file: {e}")
            return {"projects": []}
    
    def save_data(self) -> bool:
        """Save project data to JSON file."""
        try:
            os.makedirs(os.path.dirname(self.data_file), exist_ok=True)
            with open(self.data_file, 'w', encoding='utf-8') as f:
                json.dump(self.data, f, indent=2, ensure_ascii=False)
            return True
        except Exception as e:
            print(f"Error saving data: {e}")
            return False
    
    def list_clients(self) -> List[str]:
        """List all clients."""
        return [client["client"] for client in self.data["projects"]]
    
    def get_client_projects(self, client_name: str) -> Optional[List[Dict[str, Any]]]:
        """Get all projects for a specific client."""
        for client in self.data["projects"]:
            if client["client"] == client_name:
                return client["projects"]
        return None
    
    def add_client(self, client_name: str) -> bool:
        """Add a new client."""
        if any(client["client"] == client_name for client in self.data["projects"]):
            print(f"Client '{client_name}' already exists.")
            return False
        
        self.data["projects"].append({
            "client": client_name,
            "projects": []
        })
        return self.save_data()
    
    def add_project(self, client_name: str, project_data: Dict[str, Any]) -> bool:
        """Add a new project to a client."""
        for client in self.data["projects"]:
            if client["client"] == client_name:
                # Ensure required fields
                required_fields = ["type", "project_name", "year", "description"]
                for field in required_fields:
                    if field not in project_data:
                        print(f"Missing required field: {field}")
                        return False
                
                # Add default fields if not present
                if "posterImage" not in project_data:
                    project_data["posterImage"] = None
                if "media" not in project_data:
                    project_data["media"] = []
                
                client["projects"].append(project_data)
                return self.save_data()
        
        print(f"Client '{client_name}' not found.")
        return False
    
    def update_project(self, client_name: str, project_name: str, updates: Dict[str, Any]) -> bool:
        """Update an existing project."""
        for client in self.data["projects"]:
            if client["client"] == client_name:
                for project in client["projects"]:
                    if project["project_name"] == project_name:
                        project.update(updates)
                        return self.save_data()
                print(f"Project '{project_name}' not found for client '{client_name}'.")
                return False
        
        print(f"Client '{client_name}' not found.")
        return False
    
    def delete_project(self, client_name: str, project_name: str) -> bool:
        """Delete a project."""
        for client in self.data["projects"]:
            if client["client"] == client_name:
                for i, project in enumerate(client["projects"]):
                    if project["project_name"] == project_name:
                        del client["projects"][i]
                        return self.save_data()
                print(f"Project '{project_name}' not found for client '{client_name}'.")
                return False
        
        print(f"Client '{client_name}' not found.")
        return False
    
    def add_media_to_project(self, client_name: str, project_name: str, media_data: Dict[str, Any]) -> bool:
        """Add media content to a project."""
        for client in self.data["projects"]:
            if client["client"] == client_name:
                for project in client["projects"]:
                    if project["project_name"] == project_name:
                        if "media" not in project:
                            project["media"] = []
                        
                        # Ensure required fields for media
                        if "type" not in media_data or "url" not in media_data:
                            print("Media must have 'type' and 'url' fields.")
                            return False
                        
                        if media_data["type"] not in ["image", "video", "website"]:
                            print("Media type must be 'image', 'video', or 'website'.")
                            return False
                        
                        project["media"].append(media_data)
                        return self.save_data()
                print(f"Project '{project_name}' not found for client '{client_name}'.")
                return False
        
        print(f"Client '{client_name}' not found.")
        return False
    
    def export_typescript(self, output_file: str = "src/app/services/project-data.ts") -> bool:
        """Export data as TypeScript constant for use in Angular service."""
        try:
            ts_content = f"""// Auto-generated project data - DO NOT EDIT MANUALLY
// Generated on: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}
// Use project_manager.py to edit this data

export const PROJECT_DATA = {{
  projects: {json.dumps(self.data["projects"], indent=4)}
}};

export interface ProjectMedia {{
  type: 'image' | 'video' | 'website';
  url: string;
  title?: string;
  description?: string;
}}

export interface DetailedProject {{
  type: string;
  project_name: string;
  year: number | string | null;
  description: string;
  posterImage?: string | null;
  media?: ProjectMedia[];
}}

export interface ClientProject {{
  client: string;
  projects: DetailedProject[];
}}
"""
            
            os.makedirs(os.path.dirname(output_file), exist_ok=True)
            with open(output_file, 'w', encoding='utf-8') as f:
                f.write(ts_content)
            
            print(f"TypeScript data exported to {output_file}")
            return True
        except Exception as e:
            print(f"Error exporting TypeScript: {e}")
            return False
    
    def interactive_mode(self):
        """Run interactive mode for managing projects."""
        while True:
            print("\n" + "="*50)
            print("PROJECT MANAGER")
            print("="*50)
            print("1. List all clients")
            print("2. List projects for a client")
            print("3. Add new client")
            print("4. Add new project")
            print("5. Update project")
            print("6. Delete project")
            print("7. Add media to project")
            print("8. Export to TypeScript")
            print("9. Exit")
            
            choice = input("\nEnter your choice (1-9): ").strip()
            
            if choice == "1":
                clients = self.list_clients()
                if clients:
                    print("\nClients:")
                    for i, client in enumerate(clients, 1):
                        print(f"{i}. {client}")
                else:
                    print("No clients found.")
            
            elif choice == "2":
                client_name = input("Enter client name: ").strip()
                projects = self.get_client_projects(client_name)
                if projects:
                    print(f"\nProjects for {client_name}:")
                    for i, project in enumerate(projects, 1):
                        print(f"{i}. {project['project_name']} ({project['year']}) - {project['type']}")
                else:
                    print(f"No projects found for {client_name}")
            
            elif choice == "3":
                client_name = input("Enter new client name: ").strip()
                if self.add_client(client_name):
                    print(f"Client '{client_name}' added successfully.")
                else:
                    print("Failed to add client.")
            
            elif choice == "4":
                client_name = input("Enter client name: ").strip()
                project_name = input("Enter project name: ").strip()
                project_type = input("Enter project type (Video/Video/Web): ").strip()
                year = input("Enter year: ").strip()
                description = input("Enter description: ").strip()
                
                project_data = {
                    "type": project_type,
                    "project_name": project_name,
                    "year": int(year) if year.isdigit() else year,
                    "description": description
                }
                
                if self.add_project(client_name, project_data):
                    print("Project added successfully.")
                else:
                    print("Failed to add project.")
            
            elif choice == "5":
                client_name = input("Enter client name: ").strip()
                project_name = input("Enter project name: ").strip()
                print("Enter updates (press Enter to skip):")
                
                updates = {}
                for field in ["type", "project_name", "year", "description", "posterImage"]:
                    value = input(f"{field}: ").strip()
                    if value:
                        if field == "year" and value.isdigit():
                            updates[field] = int(value)
                        else:
                            updates[field] = value
                
                if self.update_project(client_name, project_name, updates):
                    print("Project updated successfully.")
                else:
                    print("Failed to update project.")
            
            elif choice == "6":
                client_name = input("Enter client name: ").strip()
                project_name = input("Enter project name: ").strip()
                confirm = input(f"Are you sure you want to delete '{project_name}'? (y/N): ").strip().lower()
                if confirm == 'y':
                    if self.delete_project(client_name, project_name):
                        print("Project deleted successfully.")
                    else:
                        print("Failed to delete project.")
            
            elif choice == "7":
                client_name = input("Enter client name: ").strip()
                project_name = input("Enter project name: ").strip()
                media_type = input("Enter media type (image/video/website): ").strip()
                media_url = input("Enter media URL: ").strip()
                media_title = input("Enter media title (optional): ").strip()
                
                media_data = {
                    "type": media_type,
                    "url": media_url
                }
                if media_title:
                    media_data["title"] = media_title
                
                if self.add_media_to_project(client_name, project_name, media_data):
                    print("Media added successfully.")
                else:
                    print("Failed to add media.")
            
            elif choice == "8":
                if self.export_typescript():
                    print("TypeScript export completed successfully.")
                else:
                    print("Failed to export TypeScript.")
            
            elif choice == "9":
                print("Goodbye!")
                break
            
            else:
                print("Invalid choice. Please try again.")

def main():
    if len(sys.argv) > 1:
        # Command line mode
        manager = ProjectManager()
        command = sys.argv[1]
        
        if command == "export":
            manager.export_typescript()
        elif command == "list":
            clients = manager.list_clients()
            for client in clients:
                print(client)
        else:
            print("Unknown command. Use 'export' or 'list' or run without arguments for interactive mode.")
    else:
        # Interactive mode
        manager = ProjectManager()
        manager.interactive_mode()

if __name__ == "__main__":
    main() 