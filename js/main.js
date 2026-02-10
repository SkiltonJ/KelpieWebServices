// Main JavaScript for Kelpie Web Services

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent click from bubbling to document
            
            const isExpanded = mobileMenuButton.getAttribute('aria-expanded') === 'true';
            
            // Toggle menu visibility
            mobileMenu.classList.toggle('hidden');
            
            // Update aria-expanded for accessibility
            mobileMenuButton.setAttribute('aria-expanded', !isExpanded);
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
            if (!mobileMenuButton.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
                mobileMenuButton.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

// Close mobile menu on escape key
document.addEventListener('keydown', function(event) {
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    
    if (event.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
        mobileMenuButton.setAttribute('aria-expanded', 'false');
        mobileMenuButton.focus();
    }
});
