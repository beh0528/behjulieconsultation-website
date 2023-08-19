const slider = document.querySelector(".slider");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");

let currentSlide = 0;
const slides = slider.querySelectorAll("img");
const slideWidth = slides[1].clientWidth;

nextButton.addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  updateSlider();
});

prevButton.addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

function updateSlider() {
  slider.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

// 自动播放
setInterval(() => {
  currentSlide = (currentSlide + 2) % slides.length;
  updateSlider();
}, 4000);  // 5秒自动切换


