import { useState } from 'react'
import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { JobsList } from './components/jobs-list/JobsList.jsx'
import { Pagination } from './components/pagination/Pagination.jsx'
import { SearchFormSection } from './components/search-form-section/SearchFormSection.jsx'
import jobsData from './data.json'

const RESULTS_PER_PAGE = 3

export function App() {
   const [currentPage, setCurrentPage] = useState(1)
   const [textToFilter, setTextToFilter] = useState('')

   const jobsWithTextFilter = textToFilter === ''
      ? jobsData
      : jobsData.filter(job => {
         return job.titulo.toLowerCase().includes(textToFilter.toLowerCase())
      })

   const pagedResults = jobsWithTextFilter.slice(
      (currentPage - 1) * RESULTS_PER_PAGE,
      RESULTS_PER_PAGE * currentPage
   )

   const totalPages = Math.ceil(jobsWithTextFilter.length / RESULTS_PER_PAGE)

   const handleTextFilter = (newTextToFilter) => {
      setTextToFilter(newTextToFilter)
      setCurrentPage(1)
   }
   const handleSearch = () => {

   }

   return (
      <>
         <Header />
         <main>
            <SearchFormSection onTextFilter={handleTextFilter} onSearch={handleSearch} />
            <JobsList jobs={pagedResults} />
            <Pagination
               currentPage={currentPage}
               totalPages={totalPages}
               onPageChange={setCurrentPage}
            />
         </main>
         <Footer />
      </>
   )
}
