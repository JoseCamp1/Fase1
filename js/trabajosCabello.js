
// document.addEventListener('DOMContentLoaded', function() {} , no sirvió de esta forma en github
// Se agrega un event listener al objeto window que se activa cuando la página web termina de cargarse.
// Cuando esto ocurre, se llama a la función agregar_Corte_de_Pelo().
window.addEventListener("load", () => {
    agregar_Corte_de_Pelo()    
});

// se define una constante `cortes` que es un array de objetos que tienen la
// propiedad `imagen_url` que es una cadena de texto que contiene la URL de la
// imagen del corte de pelo.
const cortes = [
    {
        imagen_url:"image/CortesdePelo1.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo2.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo3.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo4.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo5.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo6.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo7.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo8.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo9.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo10.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo11.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo12.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo13.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo14.jpeg",
    },
    {
        imagen_url:"image/CortesdePelo15.jpeg",
    },
];

// se define una función llamada `agregar_Corte_de_Pelo()` que se encarga de
// generar el HTML que se mostrará en la página.
function agregar_Corte_de_Pelo(){
    // se define una constante `cortes_array` que se crea mapeando el array
    // `cortes` y generando un nuevo array con las imágenes HTML. Cada objeto de
    // `cortes` se transforma en una imagen HTML con la URL de la imagen y un
    // atributo `loading` con valor `lazy` para mejorar la carga de la página. 
    const cortes_array = cortes.map(p => {
        return `
        <img src="${p.imagen_url}" loading="lazy" alt="No se encontró la imagen">
        `
    } );
    // debugger
    
    // se selecciona el elemento del HTML con el ID `lista_Cortes` y se
    // le asigna el valor del HTML generado en el paso anterior mediante la
    // propiedad `innerHTML`. La función `join("")` une todos los elementos del
    // array `cortes_array` en un solo string para que se puedan insertar todos
    // los elementos en el elemento HTML seleccionado.
    document.getElementById("lista_Cortes").innerHTML= cortes_array.join("");
}
