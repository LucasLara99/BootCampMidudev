import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Search } from './pages/Search.jsx'


export function App() {
   const { pathname } = window.location

   return (
      <>
         <Header />
         {pathname === '/' && <Home />}
         {pathname === '/search' && <Search />}
         {pathname !== '/' && pathname !== '/search' && <NotFound />}
         <Footer />
      </>
   )
}
