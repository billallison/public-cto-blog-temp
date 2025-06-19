// Mobile-specific fixes to disable sidebar toggle behavior
$(document).ready(function(){
    'use strict';
    
    // Function to check if we're on mobile
    function isMobile() {
        return window.matchMedia('(max-width: 800px)').matches;
    }
    
    // Function to disable sidebar behavior on mobile
    function disableSidebarOnMobile() {
        if (isMobile()) {
            // Find the sidebar and force it to be static
            const sider = $('#stager').find('aside');
            const siderOpenBtn = $('#stager').find('.toggles').children('.sider-open');
            const siderCloseBtn = $('#stager').find('.toggles').children('.sider-close');
            const totopBtn = $('#stager').find('.toggles').children('.totop');
            
            // Remove any existing animations/styles that might interfere
            sider.stop().css({
                'left': 'auto',
                'position': 'static',
                'width': '100%',
                'height': 'auto',
                'z-index': 'auto',
                'background': 'transparent'
            });
            
            // Hide toggle buttons
            siderOpenBtn.hide();
            siderCloseBtn.hide();
            totopBtn.hide();
            
            // Unbind click events for sidebar toggles on mobile
            siderOpenBtn.off('click');
            siderCloseBtn.off('click');
        }
    }
    
    // Run on load
    disableSidebarOnMobile();
    
    // Run on resize
    $(window).resize(function() {
        disableSidebarOnMobile();
    });
});
