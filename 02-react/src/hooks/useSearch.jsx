import { useEffect, useState } from "react"
import { useRouter } from "./useRouter"

const RESULTS_PER_PAGE = 5

export function useSearch() {
   const { navigateTo } = useRouter()
   const [jobs, setJobs] = useState([])
   const [total, setTotal] = useState(0)
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(false)

   const [filters, setFilters] = useState(() => {
      const params = new URLSearchParams(window.location.search)
      return {
         technology: params.get('technology') || '',
         location: params.get('type') || '',
         experience: params.get('level') || ''
      }
   })

   const [textToFilter, setTextToFilter] = useState(() => {
      const params = new URLSearchParams(window.location.search)
      return params.get('text') || ''
   })

   const [currentPage, setCurrentPage] = useState(() => {
      const params = new URLSearchParams(window.location.search)
      const page = Number(params.get('page'))
      return Number.isNaN(page) ? page : 1
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
            setError(null)

            const params = new URLSearchParams()
            if (textToFilter) params.append('text', textToFilter)
            if (filters.technology) params.append('technology', filters.technology)
            if (filters.location) params.append('type', filters.location)
            if (filters.experience) params.append('level', filters.experience)

            const offset = (RESULTS_PER_PAGE * (currentPage - 1))
            params.append('limit', RESULTS_PER_PAGE)
            params.append('offset', offset)
            const queryParams = params.toString()

            if (!navigator.onLine) throw new Error('NO_INTERNET')

            const response = await fetch(`https://jscamp-api.vercel.app/api/jobs?${queryParams}`)

            if (!response.ok) {
               if (response.status === 404) throw new Error('404')
               if (response.status >= 500) throw new Error('500')
               throw new Error('HTTP_ERROR')
            }

            const json = await response.json()

            setJobs(json.data)
            setTotal(json.total)

         } catch (error) {
            console.error('Error obteniendo los datos: ', error)
            setError(error)
         } finally {
            setIsLoading(false)
         }
      }

      fetchJobs()
   }, [currentPage, textToFilter, filters])

   useEffect(() => {
      const params = new URLSearchParams()
      if (textToFilter) params.append('text', textToFilter)
      if (filters.technology) params.append('technology', filters.technology)
      if (filters.location) params.append('type', filters.location)
      if (filters.experience) params.append('level', filters.experience)

      if (currentPage > 1) params.append('page', currentPage)

      const newUrl = params.toString()
         ? `${window.location.pathname}?${params.toString()}`
         : window.location.pathname

      navigateTo(newUrl)
   }, [currentPage, textToFilter, filters, navigateTo])

   const totalPages = Math.ceil(total / RESULTS_PER_PAGE)

   return {
      handleTextFilter,
      handleSearch,
      totalPages,
      setCurrentPage,
      currentPage,
      jobs,
      isLoading,
      textToFilter,
      filters
   }
}