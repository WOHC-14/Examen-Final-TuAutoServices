document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.cars-wrapper');
    const slides = document.querySelectorAll('.cars-slide');
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');
    let currentIndex = 0;
  
    function updateCarousel() {
      const slideWidth = slides[0].offsetWidth;
      wrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }
  
    arrowLeft.addEventListener('click', () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  
    arrowRight.addEventListener('click', () => {
      if (currentIndex < slides.length - 4) {
        currentIndex++;
        updateCarousel();
      }
    });
  
    // Inicializar el carrusel
    updateCarousel();
  });