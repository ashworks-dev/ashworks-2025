// UI Manager for handling modals and UI interactions
const UIManager = {
    closeModal(modalId) {
        Utils.closeModal(modalId);
    },

    openModal(modalId) {
        Utils.openModal(modalId);
    },

    setupEventListeners() {
        // Search functionality
        document.getElementById('searchBox').addEventListener('input', function(e) {
            this.filterProjects(e.target.value);
        }.bind(this));
    },

    filterProjects(searchTerm) {
        const clientCards = document.querySelectorAll('.client-card');
        
        clientCards.forEach(card => {
            const clientName = card.querySelector('h3').textContent.toLowerCase();
            const projectItems = card.querySelectorAll('.project-item');
            let hasVisibleProjects = false;

            projectItems.forEach(item => {
                const projectName = item.querySelector('.project-title').textContent.toLowerCase();
                const projectDesc = item.querySelector('.project-description').textContent.toLowerCase();
                
                const matches = clientName.includes(searchTerm.toLowerCase()) ||
                              projectName.includes(searchTerm.toLowerCase()) ||
                              projectDesc.includes(searchTerm.toLowerCase());
                
                item.style.display = matches ? 'block' : 'none';
                if (matches) hasVisibleProjects = true;
            });

            card.style.display = hasVisibleProjects || clientName.includes(searchTerm.toLowerCase()) ? 'block' : 'none';
        });
    },

    updateStats(projectsData) {
        const totalClients = projectsData.projects.length;
        const totalProjects = projectsData.projects.reduce((sum, client) => sum + client.projects.length, 0);
        const totalVideos = projectsData.projects.reduce((sum, client) => 
            sum + client.projects.filter(p => p.type === 'Video').length, 0);
        const totalWeb = projectsData.projects.reduce((sum, client) => 
            sum + client.projects.filter(p => p.type === 'Web' || p.type === 'Video/Web').length, 0);

        document.getElementById('totalClients').textContent = totalClients;
        document.getElementById('totalProjects').textContent = totalProjects;
        document.getElementById('totalVideos').textContent = totalVideos;
        document.getElementById('totalWeb').textContent = totalWeb;
    }
};

// Make it globally available
window.uiManager = UIManager; 