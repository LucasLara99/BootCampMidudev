import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { JobsList } from './components/jobs-list/JobsList.jsx'
import { Pagination } from './components/pagination/Pagination.jsx'
import { SearchFormSection } from './components/search-form-section/SearchFormSection.jsx'
import data from './data.json'

export function App() {

   return (
      <>
         <Header />
         <main>
            <SearchFormSection />
            <JobsList />
            <Pagination />
         </main>
         <Footer />
      </>
   )
}
