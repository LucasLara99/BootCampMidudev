import './JobsList.css'
import jobsData from '../../data.json'
import { JobCard } from '../jobcard/JobCard'


export function JobsList() {
   return (
      <>
         <h2 className="job-list-title">Resultados de búsqueda</h2>
         <section className="job-listings">
            {jobsData.map((job) => (
               <JobCard key={job.id} job={job} />
            ))}
         </section>
      </>
   )
}