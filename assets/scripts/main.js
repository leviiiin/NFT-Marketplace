// Top collections checkbox
const btns = document.querySelectorAll('.checkbox__btn');
console.log(btns)

btns.forEach(checkbox__btn => {
    checkbox__btn.addEventListener('click', function() {
        btns.forEach(elem =>
            elem.classList.remove('active'));
        this.classList.add('active');
    });
});


// js-categories-slider
const sliderElement = document.querySelector('.js-categories-slider');
// console.log(sliderElement)
const swiper = new Swiper(sliderElement , {

    slidesPerView: 6,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});


// js-tranding-slider
const sliderElementTwo = document.querySelector('.js-tranding-slider');
// console.log(sliderElement)
const swiperTwo = new SwiperTwo(sliderElement , {

    slidesPerView: 4,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
});