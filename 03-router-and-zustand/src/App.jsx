import { lazy, Suspense } from 'react'
import { Footer } from './components/footer/Footer.jsx'
import { Header } from './components/header/Header.jsx'
import { Routes, Route } from 'react-router'

const HomePage = lazy(() => import('./pages/Home.jsx'))
const SearchPage = lazy(() => import('./pages/Search.jsx'))
const JobDetailPage = lazy(() => import('./pages/JobDetail.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFound.jsx'))

export function App() {
   return (
      <>
         <title>DevJobs - Empleos</title>
         <Header />
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/jobs/:jobId" element={<JobDetailPage />} />
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
         <Footer />
      </>
   )
}
