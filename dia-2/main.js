// Consignas
// 1 - Tengo una lista de productos para comprar, pero tengo que cambiar el orden: tiene que ser de menos caracteres a mayores
// 2 - También tengo que agregar 2 productos, uno al inicio y otro al final.
// 3 - Pero me arrepentí, quiero sacar el último.

let listaCompras = ["Manzanas", "Plátanos", "Leche", "Pan"];


// PUNTO 1
console.log("---------------PUNTO 1-----------")

// Defino el array vacio que va a contener la lista ordenada
let listaComprasOrdenada = []
// variable auxiliar
let aux = 0;

listaCompras.forEach(product => {
    if(product.length >= aux){
        listaComprasOrdenada.push(product)
    }
    else{
        listaComprasOrdenada.unshift(product)
    }
    aux = product.length
});

console.log(listaComprasOrdenada)

// PUNTO 2
console.log("--------------PUNTO 2 -------------")

listaComprasOrdenada.unshift("Limones")
console.log(listaComprasOrdenada)
listaComprasOrdenada.push("Tomates")
console.log(listaComprasOrdenada)

// PUNTO 3
console.log("---------------PUNTO 3-----------")

listaComprasOrdenada.pop()
console.log(listaComprasOrdenada)

// PUNTO 4
console.log("------------------PUNTO 4----------------")

// defino el objeto con un atributo frutas, que es un array de objetos con las keys nombre y cantidad, sin valores. 
const listaDeCompras = {
    frutas: [{
        nombre: "",
        cantidad: null
    },
    {
        nombre: "",
        cantidad: null
    },
    {
        nombre: "",
        cantidad: null
    },
    {
        nombre: "",
        cantidad: null
    },
    {
        nombre: "",
        cantidad: null
    }
]
}
// Asignar valor a las keys nombre
// listaDeCompras.frutas[0].nombre = listaComprasOrdenada[0]
// listaDeCompras.frutas[1].nombre = listaComprasOrdenada[1]
// listaDeCompras.frutas[2].nombre = listaComprasOrdenada[2]
// listaDeCompras.frutas[3].nombre = listaComprasOrdenada[3]
// listaDeCompras.frutas[4].nombre = listaComprasOrdenada[4]

// Asignar valor a las keys cantidad
// listaDeCompras.frutas[0].cantidad = listaComprasOrdenada[0].length
// listaDeCompras.frutas[1].cantidad = listaComprasOrdenada[1].length
// listaDeCompras.frutas[2].cantidad = listaComprasOrdenada[2].length
// listaDeCompras.frutas[3].cantidad = listaComprasOrdenada[3].length
// listaDeCompras.frutas[4].cantidad = listaComprasOrdenada[4].length

// Asigno valores a las keys
for (let i = 0; i < 5; i++) {
    listaDeCompras.frutas[i].nombre = listaComprasOrdenada[i]
    listaDeCompras.frutas[i].cantidad = listaComprasOrdenada[i]
}
console.log(listaDeCompras)