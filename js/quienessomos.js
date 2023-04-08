window.addEventListener("load", function () {
    let indiceActual = 0;

    function mostrarSlide(indiceSlide) {
    const slides = document.querySelectorAll("#slider img");
    const cantidadSlides = slides.length;
    if (indiceSlide < 0) {
        indiceSlide = cantidadSlides - 1;
    } else if (indiceSlide >= cantidadSlides) {
        indiceSlide = 0;
    }
    slides[indiceActual].style.opacity = 0;
    slides[indiceSlide].style.opacity = 1;
    indiceActual = indiceSlide;
    }

    mostrarSlide(indiceActual);

    setInterval(function () {
    mostrarSlide(indiceActual + 1);
    }, 3000);
});
