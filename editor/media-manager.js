// Media Manager for handling multiple media uploads and management
const MediaManager = {
    currentMedia: [],

    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // File upload drag and drop
        const uploadArea = document.querySelector('.upload-area');
        const imageFiles = document.getElementById('imageFiles');

        if (uploadArea) {
            uploadArea.addEventListener('dragover', function(e) {
                e.preventDefault();
                uploadArea.classList.add('dragover');
            });

            uploadArea.addEventListener('dragleave', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
            });

            uploadArea.addEventListener('drop', function(e) {
                e.preventDefault();
                uploadArea.classList.remove('dragover');
                const files = e.dataTransfer.files;
                if (files.length > 0) {
                    this.handleMultipleImageUpload(files);
                }
            }.bind(this));
        }

        if (imageFiles) {
            imageFiles.addEventListener('change', function(e) {
                if (e.target.files.length > 0) {
                    this.handleMultipleImageUpload(e.target.files);
                }
            }.bind(this));
        }
    },

    switchMediaTab(tabName) {
        // Update tab buttons
        document.querySelectorAll('.media-tab').forEach(tab => tab.classList.remove('active'));
        event.target.classList.add('active');

        // Update tab content
        document.querySelectorAll('.media-tab-content').forEach(content => content.classList.remove('active'));
        document.getElementById(tabName + 'Tab').classList.add('active');
    },

    async handleMultipleImageUpload(files) {
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.startsWith('image/')) {
                await this.uploadImage(file);
            }
        }
    },

    async uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload-image', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();
            if (result.success) {
                this.addMediaItem({
                    type: 'image',
                    url: result.url,
                    title: file.name
                });
                Utils.showStatus(`Image uploaded: ${file.name}`, 'success');
            } else {
                Utils.showStatus(`Error uploading ${file.name}: ${result.error}`, 'error');
            }
        } catch (error) {
            console.error('Error uploading image:', error);
            Utils.showStatus(`Error uploading ${file.name}: ${error.message}`, 'error');
        }
    },

    addVideo() {
        const url = document.getElementById('videoUrl').value.trim();
        const title = document.getElementById('videoTitle').value.trim();
        
        if (!url) {
            Utils.showStatus('Please enter a video URL', 'error');
            return;
        }

        this.addMediaItem({
            type: 'video',
            url: url,
            title: title || 'Video'
        });

        document.getElementById('videoUrl').value = '';
        document.getElementById('videoTitle').value = '';
    },

    addWebsite() {
        const url = document.getElementById('websiteUrl').value.trim();
        const title = document.getElementById('websiteTitle').value.trim();
        
        if (!url) {
            Utils.showStatus('Please enter a website URL', 'error');
            return;
        }

        this.addMediaItem({
            type: 'website',
            url: url,
            title: title || 'Website'
        });

        document.getElementById('websiteUrl').value = '';
        document.getElementById('websiteTitle').value = '';
    },

    addMediaItem(mediaItem) {
        this.currentMedia.push(mediaItem);
        this.renderMediaGrid();
    },

    removeMediaItem(index) {
        this.currentMedia.splice(index, 1);
        this.renderMediaGrid();
    },

    setAsPoster(index) {
        // Remove poster flag from all items
        this.currentMedia.forEach(item => delete item.isPoster);
        // Set the selected item as poster
        this.currentMedia[index].isPoster = true;
        this.renderMediaGrid();
    },

    renderMediaGrid() {
        const container = document.getElementById('currentMedia');
        if (!container) return;
        
        if (this.currentMedia.length === 0) {
            container.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; color: #666;">No media added yet</p>';
            return;
        }

        container.innerHTML = this.currentMedia.map((media, index) => `
            <div class="media-item ${media.isPoster ? 'poster' : ''}">
                ${media.isPoster ? '<div class="poster-indicator">Poster</div>' : ''}
                <div class="media-type-badge ${media.type}">${media.type}</div>
                
                ${media.type === 'image' ? 
                    `<img src="${media.url}" alt="${media.title}" class="media-preview">` :
                    media.type === 'video' ?
                    `<div class="media-preview" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #666; font-size: 24px;">🎥</span>
                    </div>` :
                    `<div class="media-preview" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                        <span style="color: #666; font-size: 24px;">🌐</span>
                    </div>`
                }
                
                <div class="media-info">
                    <strong>${media.title}</strong><br>
                    <small>${media.url}</small>
                </div>
                
                <div class="media-actions">
                    ${!media.isPoster ? 
                        `<button class="btn btn-small btn-success" onclick="mediaManager.setAsPoster(${index})">Set as Poster</button>` : 
                        ''
                    }
                    <button class="btn btn-small btn-danger" onclick="mediaManager.removeMediaItem(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    },

    loadMedia(media) {
        console.log('MediaManager.loadMedia called with:', media); // Debug log
        this.currentMedia = media || [];
        console.log('MediaManager.currentMedia set to:', this.currentMedia); // Debug log
        this.renderMediaGrid();
    },

    getMedia() {
        console.log('MediaManager.getMedia returning:', this.currentMedia); // Debug log
        return this.currentMedia;
    },

    clearMedia() {
        this.currentMedia = [];
        this.renderMediaGrid();
    },

    renderMediaSection() {
        const container = document.getElementById('mediaManagerContainer');
        if (!container) return;

        container.innerHTML = `
            <div class="media-section">
                <h4>Media Management</h4>
                
                <!-- Current Media Display -->
                <div id="currentMedia" class="media-grid">
                    <!-- Media items will be displayed here -->
                </div>

                <!-- Add Media Section -->
                <div class="add-media-section">
                    <div class="media-tabs">
                        <div class="media-tab active" onclick="mediaManager.switchMediaTab('images')">Images</div>
                        <div class="media-tab" onclick="mediaManager.switchMediaTab('videos')">Videos</div>
                        <div class="media-tab" onclick="mediaManager.switchMediaTab('websites')">Websites</div>
                    </div>

                    <!-- Images Tab -->
                    <div id="imagesTab" class="media-tab-content active">
                        <div class="upload-area" onclick="document.getElementById('imageFiles').click()">
                            <p>Click to upload or drag and drop images</p>
                            <input type="file" id="imageFiles" class="file-input" accept="image/*" multiple>
                        </div>
                    </div>

                    <!-- Videos Tab -->
                    <div id="videosTab" class="media-tab-content">
                        <div class="form-group">
                            <label>Video URL</label>
                            <input type="url" id="videoUrl" placeholder="https://example.com/video.mp4">
                        </div>
                        <div class="form-group">
                            <label>Video Title (optional)</label>
                            <input type="text" id="videoTitle" placeholder="Video title">
                        </div>
                        <button type="button" class="btn btn-small" onclick="mediaManager.addVideo()">Add Video</button>
                    </div>

                    <!-- Websites Tab -->
                    <div id="websitesTab" class="media-tab-content">
                        <div class="form-group">
                            <label>Website URL</label>
                            <input type="url" id="websiteUrl" placeholder="https://example.com">
                        </div>
                        <div class="form-group">
                            <label>Website Title (optional)</label>
                            <input type="text" id="websiteTitle" placeholder="Website title">
                        </div>
                        <button type="button" class="btn btn-small" onclick="mediaManager.addWebsite()">Add Website</button>
                    </div>
                </div>
            </div>
        `;

        // Re-setup event listeners for the new elements
        this.setupEventListeners();
        this.renderMediaGrid();
    }
};

// Make it globally available
window.mediaManager = MediaManager; 