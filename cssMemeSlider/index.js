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

// Функция переключения слайдов
function changeSlide(index) {
    buttons[currentIndex].classList.remove('active'); // Убираем активный класс с текущей кнопки
    currentIndex = index; // Обновляем индекс
    buttons[currentIndex].classList.add('active'); // Добавляем активный класс новой кнопке
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`; // Сдвигаем контейнер слайдов
    captionElement.textContent = captions[currentIndex]; // Обновляем подпись
}

// Привязываем события клика к кнопкам
buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        changeSlide(index);
    });
});