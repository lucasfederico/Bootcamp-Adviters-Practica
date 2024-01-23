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