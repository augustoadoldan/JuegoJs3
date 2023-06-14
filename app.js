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
//contadores
let winCount=0;
let count=0;
let chosenWord=0;

const displayOptions=()=>{
    opcionesContainer.innerHTML+=`<h3> Por favor seleccione una opcion</h3>`;
    let buttonCon=document.createElement("div");
    for (let value in options){
        buttonCon.innerHTML+=`<button class="options" onclick="generateWord('{value})">${value}</button)`
    }
    opcionesContainer.appendChild(buttonCon);
};

const blocker=()=>{
    let optionsButtons=document-querySelectorAll('.options');
    let letterButtons=document.querySelectorAll('.letters');
    
    optionsButtons.forEach((button)=>{
        button.disabled=true;
    });
    letterButtons.forEach((button)=>{
        button.disabled.true;
    });
    nuevoJuegoContainer.classList.remove("hide");

};

//Generador de palabras

const generateWord=(optionValue)=>{
    let optionsButtons=document.querySelectorAll('.options');
    optionsButtons.forEach((button)=>{
        if (button.innerText.tolowerCase()===optionValue){
            button.classList.add("active");
        }
        button.disabled=true;
    });
}

// inicializar el contenido de las letras en 0 y limpiamos en 1

letrasContainer.classList.remove("hide");
seccionIngresarUsuario=innerText="";

let optionArray=options[optionValue];

//elegir una palabra aleatoria

chosenWord=optionArray[Math.floor(Math.random()*optionArray.lenght)];

//la funcion UpperCase devuelve la cadena en mayuscula
chosenWord=chosenWord.toUpperCase();

//reemplzaremos las letras con "_"
let displayItem=chosenWord.replace(/./g,'<span class="dashes">_ </span');

seccionIngresarUsuario.innerHTML=displayItem;

//cuando se presione el boton de nuevo juego se debe iniciar todo

seccionIngresarUsuario.innerHTML="";
opcionesContainer.innerHTML="";
letrasContainer.classList.add("hide");
nuevoJuegoContainer.innerHTML="";
letrasContainer.innerHTML="";

//crear las letras

for (let i=65; i<91 ;i++){
    let button=document.createElement("button");
    button.classList.add("letters");
    //de numeros a ascii (a - z)
    button.innerText=String.fromCharCode(i);

    //botones de los caracteres
    button.addEventListener("click",()=>{
        let charArray=chosenWord.split("");
        let dashes=getElementsByClassName("dashes");

        if (charArray.includes(button.innerText)){
            charArray.forEach((char, index)=>{
                if (char===button.innerText){
                    //reemplazar el espacio en blanco por el caracter
                    dashes[index].innerText=char;
                    //si esto pasa se va a incrementar el contador winCount
                    winCount+=1;
                    if (winCount===charArray.lenght){
                        resultadoTexto.innerHTML=`<h2 class="win-msg">Ganaste:)</h2`;
                        //bloquear todos los botones
                        blocker();

                    }

                }
            })
        }
    })
}


