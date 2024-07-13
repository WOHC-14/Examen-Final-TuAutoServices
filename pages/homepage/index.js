//carrusel de imagenes
var swiper1 = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
});


  //menu desplegable
  function toggleMenu() {
    const navSection = document.querySelector('.nav-section');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (navSection.style.display === 'flex') {
      navSection.style.display = 'none';
      menuIcon.classList.remove('active');
    } else {
      navSection.style.display = 'flex';
      menuIcon.classList.add('active');
    }
  }
    

   


