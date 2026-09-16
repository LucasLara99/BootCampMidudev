import { useEffect, useState } from 'react'
import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Search } from './pages/Search.jsx'


export function App() {
   const [currentPath, setCurrentPath] = useState(window.location.pathname)

   useEffect(() => {
      const handleLocationChange = () => {
         setCurrentPath(window.location.pathname)
      }

      window.addEventListener('popstate', handleLocationChange)

      return () => {
         window.removeEventListener('popstate', handleLocationChange)
      }
   }, [])

   return (
      <>
         <Header />
         {currentPath === '/' && <Home />}
         {currentPath === '/search' && <Search />}
         {currentPath !== '/' && currentPath !== '/search' && <NotFound />}
         <Footer />
      </>
   )
}
