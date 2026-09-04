import './JobCard.css'

export function JobCard({ job }) {

   const { titulo, empresa, ubicacion, descripcion, data } = job
   return (
      <article className='job-listing-card'>
         <aside>
            <h3>{titulo}</h3>
            <small>{empresa} | {ubicacion}</small>
            <p className="description">{descripcion}</p>
         </aside>
         <button className="job-listing-button">Aplicar</button>
      </article>
   )
}