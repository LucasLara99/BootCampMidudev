import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Search } from './pages/Search.jsx'
import { useRouter } from './hooks/useRouter.jsx'

export function App() {
   const { currentPath } = useRouter()

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
