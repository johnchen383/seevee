const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

//set position of each slide
for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = (i-1)*slideWidth + 'px';
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const amountToMove = slideWidth + 'px';
    track.style.transform += 'translateX(+' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    prevSlide.classList.add('current-slide');
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const amountToMove = slideWidth + 'px';
    track.style.transform += 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
});