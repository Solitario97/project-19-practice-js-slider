const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('#btnNext');
const btnPrev = document.querySelector('#btnPrev');


sliderItems.forEach(function (slide, index) {

    if (index !== 0) {
        
        slide.classList.add('hidden');
    }

    /* добавим индексы */
    slide.dataset.index = index;

    /* Добавляем дата-атрибут для активного слайда */

    sliderItems[0].setAttribute('data-active', '');

    /* Кликаем по слайдам  */

    slide.addEventListener('click', function () {
        
        showNextSlide('next');       
    });
});

btnNext.onclick = function() {

    showNextSlide('next');
};


btnPrev.onclick = function() {
    
    showNextSlide('prev');
};

function showNextSlide(direction) {

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    // Рассчитываем след индекс в зависимости он направления движения
    let nextSlideIndex;
    if (direction === 'next') {
        nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;

    } else if (direction === 'prev') {
        nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    }

    /* Показываем следующий слайд */
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
}