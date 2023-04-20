//Se Espera a que la página haya cargado completamente antes de ejecutar el código
window.addEventListener("load", function () {
    //Se Inicializa la variable para llevar el índice del slide actual
    let indiceActual = 0;

    //Se Define una función para mostrar el slide indicado por su índice
    function mostrarSlide(indiceSlide) {
        //Se Obtiene todos los slides de la página y su cantidad total
        const slides = document.querySelectorAll("#slider img");
        const cantidadSlides = slides.length;

        //Se Verifica si se ha pasado del límite de slides para volver al primero o al último
        if (indiceSlide < 0) {
            indiceSlide = cantidadSlides - 1;
        } else if (indiceSlide >= cantidadSlides) {
            indiceSlide = 0;
        }

        //Se Cambia la opacidad del slide actual para ocultarlo y del slide indicado para mostrarlo
        slides[indiceActual].style.opacity = 0;
        slides[indiceSlide].style.opacity = 1;

        //Se Actualiza el índice del slide actual
        indiceActual = indiceSlide;
    }

    //Se Muestra el primer slide al cargar la página
    mostrarSlide(indiceActual);

    //Se Repite la función para mostrar el siguiente slide cada 3 segundos
    setInterval(function () {
        mostrarSlide(indiceActual + 1);
    }, 3000);
});



//Implementando jQuery
 //Se Agrega un evento de clic al botón
$("input").click(function() {
    //Se Obtiene el elemento de audio
    const audio = $("#audio_btn").get(0);
    
    //Se Reinicia el audio al principio
    $(audio).prop("currentTime", 0);
    
    //Se Reproduce el audio
    $(audio).get(0).play();
});