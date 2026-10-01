import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Routes, Route } from 'react-router'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Search } from './pages/Search.jsx'

export function App() {
   return (
      <>
         <title>DevJobs - Empleos</title>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
         <Footer />
      </>
   )
}
