const slides = document.querySelectorAll('.slider__slide');
const buttons = document.querySelectorAll('.slider__control');
const sliderContainer = document.querySelector('.slider__container');
let currentIndex = 0;

buttons[currentIndex].classList.add('active');

function changeSlide(index) {
    buttons[currentIndex].classList.remove('active');
    currentIndex = index;
    buttons[currentIndex].classList.add('active');
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeSlide(index);
    });
});
