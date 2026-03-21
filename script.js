const jobResults = document.querySelector('.job-listings');

jobResults?.addEventListener('click', (event) => {
  const element = event.target
  if (element.classList.contains('job-listing-button')) {
    element.classList.add('is-applied')
    element.textContent = '¡Aplicado!'
    element.disabled = true;
  }
})

//Función para filtrar las ofertas de trabajo
function Filter(filter, datasetName) {
  filter.addEventListener('change', () => {
    const filterValue = filter.value.toLowerCase()
    const jobOffers = document.querySelectorAll('.job-listing-card');

    jobOffers.forEach((offer) => {
      const datasetInfo = offer.dataset[datasetName].split(',').map(element => element.trim().toLowerCase())
      const shouldShow = filterValue === "" || datasetInfo.includes(filterValue)
      //toggle añade hidden si condición es true. La quita si es false.
      offer.classList.toggle('hidden', !shouldShow)
    })
  })
}

//Filtro de tecnología
const techFilter = document.querySelector('#technology-filter');
Filter(techFilter, 'technology')

//Filtro de ubicación
const locationFilter = document.querySelector('#location-filter');
Filter(locationFilter, 'modalidad')

const container = document.querySelector('.job-listings');

//Consulta dinámica de los datos json
fetch('./data.json')
  .then((response) => {
    return response.json();
  })
  .then((jobs) => {
    jobs.forEach(job => {
      const article = document.createElement('article')
      article.className = 'job-listing-card'
      article.dataset.technology = job.data.technology
      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel

      article.innerHTML = `
        <aside>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </aside>
        <button class="job-listing-button">Aplicar</button>
      `
      container.appendChild(article)
    })
  })