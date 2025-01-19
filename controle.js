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
  