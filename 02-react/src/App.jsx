import { useState } from 'react'
import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { JobsList } from './components/jobs-list/JobsList.jsx'
import { Pagination } from './components/pagination/Pagination.jsx'
import { SearchFormSection } from './components/search-form-section/SearchFormSection.jsx'

export function App() {
   const [currentPage, setCurrentPage] = useState(1)

   return (
      <>
         <Header />
         <main>
            <SearchFormSection />
            <JobsList />
            <Pagination currentPage={currentPage} onPageChange={setCurrentPage} />
         </main>
         <Footer />
      </>
   )
}
