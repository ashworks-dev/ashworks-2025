// Main application initialization
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    Utils.setupModalClickOutside();
    UIManager.setupEventListeners();
    MediaManager.init();
    ClientManager.init();
    ProjectManager.init();
    
    // Load initial data
    ProjectManager.loadProjects();
    
    console.log('Project Editor initialized successfully');
}); 