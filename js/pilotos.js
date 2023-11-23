const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const slideWidth = slideItems[0].clientWidth;
let currentPosition = 0;

setInterval(() => {
  currentPosition -= slideWidth;
  slides.style.transition = 'transform 0.5s ease';
  slides.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition === -(slideWidth * (slideItems.length - 1))) {
    setTimeout(() => {
      slides.style.transition = 'none';
      currentPosition = 0;
      slides.style.transform = `translateX(${currentPosition}px)`;
    }, 500);
    setTimeout(() => {
      slides.style.transition = 'transform 0.5s ease';
    }, 600);
  }
}, 3000); // Cambiar cada 3 segundos (ajusta el tiempo según necesites)
