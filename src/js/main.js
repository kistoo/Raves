const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const totalItems = carouselItems.length;
let currentIndex = 0;

document.querySelector('.carousel-control.left').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  updateCarousel();
});

document.querySelector('.carousel-control.right').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % totalItems;
  updateCarousel();
});

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${offset}%)`;
}
