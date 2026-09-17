import { Trio } from 'ldrs/react'
import 'ldrs/react/Trio.css'
import { JobsList } from '../components/jobs-list/JobsList.jsx'
import { Pagination } from '../components/pagination/Pagination.jsx'
import { SearchFormSection } from '../components/search-form-section/SearchFormSection.jsx'
import { useSearch } from '../hooks/useSearch.jsx'

export function Search() {
   const {
      handleTextFilter,
      handleSearch,
      totalPages,
      setCurrentPage,
      currentPage,
      jobs,
      isLoading
   } = useSearch()

   return (
      <main>
         <SearchFormSection onTextFilter={handleTextFilter} onSearch={handleSearch} />
         {
            isLoading
               ? <Trio
                  size="40"
                  speed="1"
                  color="white"
               />
               : <JobsList jobs={jobs} />
         }
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
         />
      </main>
   )
}
