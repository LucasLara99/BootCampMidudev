//Función para filtrar las ofertas de trabajo
function Filter(filter, datasetName) {
  filter.addEventListener("change", () => {
    const filterValue = filter.value.toLowerCase();
    const jobOffers = document.querySelectorAll(".job-listing-card");

    jobOffers.forEach((offer) => {
      const datasetInfo = offer.dataset[datasetName]
        .split(",")
        .map((element) => element.trim().toLowerCase());
      const shouldShow =
        filterValue === "" || datasetInfo.includes(filterValue);
      //toggle añade hidden si condición es true. La quita si es false.
      offer.classList.toggle("hidden", !shouldShow);
    });
  });
}

//Filtro de tecnología
const techFilter = document.querySelector("#technology-filter");
Filter(techFilter, "technology");

//Filtro de ubicación
const locationFilter = document.querySelector("#location-filter");
Filter(locationFilter, "modalidad");

//Filtro de nivel
const experienceFilter = document.querySelector("#experience-filter");
Filter(experienceFilter, "nivel")

const textFilter = document.querySelector("#text-filter")
textFilter.addEventListener('input', () => {
  const jobOffers = document.querySelectorAll(".job-listing-card")
  const textFilterValue = textFilter.value.toLowerCase();
  jobOffers.forEach((offer) => {
    const description = offer.querySelector(".description").textContent.toLowerCase().trim()
    const shouldShow = textFilterValue === "" || description.includes(textFilterValue)
    offer.classList.toggle("hidden", !shouldShow)
  })
})
