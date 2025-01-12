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
  