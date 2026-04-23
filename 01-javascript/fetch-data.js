const container = document.querySelector(".job-listings");

//Consulta dinámica de los datos json - solo ejecutar si el contenedor existe
if (container) {
  fetch("./data.json")
    .then((response) => {
      return response.json();
    })
    .then((jobs) => {
      jobs.forEach((job) => {
        const article = document.createElement("article");
        article.className = "job-listing-card";
        article.dataset.technology = job.data.technology;
        article.dataset.modalidad = job.data.modalidad;
        article.dataset.nivel = job.data.nivel;

        article.innerHTML = `
          <aside>
            <h3>${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p class="description">${job.descripcion}</p>
          </aside>
          <button class="job-listing-button">Aplicar</button>
        `;
        container.appendChild(article);
      });
    });
}
