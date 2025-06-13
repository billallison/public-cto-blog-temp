// Accessibility enhancements for UC Berkeley CTO Blog

document.addEventListener('DOMContentLoaded', function() {
    // Mark external links for screen readers
    const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
    
    externalLinks.forEach(function(link) {
        // Add screen reader text for external links
        const srText = document.createElement('span');
        srText.className = 'visually-hidden';
        srText.textContent = ' (opens in new tab)';
        
        // Set target and rel attributes for security
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        
        // Add the screen reader text
        link.appendChild(srText);
        
        // Add title attribute
        const currentTitle = link.getAttribute('title') || '';
        const newTitle = currentTitle ? currentTitle + ' (opens in new tab)' : 'Opens in new tab';
        link.setAttribute('title', newTitle);
    });

    // Improve keyboard navigation for menu toggles
    const menuToggleButtons = document.querySelectorAll('.menu-main-toggle button');
    menuToggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const isOpen = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isOpen);
        });
    });

    // Improve keyboard navigation for sidebar toggles
    const sidebarToggleButtons = document.querySelectorAll('.toggles button');
    sidebarToggleButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Handle ARIA states for sidebar toggles
            if (button.classList.contains('sider-open')) {
                button.setAttribute('aria-expanded', 'true');
            } else if (button.classList.contains('sider-close')) {
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // Improve keyboard navigation for menu tree toggles
    const menuTreeButtons = document.querySelectorAll('.menu-tree-title button');
    menuTreeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
        });
    });
});