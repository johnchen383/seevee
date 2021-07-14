"use strict";

var track = document.querySelector(".carousel__track");
var slides = Array.from(track.children);
var nextButton = document.querySelector(".carousel__button--right");
var prevButton = document.querySelector(".carousel__button--left");
var rotateDelay = 3000;
var slideSize = slides[0].getBoundingClientRect();
var slideWidth = slideSize.width;

var warpToSlide = function warpToSlide(track, currentSlide, targetSlide) {
  if (!track.classList.contains("carousel__track__instant")) {
    track.classList.add("carousel__track__instant");
  }

  var amountToMove = slideWidth + parseInt(targetSlide.style.left.replace("px", "")) + "px";
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

var moveToSlide = function moveToSlide(track, currentSlide, targetSlide) {
  if (track.classList.contains("carousel__track__instant")) {
    track.classList.remove("carousel__track__instant");
  }

  var amountToMove = slideWidth + parseInt(targetSlide.style.left.replace("px", "")) + "px";
  track.style.transform = "translateX(-" + amountToMove + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

var setSlidePosition = function setSlidePosition() {
  slideSize = slides[0].getBoundingClientRect();
  slideWidth = slideSize.width;

  for (var i = 0; i < slides.length; i++) {
    slides[i].style.left = (i - 1) * slideWidth + "px";
  }

  var currentSlide = track.querySelector(".current-slide");
  warpToSlide(track, currentSlide, currentSlide);
};

setSlidePosition();
window.onresize = setSlidePosition;
prevButton.addEventListener("click", function (e) {
  rotateTimer.stop();
  var currentSlide = track.querySelector(".current-slide");
  var firstSlide = track.querySelector(".first-slide");
  var lastSlide = track.querySelector(".last-slide");

  if (currentSlide == firstSlide) {
    warpToSlide(track, currentSlide, lastSlide.nextElementSibling);
    setTimeout(moveToSlide, 0, track, currentSlide, lastSlide);
  } else {
    var prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
  }

  rotateTimer.start();
});
var rotateTimer = {
  handle: 0,
  start: function start() {
    this.stop();
    this.handle = setTimeout(nextSlide, rotateDelay);
  },
  stop: function stop() {
    if (this.handle) {
      clearTimeout(this.handle);
      this.handle = 0;
    }
  }
};

var nextSlide = function nextSlide() {
  rotateTimer.stop();
  var currentSlide = track.querySelector(".current-slide");
  var firstSlide = track.querySelector(".first-slide");
  var lastSlide = track.querySelector(".last-slide");
  var nextSlide = currentSlide.nextElementSibling;

  if (currentSlide == lastSlide) {
    moveToSlide(track, currentSlide, nextSlide);
    var loop = setTimeout(warpToSlide, 250, track, nextSlide, firstSlide);
  } else {
    moveToSlide(track, currentSlide, nextSlide);
  }

  rotateTimer.start();
};

nextButton.addEventListener("click", function (e) {
  nextSlide();
});
rotateTimer.start();