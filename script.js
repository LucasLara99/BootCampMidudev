const jobResults = document.querySelector('.job-listings');

jobResults?.addEventListener('click', (event) => {
  const element = event.target
  if (element.classList.contains('job-listing-button')) {
    element.classList.add('is-applied')
    element.textContent = '¡Aplicado!'
    element.disabled = true;
  }
})

const techFilter = document.querySelector('#technology-filter');
techFilter.addEventListener('change', () => {
  const filterValue = techFilter.value.toLowerCase()
  const jobOffers = document.querySelectorAll('.job-listing-card');

  jobOffers.forEach((offer) => {
    const technologies = offer.dataset.technology.split(',').map(tech => tech.trim().toLowerCase())
    const shouldShow = filterValue === "" || technologies.includes(filterValue)

    offer.classList.toggle('hidden', !shouldShow)
  })
})

