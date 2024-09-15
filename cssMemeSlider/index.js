const slides = document.querySelectorAll('.slider__slide');
const buttons = document.querySelectorAll('.slider__control');
const sliderContainer = document.querySelector('.slider__container');
const captions = [
    "JS - как родной отец",
    "Literly me",
    "Ленивый засранец",
    "Ох уж этот Shelter"
];
const captionElement = document.querySelector('.slider__caption');
let currentIndex = 0;

// Устанавливаем первый слайд активным по умолчанию
buttons[currentIndex].classList.add('active');
captionElement.textContent = captions[currentIndex];
captionElement.classList.add('active');

// Функция плавного переключения подписей
function changeCaption(newIndex) {
    captionElement.classList.remove('active');
    setTimeout(() => {
        captionElement.textContent = captions[newIndex];
        captionElement.classList.add('active');
    }, 500); 
}

// Функция переключения слайдов
function changeSlide(index) {
    buttons[currentIndex].classList.remove('active');
    currentIndex = index;
    buttons[currentIndex].classList.add('active');
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    changeCaption(currentIndex);
}

// Привязываем события клика к кнопкам
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeSlide(index);
    });
});
