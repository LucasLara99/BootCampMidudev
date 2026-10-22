import { useEffect, useState } from "react"
import { useSearchParams } from "react-router"

const RESULTS_PER_PAGE = 5

export function useSearch() {
   const [jobs, setJobs] = useState([])
   const [total, setTotal] = useState(0)
   const [error, setError] = useState(null)
   const [isLoading, setIsLoading] = useState(false)
   const [searchParams, setSearchParams] = useSearchParams()

   const [filters, setFilters] = useState(() => {

      return {
         technology: searchParams.get('technology') || '',
         location: searchParams.get('type') || '',
         experience: searchParams.get('level') || ''
      }
   })

   const [textToFilter, setTextToFilter] = useState(() => searchParams.get('text') || '')

   const [currentPage, setCurrentPage] = useState(() => {
      const page = Number(searchParams.get('page'))
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
      setSearchParams((params) => {
         const filterMap = [
            { key: 'text', value: textToFilter },
            { key: 'technology', value: filters.technology },
            { key: 'type', value: filters.location },
            { key: 'level', value: filters.experience },
            { key: 'page', value: currentPage > 1 ? currentPage : '' }
         ]

         filterMap.forEach(({ key, value }) => {
            if (value) {
               params.set(key, value)
            } else {
               params.delete(key)
            }
         })

         return params
      })
   }, [currentPage, textToFilter, filters, setSearchParams])

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