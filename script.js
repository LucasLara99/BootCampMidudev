const botones = document.querySelectorAll('.job-listing-button');

botones.forEach((boton) => {
  boton.addEventListener('click', () => {
    boton.textContent = '¡Aplicado!'
    boton.classList.add('is-applied')
    boton.disabled = true
  })
})