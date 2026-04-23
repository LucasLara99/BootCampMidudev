//Función para quitar el borde al último elemento
function cleanLastBorder(jobOffers) {
  jobOffers.forEach(offer => offer.classList.remove('last-visible'));
  const visibles = Array.from(jobOffers).filter(offer => !offer.classList.contains('hidden'))
  if (visibles.length > 0) {
    const lastVisible = visibles[visibles.length - 1];
    lastVisible.classList.add('last-visible');
  }
}

//Función para identificar los visibles
function shouldShowCalculator(filterValue, dataset) {
  return filterValue === "" || dataset.includes(filterValue);
}

//Función que aplica los filtros
function applyFilters() {
  const techValue = document.querySelector('#technology-filter').value.toLowerCase()
  const locationValue = document.querySelector('#location-filter').value.toLowerCase()
  const experienceValue = document.querySelector('#experience-filter').value.toLowerCase()
  const textValue = document.querySelector('#text-filter').value.toLowerCase()

  const jobOffers = document.querySelectorAll(".job-listing-card")
  jobOffers.forEach(offer => {
    const techDataSetInfo = offer.dataset["technology"].split(",").map(el => el.trim().toLowerCase());
    const locationDataSetInfo = offer.dataset["modalidad"].split(",").map(el => el.trim().toLowerCase());
    const experienceDataSetInfo = offer.dataset["nivel"].split(",").map(el => el.trim().toLowerCase());
    const description = offer.querySelector(".description").textContent.trim().toLowerCase();

    const shouldShowTech = shouldShowCalculator(techValue, techDataSetInfo);
    const shouldShowLocation = shouldShowCalculator(locationValue, locationDataSetInfo);
    const shouldShowExperience = shouldShowCalculator(experienceValue, experienceDataSetInfo);
    const shouldShowText = shouldShowCalculator(textValue, description);

    const shouldShow = shouldShowTech && shouldShowLocation && shouldShowExperience && shouldShowText;
    offer.classList.toggle('hidden', !shouldShow)
  })
  cleanLastBorder(jobOffers);
}

const filters = [
  { selector: "#technology-filter", event: "change" },
  { selector: "#location-filter", event: "change" },
  { selector: "#experience-filter", event: "change" },
  { selector: "#text-filter", event: "input" }
]

filters.forEach(f => {
  const element = document.querySelector(f.selector);
  if (element) {
    element.addEventListener(f.event, applyFilters)
  }
})