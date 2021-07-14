const track = document.querySelector(".carousel__track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel__button--right");
const prevButton = document.querySelector(".carousel__button--left");
const rotateDelay = 3000;

var slideSize = slides[0].getBoundingClientRect();
var slideWidth = slideSize.width;

const warpToSlide = (track, currentSlide, targetSlide) => {
  if (!track.classList.contains("carousel__track__instant")) {
    track.classList.add("carousel__track__instant");
  }
  const amountToMove =
    slideWidth + parseInt(targetSlide.style.left.replace("px", "")) + "px";
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const moveToSlide = (track, currentSlide, targetSlide) => {
  if (track.classList.contains("carousel__track__instant")) {
    track.classList.remove("carousel__track__instant");
  }
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
  warpToSlide(track, currentSlide, currentSlide);
};

setSlidePosition();
window.onresize = setSlidePosition;

prevButton.addEventListener("click", (e) => {
  rotateTimer.stop();
  const currentSlide = track.querySelector(".current-slide");
  const firstSlide = track.querySelector(".first-slide");
  const lastSlide = track.querySelector(".last-slide");
  if (currentSlide == firstSlide) {
    warpToSlide(track, currentSlide, lastSlide.nextElementSibling);
    setTimeout(moveToSlide, 0, track, currentSlide, lastSlide);
  } else {
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
  }
  rotateTimer.start();
});

var rotateTimer = {
  handle: 0,
  start: function() {
      this.stop();
      this.handle = setTimeout(nextSlide, rotateDelay);
  },
  stop: function() {
      if (this.handle) {
          clearTimeout(this.handle);
          this.handle = 0;
      }
  }
};

const nextSlide = () => {
  rotateTimer.stop();
  const currentSlide = track.querySelector(".current-slide");
  const firstSlide = track.querySelector(".first-slide");
  const lastSlide = track.querySelector(".last-slide");
  const nextSlide = currentSlide.nextElementSibling;
  if (currentSlide == lastSlide) {
    moveToSlide(track, currentSlide, nextSlide);
    let loop = setTimeout(warpToSlide, 250, track, nextSlide, firstSlide);
  } else {
    moveToSlide(track, currentSlide, nextSlide);
  }
  rotateTimer.start();
};

nextButton.addEventListener("click", (e) => {
  nextSlide();
});

rotateTimer.start();
