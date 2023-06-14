/* console.log('Hola mundo')
console.log(180+2)
console.log("Hola esta es la suma de 2 numeros", 20+5,"°") */

const letrasContainer=document.getElementById("letras-container");
const opcionesContainer=document.getElementById("opciones-container");
const seccionIngresarUsuario=document.getElementById("seccion-ingresar-usuario");         /*   <------CONSTANTES */
const nuevoJuegoContainer=document.getElementsByClassName("nuevo-juego-container");
const nuevoJuegoBoton=document.getElementById("nuevo-juego-button");
const canvas=document.getElementById("canvas");
const resultadoTexto=document.getElementById("resultado-texto");

let opciones={
    frutas:[
        "Manzana",
        "Frutilla",
        "Pera",
        "Banana",
        "Kiwi",
        "Tomate",
        "Durazno",
        "Naranja",
        "Uva",
        "Sandia",
    ],
    animales:[
        "Perro",
        "Gato",
        "Loro",
        "Gallina",
        "Koala",
        "Oso",
        "Leon",
        "Pantera",
        "Jirafa",
        "Hamster",
    ],
    paises:[
        "Argentina",
        "Francia",
        "Croacia",
        "Chile",
        "Uruguay",
        "Estados Unidos",
        "Inglaterra",
        "Nueva Zelanda",
        "España",
        "Paraguay",
    ]
} 

