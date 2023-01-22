// Top collections checkbox
const btns = document.querySelectorAll('.checkbox__btn');

btns.forEach(checkbox__btn => {
    checkbox__btn.addEventListener('click', function() {
        btns.forEach(elem =>
            elem.classList.remove('active'));
        this.classList.add('active');
    });
});


