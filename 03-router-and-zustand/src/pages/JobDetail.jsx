import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router"
import styles from './JobDetail.module.css'
import { JobSection } from "../components/job-section/JobSection"
import { Trio } from 'ldrs/react'

export default function JobDetail() {
   const { jobId } = useParams()
   const [job, setJob] = useState(null)
   const [error, setError] = useState(null)
   const [loading, setLoading] = useState(true)
   const navigate = useNavigate()

   useEffect(() => {
      async function fetchJobDetails() {
         try {
            setError(null)
            const response = await fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
            if (!response.ok) {
               navigate('/not-found')
               return
            }
            const json = await response.json()
            setJob(json)
         } catch (err) {
            setError(err.message)
         } finally {
            setLoading(false)
         }
      }

      fetchJobDetails()
   }, [jobId])

   if (loading) {
      return (
         <div className={styles.loading}>
            <Trio
               size="40"
               speed="1"
               color="white"
            />
         </div>
      )
   }
   if (error || !job) {
      return (
         <div className={styles.notFound}>
            <h1>Oferta no encontrada</h1>
            <p>Puede que esta oferta haya caducado o que la URL no sea correcta.</p>
            <button
               className={styles.backButton}
               onClick={() => navigate('/jobs')}
            >
               Volver a la lista de empleos
            </button>
         </div>
      )
   }

   return (
      <div className={styles.container}>
         <div className={styles.breadcrumb}>
            <Link to="/search">Search</Link>
            <span>/</span>
            <span>{job.titulo}</span>
         </div>

         <header className={styles.header}>
            <div className={styles.details}>
               <h1>{job.titulo}</h1>
               <p>{job.empresa} - {job.ubicacion}</p>
            </div>
            <button className={styles.applyButton}>
               Aplicar ahora
            </button>
         </header>


         <JobSection title="Descripción del puesto" content={job.content.description} />
         <JobSection title="Responsabilidades" content={job.content.responsibilities} />
         <JobSection title="Requisitos" content={job.content.requirements} />
         <JobSection title="Acerca de la empresa" content={job.content.about} />
      </div>
   )
}