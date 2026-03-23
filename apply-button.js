const jobResults = document.querySelector(".job-listings");

jobResults?.addEventListener("click", (event) => {
  const element = event.target;
  if (element.classList.contains("job-listing-button")) {
    element.classList.add("is-applied");
    element.textContent = "¡Aplicado!";
    element.disabled = true;
  }
});
