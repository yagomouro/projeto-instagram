var slides = document.querySelectorAll('#slides .slide');
var slideAtual = 0;
var intervaloSlide = setInterval(nextSlide, 5000);



function nextSlide() {
    slides[slideAtual].className = 'slide';
    slideAtual = (slideAtual + 1) % slides.length;
    slides[slideAtual].className = 'slide active';
};