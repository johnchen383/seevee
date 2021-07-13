const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const rotateDelay = 3000;

var slideSize = slides[0].getBoundingClientRect();
var slideWidth = slideSize.width;

const moveToSlide = (track, currentSlide, targetSlide) => {
  const amountToMove =
    slideWidth + parseInt(targetSlide.style.left.replace("px", "")) + "px";
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const setSlidePosition = () => {
  slideSize = slides[0].getBoundingClientRect();
  slideWidth = slideSize.width;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = (i - 1) * slideWidth + "px";
  }
  const currentSlide = track.querySelector(".current-slide");
  moveToSlide(track, currentSlide, currentSlide);
}

setSlidePosition();
window.onresize = setSlidePosition;

prevButton.addEventListener("click", (e) => {
  clearTimeout(autoRotate);
  const currentSlide = track.querySelector(".current-slide");
  var firstSlide = track.querySelector(".first-slide");
  var lastSlide = track.querySelector(".last-slide");
  if (currentSlide == firstSlide) {
    moveToSlide(track, currentSlide, lastSlide);
  } else {
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
  }
  autoRotate = setTimeout(nextSlide, rotateDelay);
});

const nextSlide = () => {
  clearTimeout(autoRotate);
  const currentSlide = track.querySelector(".current-slide");
  var firstSlide = track.querySelector(".first-slide");
  var lastSlide = track.querySelector(".last-slide");
  if (currentSlide == lastSlide) {
    moveToSlide(track, currentSlide, firstSlide);
  } else {
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
  }
  autoRotate = setTimeout(nextSlide, rotateDelay);
};

nextButton.addEventListener("click", (e) => {
  nextSlide();
});

let autoRotate = setTimeout(nextSlide, rotateDelay);
