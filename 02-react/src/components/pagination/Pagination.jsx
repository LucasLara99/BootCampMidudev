import './Pagination.css'

export function Pagination({ totalPages = 10, currentPage = 5, onPageChange }) {

   const pages = Array.from({ length: totalPages }, (_, index) => index + 1)
   const isLastPage = currentPage === totalPages
   const isFirstPage = currentPage === 1
   const styleFirstPage = isFirstPage ? { opacity: 0.2, pointerEvents: 'none' } : {}
   const styleLastPage = isLastPage ? { opacity: 0.2, pointerEvents: 'none' } : {}

   const handlePrevClick = (event) => {
      event.preventDefault()
      if (!isFirstPage) {
         onPageChange(currentPage - 1)
      }
   }
   const handleNextClick = (event) => {
      event.preventDefault()
      if (!isLastPage) {
         onPageChange(currentPage + 1)
      }
   }

   const handlePageChange = (event, page) => {
      event.preventDefault()
      if (page !== currentPage) {
         onPageChange(page)
      }
   }

   return (
      <nav className="pagination">
         <a href="#" style={styleFirstPage} onClick={handlePrevClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
               strokeLinecap="round" strokeLinejoin="round">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M15 6l-6 6l6 6" />
            </svg>
         </a>

         {pages.map(page => (
            <a
               href='#'
               className={page === currentPage ? 'is-active' : ''}
               onClick={(event) => handlePageChange(event, page)}
            >
               {page}
            </a>
         ))}

         <a href="#" style={styleLastPage} onClick={handleNextClick}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
               strokeLinecap="round" strokeLinejoin="round"
               className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right">
               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
               <path d="M9 6l6 6l-6 6" />
            </svg>
         </a>
      </nav>
   )
}