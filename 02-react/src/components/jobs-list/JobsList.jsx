import './JobsList.css'
import jobsData from '../../data.json'
import { JobCard } from '../jobcard/JobCard'

export function JobsList() {
   const isJobsDataEmpty = jobsData.length === 0

   return (
      <section>
         <h2 className="job-list-title">Resultados de búsqueda</h2>
         <div className="job-listings">
            {
               !isJobsDataEmpty ? (
                  jobsData.map((job) => (
                     <JobCard key={job.id} job={job} />
                  ))
               ) : (<p className='empty-data-message'>No hay ningún resultado</p>)
            }
         </div>
      </section>
   )
}