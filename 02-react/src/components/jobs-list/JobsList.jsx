import './JobsList.css'
import { JobCard } from '../jobcard/JobCard'

export function JobsList({ jobs }) {
   const isJobsDataEmpty = jobs.length === 0

   return (
      <section className='job-list-section'>
         <h2 className="job-list-title">Resultados de búsqueda</h2>
         <div className="job-listings">
            {
               !isJobsDataEmpty ? (
                  jobs.map((job) => (
                     <JobCard key={job.id} job={job} />
                  ))
               ) : (<p className='empty-data-message'>No hay ningún resultado</p>)
            }
         </div>
      </section>
   )
}