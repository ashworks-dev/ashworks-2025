// Client Manager for handling client operations
const ClientManager = {
    currentEditingClient: null,

    init() {
        this.setupEventListeners();
    },

    setupEventListeners() {
        // Form submissions
        document.getElementById('clientForm').addEventListener('submit', function(e) {
            e.preventDefault();
            this.saveClient();
        }.bind(this));
    },

    addNewClient() {
        document.getElementById('clientModalTitle').textContent = 'Add New Client';
        document.getElementById('clientName').value = '';
        this.currentEditingClient = null;
        Utils.openModal('clientModal');
    },

    editClient(clientIndex) {
        const client = projectManager.getProjectsData().projects[clientIndex];
        document.getElementById('clientModalTitle').textContent = 'Edit Client';
        document.getElementById('clientName').value = client.client;
        this.currentEditingClient = clientIndex;
        Utils.openModal('clientModal');
    },

    async saveClient() {
        const clientName = document.getElementById('clientName').value.trim();
        if (!clientName) return;

        if (this.currentEditingClient !== null) {
            // Edit existing client
            projectManager.getProjectsData().projects[this.currentEditingClient].client = clientName;
        } else {
            // Add new client
            projectManager.getProjectsData().projects.push({
                client: clientName,
                projects: []
            });
        }

        projectManager.renderProjects();
        UIManager.updateStats(projectManager.getProjectsData());
        Utils.closeModal('clientModal');
        
        // Automatically save to file and publish to Angular
        try {
            Utils.showStatus('Saving client...', 'info');
            
            // Save to file
            const saveResponse = await fetch('/api/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectManager.getProjectsData())
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
                body: JSON.stringify(projectManager.getProjectsData())
            });
            
            const publishResult = await publishResponse.json();
            if (!publishResult.success) {
                throw new Error(publishResult.error || 'Failed to publish to Angular');
            }
            
            Utils.showStatus('Client saved and published to Angular successfully', 'success');
        } catch (error) {
            console.error('Error saving/publishing client:', error);
            Utils.showStatus('Error: ' + error.message, 'error');
        }
    },

    async deleteClient(clientIndex) {
        if (confirm('Are you sure you want to delete this client and all their projects?')) {
            projectManager.getProjectsData().projects.splice(clientIndex, 1);
            projectManager.renderProjects();
            UIManager.updateStats(projectManager.getProjectsData());
            
            // Automatically save to file and publish to Angular
            try {
                Utils.showStatus('Deleting client...', 'info');
                
                // Save to file
                const saveResponse = await fetch('/api/projects', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(projectManager.getProjectsData())
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
                    body: JSON.stringify(projectManager.getProjectsData())
                });
                
                const publishResult = await publishResponse.json();
                if (!publishResult.success) {
                    throw new Error(publishResult.error || 'Failed to publish to Angular');
                }
                
                Utils.showStatus('Client deleted and changes published to Angular successfully', 'success');
            } catch (error) {
                console.error('Error saving/publishing after client deletion:', error);
                Utils.showStatus('Error: ' + error.message, 'error');
            }
        }
    },

    addProjectToClient(clientIndex) {
        document.getElementById('projectModalTitle').textContent = 'Add New Project';
        document.getElementById('projectForm').reset();
        document.getElementById('projectFeatured').checked = false;
        projectManager.currentEditingProject = null;
        projectManager.currentEditingClient = clientIndex;
        
        // Populate client dropdown
        const clientSelect = document.getElementById('projectClient');
        clientSelect.innerHTML = projectManager.getProjectsData().projects.map((client, index) => 
            `<option value="${index}" ${index === clientIndex ? 'selected' : ''}>${client.client}</option>`
        ).join('');
        
        // Initialize media section and clear media
        mediaManager.renderMediaSection();
        mediaManager.clearMedia();
        
        Utils.openModal('projectModal');
    }
};

// Make it globally available
window.clientManager = ClientManager; 