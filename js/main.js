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
    /* Скрываем текущий слайд */ 
        
        slide.classList.add('hidden');
        slide.removeAttribute('data-active');    


       /* обычный код а ниже будет сокращенный код с помощью унарного оператора 
        let nextSlideIndex;

        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        } */

        const nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
        

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove('hidden');
        nextSlide.setAttribute('data-active', '');

    });
});

btnNext.onclick = function() {
    /* Скрываем текущий слайд */

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    /* Показываем текущий слайд */
    const nextSlideIndex = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

};


btnPrev.onclick = function() {
    /* Скрываем текущий слайд */

    const currentSlide = slider.querySelector('[data-active]');
    const currentSlideIndex = +currentSlide.dataset.index;
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    /* Показываем текущий слайд */
    const nextSlideIndex = currentSlideIndex === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');

};