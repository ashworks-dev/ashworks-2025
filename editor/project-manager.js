// Project Manager for handling project operations and data management
const ProjectManager = {
    projectsData: { projects: [] },
    currentEditingProject: null,
    currentEditingClient: null,

    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Form submissions
        document.getElementById('projectForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.saveProject();
        }.bind(this));
    },

    getProjectsData() {
        return this.projectsData;
    },

    async loadProjects() {
        Utils.showLoading(true);
        try {
            const response = await fetch('/api/projects');
            const data = await response.json();
            
            if (data.projects) {
                this.projectsData = data;
                this.renderProjects();
                UIManager.updateStats(this.projectsData);
                Utils.showStatus('Projects loaded successfully', 'success');
            } else {
                this.projectsData = { projects: [] };
                this.renderProjects();
                Utils.showStatus('No projects found', 'error');
            }
        } catch (error) {
            console.error('Error loading projects:', error);
            Utils.showStatus('Error loading projects: ' + error.message, 'error');
        } finally {
            Utils.showLoading(false);
        }
    },

    async saveProjects() {
        Utils.showLoading(true);
        try {
            const response = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.projectsData)
            });
            
            const result = await response.json();
            if (result.success) {
                Utils.showStatus('Projects saved successfully', 'success');
            } else {
                Utils.showStatus('Error saving projects: ' + result.error, 'error');
            }
        } catch (error) {
            console.error('Error saving projects:', error);
            Utils.showStatus('Error saving projects: ' + error.message, 'error');
        } finally {
            Utils.showLoading(false);
        }
    },

    async publishProjects() {
        Utils.showLoading(true);
        try {
            const response = await fetch('/api/publish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.projectsData)
            });
            
            const result = await response.json();
            if (result.success) {
                Utils.showStatus('Projects published to Angular successfully', 'success');
            } else {
                Utils.showStatus('Error publishing projects: ' + result.error, 'error');
            }
        } catch (error) {
            console.error('Error publishing projects:', error);
            Utils.showStatus('Error publishing projects: ' + error.message, 'error');
        } finally {
            Utils.showLoading(false);
        }
    },

    renderProjects() {
        const container = document.getElementById('clientsContainer');
        
        if (this.projectsData.projects.length === 0) {
            container.innerHTML = '<div class="empty-state"><h3>No projects loaded</h3><p>Click "Load Projects" to get started</p></div>';
            return;
        }

        container.innerHTML = this.projectsData.projects.map((clientProject, clientIndex) => `
            <div class="client-card">
                <div class="client-header">
                    <h3>${clientProject.client}</h3>
                    <div class="client-controls">
                        <button class="btn btn-small" onclick="clientManager.addProjectToClient(${clientIndex})">Add Project</button>
                        <button class="btn btn-small btn-warning" onclick="clientManager.editClient(${clientIndex})">Edit</button>
                        <button class="btn btn-small btn-danger" onclick="clientManager.deleteClient(${clientIndex})">Delete</button>
                    </div>
                </div>
                <div class="projects-list">
                    ${clientProject.projects.map((project, projectIndex) => `
                        <div class="project-item">
                            <div class="project-header">
                                <div>
                                    <div class="project-title">
                                        ${project.project_name}
                                        <span class="project-type">${project.type}</span>
                                        ${project.featured ? '<span class="featured-badge">⭐ Featured</span>' : ''}
                                    </div>
                                    <div class="project-year">${project.year || 'No year specified'}</div>
                                </div>
                                <div class="project-controls">
                                    <button class="btn btn-small" onclick="projectManager.editProject(${clientIndex}, ${projectIndex})">Edit</button>
                                    <button class="btn btn-small btn-danger" onclick="projectManager.deleteProject(${clientIndex}, ${projectIndex})">Delete</button>
                                </div>
                            </div>
                            <div class="project-description">${project.description}</div>
                            ${project.media && project.media.length > 0 ? `
                                <div class="project-media">
                                    <strong>Media (${project.media.length} items):</strong>
                                    <div class="media-grid">
                                        ${project.media.slice(0, 3).map(media => `
                                            <div class="media-item ${media.isPoster ? 'poster' : ''}">
                                                ${media.isPoster ? '<div class="poster-indicator">Poster</div>' : ''}
                                                <div class="media-type-badge ${media.type}">${media.type}</div>
                                                ${media.type === 'image' ? 
                                                    `<img src="${media.url}" alt="${media.title || 'Media'}" class="media-preview">` :
                                                    `<div class="media-preview" style="background: #f0f0f0; display: flex; align-items: center; justify-content: center;">
                                                        <span style="color: #666; font-size: 24px;">${media.type === 'video' ? '🎥' : '🌐'}</span>
                                                    </div>`
                                                }
                                                <div class="media-info">${media.title || 'Untitled'}</div>
                                            </div>
                                        `).join('')}
                                        ${project.media.length > 3 ? `<div class="media-item"><div class="media-info">+${project.media.length - 3} more</div></div>` : ''}
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        `).join('');
    },

    editProject(clientIndex, projectIndex) {
        const project = this.projectsData.projects[clientIndex].projects[projectIndex];
        
        console.log('Loading project for editing:', project); // Debug log
        console.log('Project media:', project.media); // Debug log
        
        document.getElementById('projectModalTitle').textContent = 'Edit Project';
        document.getElementById('projectName').value = project.project_name;
        document.getElementById('projectType').value = project.type;
        document.getElementById('projectYear').value = project.year || '';
        document.getElementById('projectDescription').value = project.description;
        document.getElementById('projectFeatured').checked = project.featured || false;
        
        // Populate client dropdown
        const clientSelect = document.getElementById('projectClient');
        clientSelect.innerHTML = this.projectsData.projects.map((client, index) => 
            `<option value="${index}" ${index === clientIndex ? 'selected' : ''}>${client.client}</option>`
        ).join('');
        
        this.currentEditingProject = { clientIndex, projectIndex };
        
        // Initialize media section and load existing media
        mediaManager.renderMediaSection();
        mediaManager.loadMedia(project.media);
        
        Utils.openModal('projectModal');
    },

    async saveProject() {
        const projectName = document.getElementById('projectName').value.trim();
        const projectType = document.getElementById('projectType').value;
        const projectYear = document.getElementById('projectYear').value.trim();
        const projectDescription = document.getElementById('projectDescription').value.trim();
        const projectFeatured = document.getElementById('projectFeatured').checked;
        const clientIndex = parseInt(document.getElementById('projectClient').value);

        if (!projectName || !projectDescription) return;

        const projectData = {
            project_name: projectName,
            type: projectType,
            year: projectYear || null,
            description: projectDescription,
            featured: projectFeatured,
            media: mediaManager.getMedia()
        };

        console.log('Media data being saved:', mediaManager.getMedia()); // Debug log
        console.log('Full project data being saved:', projectData); // Debug log

        if (this.currentEditingProject !== null) {
            // Edit existing project
            const { clientIndex: oldClientIndex, projectIndex } = this.currentEditingProject;
            this.projectsData.projects[oldClientIndex].projects[projectIndex] = projectData;
            
            // Move to new client if changed
            if (oldClientIndex !== clientIndex) {
                this.projectsData.projects[clientIndex].projects.push(projectData);
                this.projectsData.projects[oldClientIndex].projects.splice(projectIndex, 1);
                
                // Remove empty client
                if (this.projectsData.projects[oldClientIndex].projects.length === 0) {
                    this.projectsData.projects.splice(oldClientIndex, 1);
                }
            }
        } else {
            // Add new project
            this.projectsData.projects[clientIndex].projects.push(projectData);
        }

        this.renderProjects();
        UIManager.updateStats(this.projectsData);
        Utils.closeModal('projectModal');
        
        // Automatically save to file and publish to Angular
        try {
            Utils.showStatus('Saving project...', 'info');
            
            // Save to file
            const saveResponse = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.projectsData)
            });
            
            const saveResult = await saveResponse.json();
            if (!saveResult.success) {
                throw new Error(saveResult.error || 'Failed to save projects');
            }
            
            // Publish to Angular
            const publishResponse = await fetch('/api/publish', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.projectsData)
            });
            
            const publishResult = await publishResponse.json();
            if (!publishResult.success) {
                throw new Error(publishResult.error || 'Failed to publish to Angular');
            }
            
            Utils.showStatus('Project saved and published to Angular successfully', 'success');
        } catch (error) {
            console.error('Error saving/publishing project:', error);
            Utils.showStatus('Error: ' + error.message, 'error');
        }
    },

    async deleteProject(clientIndex, projectIndex) {
        if (confirm('Are you sure you want to delete this project?')) {
            this.projectsData.projects[clientIndex].projects.splice(projectIndex, 1);
            
            // Remove client if no projects left
            if (this.projectsData.projects[clientIndex].projects.length === 0) {
                this.projectsData.projects.splice(clientIndex, 1);
            }
            
            this.renderProjects();
            UIManager.updateStats(this.projectsData);
            
            // Automatically save to file and publish to Angular
            try {
                Utils.showStatus('Deleting project...', 'info');
                
                // Save to file
                const saveResponse = await fetch('/api/projects', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.projectsData)
                });
                
                const saveResult = await saveResponse.json();
                if (!saveResult.success) {
                    throw new Error(saveResult.error || 'Failed to save projects');
                }
                
                // Publish to Angular
                const publishResponse = await fetch('/api/publish', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(this.projectsData)
                });
                
                const publishResult = await publishResponse.json();
                if (!publishResult.success) {
                    throw new Error(publishResult.error || 'Failed to publish to Angular');
                }
                
                Utils.showStatus('Project deleted and changes published to Angular successfully', 'success');
            } catch (error) {
                console.error('Error saving/publishing after deletion:', error);
                Utils.showStatus('Error: ' + error.message, 'error');
            }
        }
    },

    exportData() {
        const dataStr = JSON.stringify(this.projectsData, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'projects.json';
        link.click();
        URL.revokeObjectURL(url);
    }
};

// Make it globally available
window.projectManager = ProjectManager; 