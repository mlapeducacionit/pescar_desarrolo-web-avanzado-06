import './style.css'

const hamburguesa = document.querySelector('.hamburguesa')
console.log(hamburguesa) // Objeto de JS que representa un elemento html
console.dir(hamburguesa) // Le sadco una radiografía al nodo. 
console.log(hamburguesa.innerText) // ☰
console.log(hamburguesa.textContent) // ☰
const nav = document.querySelector('nav')

hamburguesa.addEventListener('click', () => {
    nav.classList.toggle('show')
})