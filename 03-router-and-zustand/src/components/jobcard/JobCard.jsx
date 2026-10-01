import { useState } from 'react'
import './JobCard.css'

export function JobCard({ job }) {
   const { titulo, empresa, ubicacion, descripcion } = job
   const [isApplied, setIsApplied] = useState(false)
   const buttonText = isApplied ? '¡Aplicado!' : 'Aplicar'
   const buttonClass = isApplied ? 'job-listing-button is-applied' : 'job-listing-button'
   const onApplyJob = () => {
      setIsApplied(true)
   }

   return (
      <article className='job-listing-card'>
         <aside>
            <h3>{titulo}</h3>
            <small>{empresa} | {ubicacion}</small>
            <p className="description">{descripcion}</p>
         </aside>
         <button className={buttonClass} onClick={onApplyJob}>{buttonText}</button>
      </article>
   )
}