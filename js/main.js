const slider = document.querySelector('#slider');
const sliderItems = Array.from(slider.children);

sliderItems.forEach(function (slide, index) {

    if (index !== 0) {
        
        slide.classList.add('hidden');
    }

    /* добавим индексы */
    slide.dataset.index = index;

    /* Кликаем по слайдам  */

    slide.addEventListener('click', function () {
        slide.classList.add('hidden');
        


       /* обычный код а ниже будет сокращенный код с помощью унарного оператора 
        let nextSlideIndex;

        if (index + 1 === sliderItems.length) {
            nextSlideIndex = 0;
        } else {
            nextSlideIndex = index + 1;
        } */

        let nextSlideIndex = index + 1 === sliderItems.length ? 0 : index + 1;
        

        const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);

        nextSlide.classList.remove('hidden');
    });
});