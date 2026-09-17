import { useEffect, useState } from "react"

const RESULTS_PER_PAGE = 3

export function useSearch() {
   const [currentPage, setCurrentPage] = useState(1)
   const [textToFilter, setTextToFilter] = useState('')
   const [jobs, setJobs] = useState([])
   const [total, setTotal] = useState(0)
   const [isLoading, setIsLoading] = useState(false)
   const [filters, setFilters] = useState({
      technology: '',
      location: '',
      experience: ''
   })

   const handleTextFilter = (newTextToFilter) => {
      setTextToFilter(newTextToFilter)
      setCurrentPage(1)
   }

   const handleSearch = (newFilters) => {
      setFilters({
         technology: newFilters.technology,
         location: newFilters.location,
         experience: newFilters.experience
      })
      setCurrentPage(1)
   }

   useEffect(() => {
      async function fetchJobs() {
         try {
            setIsLoading(true)

            //Simulacion
            await new Promise((resolve) => setTimeout(resolve, 5000))

            const response = await fetch('https://jscamp-api.vercel.app/api/jobs')
            const json = await response.json()

            setJobs(json.data)
            setTotal(json.total)
         } catch (error) {
            console.error('Error obteniendo los datos: ', error)
         } finally {
            setIsLoading(false)
         }
      }

      fetchJobs()
   }, [])

   // const jobsWithFilters = jobsData.filter((job) => {
   //    return (
   //       (filters.technology === '' || filters.technology.toLowerCase() === job.data.technology.toLowerCase()) &&
   //       (filters.location === '' || filters.location.toLowerCase() === job.ubicacion.toLowerCase()) &&
   //       (filters.experience === '' || filters.experience.toLowerCase() === job.data.nivel.toLowerCase())
   //    )
   // })

   // const jobsWithTextFilter = textToFilter === ''
   //    ? jobsWithFilters
   //    : jobsWithFilters.filter(job => {
   //       return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
   //    })

   // const pagedResults = jobsWithTextFilter.slice(
   //    (currentPage - 1) * RESULTS_PER_PAGE,
   //    RESULTS_PER_PAGE * currentPage
   // )

   const totalPages = Math.ceil(jobs.length / RESULTS_PER_PAGE)

   return {
      handleTextFilter,
      handleSearch,
      totalPages,
      setCurrentPage,
      currentPage,
      jobs,
      isLoading
   }
}