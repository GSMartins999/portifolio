document.addEventListener('DOMContentLoaded', () => {
    const colors = {
      react: '#CBF9FF',
      js: '#FFF5CB',
      ts: '#CBE7FF',
      mysql: '#FFF5CB',
      html: '#FFCBCB',
      css: '#CBD3FF',
      python: '#FFEDCB',
      wordpress: '#E8E5DE',
    };
  
    const techElements = document.querySelectorAll('.tech');
  
    techElements.forEach((tech) => {
      const type = tech.getAttribute('data-type');
      const color = colors[type] || '#FFFFFF';
      tech.style.backgroundColor = color;
    });
  });

  document.addEventListener('DOMContentLoaded', () => {
    const corfundo = {
      one: '#824CBB',
      two: '#574FFB',
      tree: '#462572',
    };
  
    const fundoElements = document.querySelectorAll('.fundo');
  
    fundoElements.forEach((fundo) => {
      const type = fundo.getAttribute('data-type');
      const color = corfundo[type] || '#CBE7FF';
      fundo.style.backgroundColor = color;
    });
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const carouselContainer = document.querySelector(".carousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const prevButton = document.querySelector(".carousel-button.prev");
    const nextButton = document.querySelector(".carousel-button.next");
    let currentIndex = 0;

    function updateCarousel() {
        // Esconde todos os itens
        carouselItems.forEach((item, index) => {
            item.style.display = index === currentIndex ? "block" : "none";
        });
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        updateCarousel();
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        updateCarousel();
    }

    // Adiciona eventos aos botões
    prevButton.addEventListener("click", showPrev);
    nextButton.addEventListener("click", showNext);

    // Atualiza o carrossel inicialmente
    updateCarousel();
});
