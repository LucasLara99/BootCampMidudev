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
const jobCards = document.querySelectorAll('.job-listing-card');
techFilter.addEventListener('change', () => {
  jobCards.forEach((jobOffer) => {
    jobOffer.classList.remove('hidden')
    const description = jobOffer.querySelector('.job-description').textContent
    if (!description.includes(techFilter.value)) {
      jobOffer.classList.add('hidden')
    }
  })
})


