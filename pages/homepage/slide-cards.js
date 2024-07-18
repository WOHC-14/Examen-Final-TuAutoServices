document.addEventListener('DOMContentLoaded', function() {
  const wrapper = document.querySelector('.cars-wrapper');
  const slides = document.querySelectorAll('.cars-slide');
  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');
  let currentIndex = 0;
  let slidesToShow = calculateSlidesToShow();

  function calculateSlidesToShow() {
    if (window.innerWidth <= 1000) {
      return 1;
    }
    else if (window.innerWidth <= 1500) {
      return 4;
    } 
  }

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
    if (currentIndex < slides.length - slidesToShow) {
      currentIndex++;
      updateCarousel();
    }
  });


  window.addEventListener('resize', () => {
    slidesToShow = calculateSlidesToShow();
    updateCarousel();
  });

  // Inicializar el carrusel
  updateCarousel();
});
