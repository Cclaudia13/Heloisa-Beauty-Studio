document.addEventListener('DOMContentLoaded', function () {
    const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Ajuste a velocidade de rolagem conforme desejar
    });
  });


document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
      const accordionBody = button.nextElementSibling;

      // Toggle accordion
      const expanded = button.getAttribute('aria-expanded') === 'true' || false;
      button.setAttribute('aria-expanded', !expanded);
      accordionBody.style.maxHeight = expanded ? '0' : accordionBody.scrollHeight + 'px';
  });
});


