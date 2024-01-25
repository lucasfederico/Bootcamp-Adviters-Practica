// Crear un arreglo de objetos que representan libros
const biblioteca = [
  {
    id: 1,
    titulo: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    genero: "Fantasia",
  },
  {
    id: 2,
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    genero: "Realismo mágico",
  },
  { id: 3, titulo: "1984", autor: "George Orwell", genero: "Ciencia ficción" },
  {
    id: 4,
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    genero: "Ficción",
  },
  { id: 1, titulo: "Harry Potter", autor: "J. K. Rowling", genero: "Fantasia" },
];

console.log("----------------- PUNTO 1 --------------");
// Utilizar 'map' para obtener un arreglo con los títulos de los libros
// console.log('Títulos de libros:', titulosLibros);

let listaTitulos = biblioteca.map(
  (libro) => `Títulos de libros: ${libro.titulo}`
);
console.log(listaTitulos);

console.log("----------------- PUNTO 2 --------------");
// Utilizar 'filter' para obtener los libros del género 'Fantasía'
// console.log('Libros de fantasía:', librosFantasia);

console.log(biblioteca.filter((libro) => libro.genero == "Fantasia"));

console.log("----------------- PUNTO 3 --------------");
// Utilizar 'find' para encontrar el libro con título '1984'
// console.log('Libro con título "1984":', libro1984);

console.log(biblioteca.find(({ titulo }) => titulo == "1984"));

console.log("----------------- PUNTO 4 --------------");
// Utilizar 'findIndex' para encontrar el índice del libro con autor 'Harper Lee'
// console.log('Índice del libro de Harper Lee:', indiceHarperLee);

console.log(biblioteca.findIndex(({ titulo }) => titulo == "1984"));

console.log("----------------- PUNTO 5 --------------");
// Utilizar el operador de propagación para agregar un nuevo libro a la biblioteca
// console.log('Biblioteca después de agregar un nuevo libro:', bibliotecaActualizada);
const nuevaBiblio = [
  ...biblioteca,
  {
    id: 5,
    titulo: "Dragon Ball",
    autor: "Akira Toriyama",
    genero: "GOD",
  },
];
console.log(nuevaBiblio);

// Ejemplo
// const inventario = [
//   { nombre: "manzanas", cantidad: 2 },
//   { nombre: "bananas", cantidad: 0 },
//   { nombre: "cerezas", cantidad: 5 },
// ];

// function esCereza(fruta) {
//   return fruta.nombre === "cerezas";
// }

// console.log(inventario.find(esCereza));
