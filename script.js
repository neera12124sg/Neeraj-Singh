document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    const sidebar = document.querySelector('.sidebar');
    
    // Show about section by default
    document.querySelector('#about').style.display = 'block';
    
    // Navigation functionality
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the corresponding section
            const target = this.getAttribute('href');
            document.querySelector(target).style.display = 'block';
            
            // Scroll to top
            window.scrollTo(0, 0);
            
            // Close sidebar on mobile after selection
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('expanded');
            }
        });
    });
    
    // Toggle sidebar expansion on mobile
    sidebar.addEventListener('click', function(e) {
        // Only toggle if clicking on the sidebar itself, not its children
        if (e.target === this && window.innerWidth <= 768) {
            this.classList.toggle('expanded');
        }
    });
    
    // Add glow effect to active nav item
    function pulseActiveLink() {
        const activeLink = document.querySelector('.nav-link.active');
        if (activeLink) {
            activeLink.style.boxShadow = '0 0 15px rgba(178, 34, 34, 0.8)';
            setTimeout(() => {
                activeLink.style.boxShadow = '0 0 10px rgba(178, 34, 34, 0.7)';
            }, 500);
        }
    }
    
    // Initial pulse
    pulseActiveLink();
    
    // Pulse every 2 seconds
    setInterval(pulseActiveLink, 2000);
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('expanded');
        }
    });
});