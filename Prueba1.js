
document.addEventListener('DOMContentLoaded', function () {
  const header = document.getElementById('main-header');
  const esloganDiv = document.querySelector('.Div-eslogan');
  
  // Función para manejar el cambio de header en scroll
  function handleScroll() {
    if (window.scrollY > esloganDiv.offsetHeight - 100) {
      header.classList.add('header-scrolled');
    } else {
      header.classList.remove('header-scrolled');
    }
  }
  
  // Escuchar evento de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Verificar al cargar la página
  handleScroll();
});

// Agregar esto a tu archivo JS o en una etiqueta script al final del documento
document.addEventListener('DOMContentLoaded', function() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        observer.unobserve(entry.target);
      }
    });
  });
  
  const statsSection = document.querySelector('#about');
  if (statsSection) {
    observer.observe(statsSection);
  }
  
  function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
      const target = parseInt(counter.innerText);
      let count = 0;
      const speed = 2000 / target; // Ajusta la velocidad según el número
      
      const updateCount = () => {
        const increment = target / 200;
        
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count) + '+';
          setTimeout(updateCount, speed);
        } else {
          counter.innerText = target + '+';
        }
      };
      
      updateCount();
    });
  }
});