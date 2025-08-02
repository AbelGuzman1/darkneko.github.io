document.addEventListener('DOMContentLoaded', function() {
    // Detección temprana de móvil para optimizaciones
    const isMobile = window.innerWidth <= 768;
    
    // Elementos del DOM
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const body = document.body;
    const navLinks = document.querySelectorAll('nav ul.main-nav li a');
    const sections = document.querySelectorAll('section');

    // Verificar que los elementos existen
    if (!menuToggle || !mainNav || !nav || !navLinks.length || !sections.length) {
        console.error('Elementos del menú o secciones no encontrados');
        return;
    }

    // Función para cerrar el menú
    const closeMenu = () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('active');
        mainNav.classList.remove('active');
        body.classList.remove('menu-open');
    };

    // Evento para el botón hamburguesa
    menuToggle.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        this.classList.toggle('active');
        mainNav.classList.toggle('active');
        body.classList.toggle('menu-open');
    });

    // Desplazamiento suave y cerrar menú al hacer clic en enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Optimización: usar scrollIntoView en lugar de animación custom en móvil
                if (isMobile) {
                    // En móvil, usar scrollIntoView nativo (más eficiente)
                    targetSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start',
                        inline: 'nearest'
                    });
                } else {
                    // En desktop, mantener animación custom
                    const targetPosition = targetSection.offsetTop;
                    const startPosition = window.pageYOffset;
                    const distance = targetPosition - startPosition;
                    const duration = 800;
                    let start = null;

                    window.requestAnimationFrame(step);

                    function step(timestamp) {
                        if (!start) start = timestamp;
                        const progress = timestamp - start;
                        const ease = easeInOutCubic(progress, startPosition, distance, duration);
                        window.scrollTo(0, ease);
                        if (progress < duration) window.requestAnimationFrame(step);
                    }

                    function easeInOutCubic(t, b, c, d) {
                        t /= d / 2;
                        if (t < 1) return c / 2 * t * t * t + b;
                        t -= 2;
                        return c / 2 * (t * t * t + 2) + b;
                    }
                }
            }

            if (window.innerWidth <= 992) {
                closeMenu();
            }
        });
    });

    // Cerrar menú al hacer clic fuera de él (optimizado con evento pasivo)
    document.addEventListener('click', function(event) {
        if (window.innerWidth <= 992 &&
            mainNav.classList.contains('active') &&
            !menuToggle.contains(event.target) &&
            !mainNav.contains(event.target)) {
            closeMenu();
        }
    }, { passive: true });

    // Cerrar menú al cambiar el tamaño de la pantalla (optimizado)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 992 && mainNav.classList.contains('active')) {
            closeMenu();
        }
    }, { passive: true });

    // Función optimizada para resaltar la sección activa (reducir reprocesamiento)
    let ticking = false;
    let lastScrollY = window.pageYOffset;
    
    function highlightActiveSection() {
        const currentScrollY = window.pageYOffset;
        
        // Solo procesar si hay cambio significativo de scroll (>5px)
        if (Math.abs(currentScrollY - lastScrollY) < 5) {
            return;
        }
        
        lastScrollY = currentScrollY;
        
        if (!ticking) {
            requestAnimationFrame(function() {
                const windowHeight = window.innerHeight;
                const scrollTrigger = windowHeight / 3;
                let currentSectionIndex = 0;

                // Usar for loop en lugar de forEach para mejor rendimiento
                for (let i = 0; i < sections.length; i++) {
                    const section = sections[i];
                    const rect = section.getBoundingClientRect();
                    const sectionTop = rect.top + window.pageYOffset;
                    const isActive = currentScrollY >= sectionTop - scrollTrigger && 
                                   currentScrollY < sectionTop + rect.height - scrollTrigger;

                    if (isActive) {
                        currentSectionIndex = i;
                    }

                    section.classList.toggle('active', isActive);
                }

                // Actualizar navegación solo si cambió la sección
                const currentActiveLink = document.querySelector('nav .main-nav a.active');
                const newActiveLink = navLinks[currentSectionIndex];
                
                if (currentActiveLink !== newActiveLink) {
                    navLinks.forEach(link => link.classList.remove('active'));
                    if (newActiveLink) {
                        newActiveLink.classList.add('active');
                    }
                }
                
                ticking = false;
            });
            ticking = true;
        }
    }

    // Optimización: throttling más agresivo para eventos
    let scrollThrottle = false;
    const scrollDelay = isMobile ? 16 : 8; // 60fps en móvil, 120fps en desktop
    
    function throttledHighlight() {
        if (!scrollThrottle) {
            setTimeout(() => {
                highlightActiveSection();
                scrollThrottle = false;
            }, scrollDelay);
            scrollThrottle = true;
        }
    }

    window.addEventListener('load', highlightActiveSection, { passive: true });
    window.addEventListener('scroll', throttledHighlight, { passive: true });
});