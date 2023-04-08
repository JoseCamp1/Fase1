document.addEventListener("DOMContentLoaded", ()=>{
    agregar_Corte_de_Pelo()    
});

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

function agregar_Corte_de_Pelo(){ 
    const cortes_array = cortes.map(p => {
        return `
        <img src="${p.imagen_url}" alt="No se encontró la imagen">
        `
    } );
    // debugger
    document.getElementById("lista_Cortes").innerHTML= cortes_array.join("");
}

