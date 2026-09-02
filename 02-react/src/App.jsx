import './components/footer/Footer'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import JobsList from './components/jobs-list/JobsList'
import Pagination from './components/pagination/Pagination'
import SearchFormSection from './components/search-form-section/SearchFormSection'
import data from './data.json'

function App() {

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

export default App
