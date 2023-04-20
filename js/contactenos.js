// Selecciona el elemento HTML con el ID "form" y lo guarda en la variable $form.
const $form = document.querySelector("#form")

// Agrega un evento de escucha al formulario para que cuando se envíe, se ejecute la función handleSubmit.
$form.addEventListener('submit',handleSubmit)

// Define la función asíncrona handleSubmit.
async function handleSubmit(){
    
    // Previene que se realice la acción por defecto del formulario (enviar los datos a una nueva página).
    event.preventDefault()

    // Crea un nuevo objeto FormData con el formulario.
    const form = new FormData(this)

    // Realiza una petición asíncrona a la dirección especificada en el atributo
    // "action" del formulario. La petición utiliza el método especificado en el
    // atributo "method" del formulario y envía los datos del formulario
    // utilizando el objeto FormData creado anteriormente. También incluye un
    // encabezado que especifica que se espera una respuesta en formato JSON.
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            'Accept': 'application/json'
        }
    })
    // Si la respuesta de la petición es exitosa (código 200-299), resetea el formulario y muestra un mensaje de agradecimiento.
    if(response.ok){
        this.reset()
        alert('Gracias por contactar con Morfos Salon. nos comunicaremos con usted pronto.');
    }
}


//*** Segundo Método ***
//se crea una constante llamada $form que contiene el elemento HTML que tiene el atributo id con el valor "form" del html.
// const $form = document.querySelector("#form")
// //se  crea una constante llamada $buttonMailto que contiene el elemento HTML que
// //tiene el atributo id con el valor "btn-oculto". Este elemento es un botón
// //oculto que se utilizará para enviar el correo electrónico. 
// const $buttonMailto = document.querySelector('#btn-oculto')
// // agrega un event listener al formulario para que escuche cuando se hace clic
// // en el botón de envío. El segundo argumento es la función que se ejecutará
// // cuando se dispare el evento.
// $form.addEventListener('submit',handleSubmit)
// //Se llama al método preventDefault()
// function handleSubmit(event){
//     //el objeto event es para evitar que el
//     //formulario se envíe de forma predeterminada (es decir, que se recargue la página).
//     event.preventDefault()
//     //se crea un nuevo objeto FormData llamado form a partir del formulario que
//     //se ha enviado. Esto crea un objeto que contiene todos los campos del
//     //formulario y sus valores.
//     const form = new FormData(this)
//     //se establece el atributo href del botón oculto con los datos del
//     //formulario (nombre, apellidos, teléfono, correo electrónico y mensaje)
//     //utilizando la sintaxis de plantilla de cadena.    
//     $buttonMailto.setAttribute('href',`mailto:joacachavez20@gmail.com?subject=Formulario de la Pagina Web 
//     &body=Nombre: ${form.get('nombre')} ${form.get('apellidos')} Teléfono: ${form.get('teléfono')} 
//     Email: ${form.get('email')} Mensaje: ${form.get('mensaje')}`)
//     // se hace clic en el botón oculto para enviar el correo electrónico.
//     $buttonMailto.click()
// }


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



