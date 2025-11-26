// Funcionalidad de acordeones
document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', function() {
            // Cerrar otros acordeones en la misma sección
            const section = item.closest('.accordion-section');
            const otherItems = section.querySelectorAll('.accordion-item');
            
            otherItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle del acordeón actual
            item.classList.toggle('active');
        });
    });

    // Smooth scroll para los enlaces del menú
    const menuLinks = document.querySelectorAll('.top-nav a[href^="#"]');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.top-bar').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar la lógica para enviar el formulario
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            contactForm.reset();
        });
    }

    // Efecto de scroll para el header
    let lastScroll = 0;
    const topBar = document.querySelector('.top-bar');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            topBar.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.15)';
        } else {
            topBar.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });
});

