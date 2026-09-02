import './JobCard.css'

export function JobCard({ job }) {

   const { titulo, empresa, ubicacion, descripcion, data } = job
   return (
      <article>
         <aside>
            <h3>${titulo}</h3>
            <small>${empresa} | ${ubicacion}</small>
            <p class="description">${descripcion}</p>
         </aside>
         <button class="job-listing-button">Aplicar</button>
      </article>
   )
}