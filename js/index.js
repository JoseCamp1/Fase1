//Implementando jQuery
 // Agrega un evento de clic al botón
$("input").click(function() {
    // Obtiene el elemento de audio
    const audio = $("#audio_btn").get(0);
    
    // Reinicia el audio al principio
    $(audio).prop("currentTime", 0);
    
    // Reproduce el audio
    $(audio).get(0).play();
});