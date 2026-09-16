import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Home } from './pages/Home.jsx'
import { NotFound } from './pages/NotFound.jsx'
import { Search } from './pages/Search.jsx'
import { Route } from './components/Route.jsx'

export function App() {
   return (
      <>
         <Header />
         <Route path={'/'} component={Home} />
         <Route path={'/search'} component={Search} />
         <Route path={'/404'} component={NotFound} />
         <Footer />
      </>
   )
}
