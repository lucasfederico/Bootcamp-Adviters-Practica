const listaDescpripcion = document.querySelector('#lista-descripcion')
const btn1 = document.getElementById('btn1')
const body = document.querySelector('#body')

const data = [
    {
      title: "Aprendiendo JavaScript",
      year: "2021",
      isbn: "979-8700179263",
      auhtor: "Carlos Azaustre",
    },
    {
      title: "React.js Practico",
      year: "2022",
      isbn: "TBD",
      auhtor: "Carlos Azaustre",
    },
    {
      title: "Clean JavaScript",
      year: "2020",
      isbn: "979-8567583319",
      auhtor: "Carlos Azaustre",
    },
  ];

// let asdasd = document.createElement('img')
// const mostrarMensaje = () => {
//     names.textContent = 'pikachu'
//     alert(`Soy el pokemon ${name.textContent}`) 
    
//     tipo = "planta"
// }

// btn.addEventListener('click',(mostrarMensaje))


const crearCard = (nombree, año) =>{
    const container = document.createElement('div')
    const lista = document.createElement('ul')
    const nombre = document.createElement('li')
    const habilidad = document.createElement('li')


    nombre.innerText = nombree
    habilidad.innerText = año
    container.appendChild(lista)
    lista.appendChild(nombre)
    lista.appendChild(habilidad)
    container.classList.add('card')
    body.appendChild(container)
}
const crearCards = ()=>{
    data.forEach((obj)=>{
        crearCard(obj.title, obj.year)
        })
}


btn1.addEventListener('click', crearCards)
