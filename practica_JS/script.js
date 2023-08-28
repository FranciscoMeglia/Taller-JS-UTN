//Enunciado

//1 - Agregar utilizando el DOM , la informacion de la segunda tarjeta. Esta misma la encontramos en el segundo objeto de la lista de productos dado a continuacion(es decir el producto "Set cremas dia").

//2 - lograr que al clickear en cada tarjeta, sume 1 producto a la lista de compras y figure en el chango de compra la cantidad de productos agregados a la lista de compra .

/* 3 - hacer que al clickear el boton "Finalizar Compra", tire un alert() con el total a pagar.
Tener en cuenta que a aquellos productos que tienen descuento ( descuento:true), se le debe descontar un 5%
*/

//ADICIONAL!!( es decir si ya pudimos hacer los otros 3 puntos anteriores)

//4 - Hacer que en la lista de compras , aquellos productos con descuento figuren con un color de tipografia verde(el verde que mas les guste).

//5 - hacer funcional el boton de tema dia(boton con un sol), para que al clickearlo , pase a tener una luna ( imagen moon.svg en la carpeta de imagenes); y el body tenga como clase el tema noche (en la hoja de estilos figuran las propiedades como .tema-noche)


const productos=[{
    nombre:"Tonico facial",
    precio:7200,
    descuento:true,
    categoria:"tonicos"
},{
    nombre:"Set cremas dia",
    precio:12300,
    descuento:false,
    categoria:"cuidados"
},{
    nombre:"Set cremas noche",
    precio:14000,
    descuento:false,
    categoria:"cuidados"
}];

// 1- 
document.getElementById("nombre-producto").innerText = productos[1].nombre
document.getElementById("categoria").innerText = productos[1].categoria
document.getElementById("precio").innerHTML = `<span>$</span> ${productos[1].precio}`

// 2-
// CREAMOS EL CARRITO (VACIO)
const carrito = []

// RECUPERAMOS EL BOTON ("agregar al carrito") DE CADA PRODUCTO
const cremaDia = document.getElementById("cremas-dia")
const cremaNoche = document.getElementById("cremas-noche")
const tonicaFacial = document.getElementById("tonica-facial")

// RECUPERAMOS EL DIV QUE MUESTRA LA CANTIDAD DE PRODUCTOS
const cantProductos = document.getElementById("cant-productos")

// EL DIV MUESTRA 0 ASI QUE LO PASAMOS A ENTERO CON (parseInt())
let contador = parseInt(cantProductos.innerText = "0")

// LE AGREGAMOS LOS EVENTOS A CADA BOTON
tonicaFacial.addEventListener("click" , () => {
    carrito.push(productos[0])
    cantProductos.innerText = carrito.length
    mostrarProd()
})

cremaDia.addEventListener("click" , () => {
    carrito.push(productos[1])
    cantProductos.innerText = carrito.length 
    mostrarProd()
})

cremaNoche.addEventListener("click" , () => {
    carrito.push(productos[2])
    cantProductos.innerText = carrito.length
    mostrarProd()
})

// CREAMOS LA FUNCION PARA MOSTRAR PRODUCTOS EN EL CARRITO
const lista = document.getElementById("lista")

const mostrarProd = () => {

    lista.innerHTML = " "    

    carrito.map(prod => {

        if (prod.descuento === true) {

            const li = document.createElement("li")
            li.className = "border-bottom d-flex justify-content-between"

            li.style.color = "green"
    
            li.innerHTML = `${prod.nombre} $ ${prod.precio}`
    
            lista.appendChild(li)

        } else {
            const li = document.createElement("li")
            li.className = "border-bottom d-flex justify-content-between"
    
            li.innerHTML = `${prod.nombre} $ ${prod.precio}`
    
            lista.appendChild(li)
        }
        
    }) 
}

// MOSTRAR EL ALERT CON EL PRECIO FINAL
const finalizar = document.getElementById("finalizar")

finalizar.addEventListener("click" , () => {
 
    let contador = 0

    carrito.map(prod => {

        if (prod.descuento === true) {
            const resto = prod.precio * 0.05 
            
            prod.precio = prod.precio - resto
        } 

        contador += prod.precio
    })

    alert("PRECIO TOTAL: $ " + contador)
})

// 5-
const body = document.body
const tema = document.getElementById("tema")

tema.addEventListener("click" , () => {

    if (body.className.includes("tema-dia")) {
        tema.src = "./images/moon.svg"
        body.classList.remove("tema-dia")
        body.classList.add("tema-noche")
    } else {
        tema.src = "./images/sun.svg"
        body.classList.remove("tema-noche")
        body.classList.add("tema-dia")
    }
  
})






























