document.addEventListener("DOMContentLoaded", ()=>{
    crear_productos()    
});

const productos = [
    {
        titulo:"Cremas mantequilla cuccio, hidratación 24h",
        imagen_url:"image/Productos1.jpeg",
    },
    {
        titulo:"Tratamiento Anti-caída Shampoo",
        imagen_url:"image/Productos2.jpeg",
    },
    {
        titulo:"Tratamiento Anti-caída Ampolletas",
        imagen_url:"image/Productos3.jpeg",
    },
    {
        titulo:"Blonde Plex",
        imagen_url:"image/Productos4.jpeg",
    },
    {
        titulo:"Ampollas sin enjuague",
        imagen_url:"image/Productos5.jpeg",
    },
    {
        titulo:"Ampollas sin enjuague",
        imagen_url:"image/Productos6.jpeg",
    },
    {
        titulo:"Ampollas sin enjuague",
        imagen_url:"image/Productos7.jpeg",
    },
    {
        titulo:"Ampollas sin enjuague",
        imagen_url:"image/Productos8.jpeg",
    },
    {
        titulo:"Tratamiento de hidratación",
        imagen_url:"image/Productos9.jpeg",
    },
    {
        titulo:"Tratamiento de hidratación",
        imagen_url:"image/Productos10.jpeg",
    },
    {
        titulo:"Tratamiento de hidratación",
        imagen_url:"image/Productos11.jpeg",
    },
    {
        titulo:"Tratamiento de hidratación",
        imagen_url:"image/Productos12.jpeg",
    },
    {
        titulo:"Tratamiento células madres",
        imagen_url:"image/Productos13.jpeg",
    },
    {
        titulo:"Tratamiento células madres",
        imagen_url:"image/Productos14.jpeg",
    },
    {
        titulo:"Nanoplastia",
        imagen_url:"image/Productos15.jpeg",
    },
    
];

function crear_productos(){ 
    const productos_array = productos.map(p => {
        return `
        <figure>
            <img src="${p.imagen_url}" alt="No se encontró la imagen">
            <figcaption>
                <p>${p.titulo}</p>
            </figcaption>
        </figure>
        `
    } );
    // debugger
    document.getElementById("productos").innerHTML= productos_array.join("");
}