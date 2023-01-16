// Top collections checkbox
const btns = document.querySelectorAll('.checkbox__btn');

btns.forEach(checkbox__btn => {
    checkbox__btn.addEventListener('click',
    function() {
        btns.forEach(elem =>
    elem.classList.remove('active'));
        this.classList.add('active');
    });
});


// Slider
let offset = 0;
const sliderLine = document.querySelector('.tranding__slider');

document.querySelector('.next').addEventListener('click', 
function(){
    offset += 400;
    if(offset > 800) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.back').addEventListener('click', 
function(){
    offset -= 400;
    if(offset < 0) {
        offset = 800;
    }
    sliderLine.style.left = -offset + 'px';
});