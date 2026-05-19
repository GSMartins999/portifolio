document.addEventListener('DOMContentLoaded', () => {
    /* ==========================================================================
       1. Estilização Dinâmica da Stack de Tecnologias
       ========================================================================== */
    const techColors = {
        react: 'rgba(203, 249, 255, 0.15)',
        js: 'rgba(255, 245, 203, 0.15)',
        ts: 'rgba(203, 231, 255, 0.15)',
        mysql: 'rgba(255, 245, 203, 0.15)',
        html: 'rgba(255, 203, 203, 0.15)',
        css: 'rgba(203, 211, 255, 0.15)',
        python: 'rgba(255, 237, 203, 0.15)',
        wordpress: 'rgba(232, 229, 222, 0.15)'
    };

    const techBorders = {
        react: '#61dafb',
        js: '#f7df1e',
        ts: '#3178c6',
        mysql: '#4479a1',
        html: '#e34f26',
        css: '#1572b6',
        python: '#3776ab',
        wordpress: '#21759b'
    };

    const techCards = document.querySelectorAll('.tech-card');
    techCards.forEach((card) => {
        const type = card.getAttribute('data-type');
        if (techColors[type]) {
            card.addEventListener('mouseenter', () => {
                card.style.backgroundColor = techColors[type];
                card.style.borderColor = techBorders[type];
                card.style.boxShadow = `0 10px 25px ${techColors[type]}`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.backgroundColor = '';
                card.style.borderColor = '';
                card.style.boxShadow = '';
            });
        }
    });

    /* ==========================================================================
       2. Estilização Dinâmica dos Serviços (O que faço)
       ========================================================================== */
    const serviceGradients = {
        one: 'linear-gradient(135deg, rgba(130, 76, 187, 0.25) 0%, rgba(19, 27, 46, 0.9) 100%)',
        two: 'linear-gradient(135deg, rgba(87, 79, 251, 0.25) 0%, rgba(19, 27, 46, 0.9) 100%)',
        three: 'linear-gradient(135deg, rgba(70, 37, 114, 0.35) 0%, rgba(19, 27, 46, 0.9) 100%)'
    };

    const serviceBorders = {
        one: '#824CBB',
        two: '#574FFB',
        three: '#a855f7'
    };

    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card) => {
        const type = card.getAttribute('data-type');
        if (serviceGradients[type]) {
            card.style.background = serviceGradients[type];
            card.addEventListener('mouseenter', () => {
                card.style.borderColor = serviceBorders[type];
                card.style.boxShadow = `0 15px 35px rgba(0, 0, 0, 0.6), 0 0 25px rgba(${type === 'one' ? '130,76,187' : type === 'two' ? '87,79,251' : '168,85,247'}, 0.3)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.borderColor = '';
                card.style.boxShadow = '';
            });
        }
    });

    /* ==========================================================================
       3. Carrossel de Projetos (Animação Fluida e Indicadores)
       ========================================================================== */
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');
    const dotsContainer = document.querySelector('.carousel-dots');
    
    if (track && slides.length > 0) {
        let currentIndex = 0;

        // Criar os dots (indicadores)
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === currentIndex) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });

        const dots = Array.from(document.querySelectorAll('.carousel-dot'));

        function updateCarousel() {
            // Movimentar a trilha com transição suave do CSS
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            
            // Atualizar active nos dots
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateCarousel();
        }

        prevBtn.addEventListener('click', prevSlide);
        nextBtn.addEventListener('click', nextSlide);
    }

    /* ==========================================================================
       4. Navegação Suave (Smooth Scroll)
       ========================================================================== */
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetElem = document.querySelector(targetId);
                if (targetElem) {
                    targetElem.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});
