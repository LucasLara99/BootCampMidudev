import styles from './JobsList.module.css'
import { JobCard } from '../jobcard/JobCard'

export function JobsList({ jobs }) {
   const isJobsDataEmpty = jobs.length === 0

   return (
      <section className={styles.jobsListSection}>
         <h2 className={styles.jobsListTitle}>Resultados de búsqueda</h2>
         {
            !isJobsDataEmpty ? (
               <div className={styles.jobsListing}>
                  {jobs.map((job) => (
                     <JobCard key={job.id} job={job} />
                  ))}
               </div>
            ) : (<i className={styles.noData}>No se han encontrado resultados</i>)
         }
      </section>
   )
}