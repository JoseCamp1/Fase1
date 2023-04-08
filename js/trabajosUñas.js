window.addEventListener("load", ()=>{
    agregar_trabajo_en_uñas()    
});

const uñas = [
    {
        imagen_url:"image/Uñas1.jpeg",
    },
    {
        imagen_url:"image/Uñas2.jpeg",
    },
    {
        imagen_url:"image/Uñas3.jpeg",
    },
    {
        imagen_url:"image/Uñas4.jpeg",
    },
    {
        imagen_url:"image/Uñas5.jpeg",
    },
    {
        imagen_url:"image/Uñas6.jpeg",
    },
    {
        imagen_url:"image/Uñas7.jpeg",
    },
    {
        imagen_url:"image/Uñas8.jpeg",
    },
    {
        imagen_url:"image/Uñas9.jpeg",
    },
    {
        imagen_url:"image/Uñas10.jpeg",
    },
    {
        imagen_url:"image/Uñas11.jpeg",
    },
    {
        imagen_url:"image/Uñas12.jpeg",
    },
    {
        imagen_url:"image/Uñas13.jpeg",
    },
    {
        imagen_url:"image/Uñas14.jpeg",
    },
    {
        imagen_url:"image/Uñas15.jpeg",
    },
    {
        imagen_url:"image/Uñas16.jpeg",
    },
    {
        imagen_url:"image/Uñas17.jpeg",
    },
    {
        imagen_url:"image/Uñas18.jpeg",
    },
    {
        imagen_url:"image/Uñas19.jpeg",
    },
    {
        imagen_url:"image/Uñas20.jpeg",
    },
    {
        imagen_url:"image/Uñas21.jpeg",
    },
    {
        imagen_url:"image/Uñas22.jpeg",
    },
    {
        imagen_url:"image/Uñas23.jpeg",
    },
    {
        imagen_url:"image/Uñas24.jpeg",
    },
    {
        imagen_url:"image/Uñas25.jpeg",
    },
    {
        imagen_url:"image/Uñas26.jpeg",
    },
    {
        imagen_url:"image/Jellyspa2.jpeg",
    },

];

function agregar_trabajo_en_uñas(){ 
    const uñas_array = uñas.map(p => {
        return `
        <img src="${p.imagen_url}" alt="No se encontró la imagen">
        `
    } );
    // debugger
    document.getElementById("lista_uñas").innerHTML= uñas_array.join("");
}