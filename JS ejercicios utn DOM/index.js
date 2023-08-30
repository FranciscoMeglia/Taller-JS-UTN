/*
3.

a. Hacer un programa que permita cargar a una lista datos de la cantidad de ventas de cada mes de un
vendedor de una tienda.
b. Teniendo en cuenta la lista que nos permite armar el programa anterior, hacer un programa que
permita saber cual fue el mes en que mas ventas tuvo y que nos devuelva por consola tanto el mes
en que mas ventas realizo y cuantas ventas hizo.
c. Utilizando el DOM mostrar una lista de todos los meses y ventas del vendedor.
d. Hacer un programa que,Utilizando el DOM cambiar a color rojo en la lista del HTML (punto 3.c)el
mes con menos ventas.

4. Hacer un programa para un sitio de compra que nos pide lograr que solicite el ingreso de dos datos:dia de
la semana en el que esta ingresando al sitio,y si el usuario esta registrado como seguidor del sitio de
compra.
Si el usuario ingresa los dias Lunes o Miercoles y esta registrado como seguidor,indicarle en el body por
medio de un <p> que tendra un 10% de descuento en la compra,si el dia que ingresa es Martes o
Jueves,indicarle en el body por medio de un <p> que tendra un 5% de descuento en la compra; si el dia
ingresado es cualquier otro, no tiene descuento.
Si no esta registrado como seguidor del sitio, mandar un alert invitándolo a registrarse.

*/

const mes = document.getElementById("mes") 
const ventas = document.getElementById("ventas")
const enviar = document.getElementById("enviar")

// creo el array para guardar las ventass
const cantidadVentas = [
    
]

// funcion para cargar los datos del input en el array
const enviarFormulario = () => {

    // constructor
    function Person(mes, ventas) {
        this.mes = mes;
        this.ventas = ventas;
    }

    const person = new Person(mes.value , ventas.value)

    cantidadVentas.push(person)
    crearCard()

}

// hacer el addEventListenir del click
enviar.addEventListener("click" , enviarFormulario)

// CREAR CARDS
const cardsContainer = document.getElementById("cards-container")

const crearCard = () => {

    cardsContainer.innerHTML = ""

    cantidadVentas.map(item => {

        const tarjeta = document.createElement("div")
        tarjeta.classList.add("card")

        tarjeta.innerHTML = `<p>${item.mes}  ${item.ventas}</p>`

        cardsContainer.appendChild(tarjeta)

    })
}

crearCard()

const cantidadVentass = [
    {mes: "septiembre" , ventas: 10} ,
    {mes: "agosto" , ventas: 100} ,
    {mes: "octubre" , ventas: 20}
]


const prueba = () => {


    let objetoMayorVentas = cantidadVentass[0];  // Suponemos que el primero es el mayor

    for (let i = 1; i < cantidadVentass.length; i++) {
        if (cantidadVentass[i].ventas > objetoMayorVentas.ventas) {
            objetoMayorVentas = cantidadVentass[i];
        }
    }

    return objetoMayorVentas

}

console.log(prueba())

// cantidadVentass.map(item => {
//     item.ventas.
// })



















/*

let section=document.querySelector("section");

let alumno={
    nombre:"Juan Perez",
    edad:40,
    cursos:["HTML y CSS","JS","Bootstrap"]
}

let nombrePersona="Ana Ruiz"
//crear un div con la clase tarjeta con el contenido...
//uso del DOM para crear elemenos y agregarlos al HTML
//metodo para crear y agregar etiquetas

//document.createElement("elemento")
let tarjeta=document.createElement("div");
let h4=document.createElement("h4");

console.log(tarjeta)



//le agrego la clase tarjeta ?? -> classList
//agrego contenido al h4 que creamos

// tarjeta.classList.add("tarjeta");
// h4.textContent="Juan Perez"

// //agregar esta etiqueta al HTML
// //appendChild() -> agrega un nodo a un elemento padre
// tarjeta.appendChild(h4)
// section.appendChild(tarjeta)


//------------------ otra alternativa


//innerHTML? -> me muestra en un string las etiquetas y el contenido HTML interno de esta etiqueta
let tarjeta1=document.querySelector("#tarjeta1");
 console.dir(tarjeta1.innerHTML);


 tarjeta.classList.add('tarjeta');

 tarjeta.innerHTML=`
    <h4 class='titulo-tarjeta'>${alumno.nombre}</h4>
    <p>${alumno.edad} años</p>
    <h5>cursos:</h5>
    <ul>
        <li>${alumno.cursos[0]}</li>
        <li>${alumno.cursos[1]}</li>
        <li>${alumno.cursos[2]}</li>
    </ul>

 `
//agregalo como hijo del nodo section
 section.appendChild(tarjeta)

//  let alumno={
//     nombre:"Juan Perez",
//     edad:40,
//     cursos:["HTML y CSS","JS","Bootstrap"]
// }

//`${}` -> me permite agregar codigo JS dentro de un string

//nodo.setAttribute("atributo","valor")

let imagen=document.querySelector("img");

imagen.setAttribute("src","./hamburguer.jpg");
/* otra manera de cambiar un atributo de una etiqueta por medio de sus propiedades: 
imagen.src="./hamburguer.jpg";
*/ 


