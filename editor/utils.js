// Utility functions for the project editor
const Utils = {
    showStatus(message, type) {
        const status = document.getElementById('status');
        status.textContent = message;
        status.className = `status ${type}`;
        status.style.display = 'block';
        
        setTimeout(() => {
            status.style.display = 'none';
        }, 5000);
    },

    showLoading(show) {
        document.getElementById('loading').style.display = show ? 'block' : 'none';
    },

    closeModal(modalId) {
        document.getElementById(modalId).style.display = 'none';
    },

    openModal(modalId) {
        document.getElementById(modalId).style.display = 'block';
    },

    // Close modals when clicking outside
    setupModalClickOutside() {
        window.onclick = function(event) {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            });
        }
    }
}; 