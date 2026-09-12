import { useState } from 'react'
import { JobsList } from '../components/jobs-list/JobsList.jsx'
import { Pagination } from '../components/pagination/Pagination.jsx'
import { SearchFormSection } from '../components/search-form-section/SearchFormSection.jsx'
import jobsData from '../data.json'

const RESULTS_PER_PAGE = 3

export function Search() {
   const [currentPage, setCurrentPage] = useState(1)
   const [textToFilter, setTextToFilter] = useState('')
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

   const jobsWithFilters = jobsData.filter((job) => {
      return (
         (filters.technology === '' || filters.technology.toLowerCase() === job.data.technology.toLowerCase()) &&
         (filters.location === '' || filters.location.toLowerCase() === job.ubicacion.toLowerCase()) &&
         (filters.experience === '' || filters.experience.toLowerCase() === job.data.nivel.toLowerCase())
      )
   })

   const jobsWithTextFilter = textToFilter === ''
      ? jobsWithFilters
      : jobsWithFilters.filter(job => {
         return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
      })

   const pagedResults = jobsWithTextFilter.slice(
      (currentPage - 1) * RESULTS_PER_PAGE,
      RESULTS_PER_PAGE * currentPage
   )

   const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

   return (
      <main>
         <SearchFormSection onTextFilter={handleTextFilter} onSearch={handleSearch} />
         <JobsList jobs={pagedResults} />
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
         />
      </main>
   )
}
