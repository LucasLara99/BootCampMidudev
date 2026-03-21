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
Filter(locationFilter, 'location')

