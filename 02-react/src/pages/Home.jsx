import './Home.css'
import { useRouter } from '../hooks/useRouter'

export function Home() {
   const { navigateTo } = useRouter()
   const handleSearch = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const searchTerm = formData.get('main-search-input')
      const url = searchTerm
         ? `/search?text=${encodeURI(searchTerm)}`
         : `/search`

      navigateTo(url)
   }

   return (
      <main className='main-page-container'>
         <section>
            <video autoPlay muted loop>
               <source src="/background.mp4" type="video/mp4" />
            </video>
            <article>
               <h1>Encuentra el trabajo de tus sueños</h1>
               <p>Únete a la comunidad más grande de desarrolladores y encuentra tu próxima oportunidad</p>

               <form className='main-page-form' role='search' onSubmit={handleSearch}>
                  <input
                     name='main-search-input'
                     type='text'
                     placeholder='Busca una oferta...'
                  />
                  <button type='submit' className='main-search-button'>Buscar</button>
               </form>
            </article>
         </section>

         <section>
            <header>
               <h2>¿Por qué DevJobs?</h2>
               <p>DevJobs es la principal plataforma de búsqueda de empleo para desarrolladores. Conectamos a los
                  desarrolladores con las mejores empresas del mundo</p>
            </header>
            <footer>
               <article>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1175d7"
                     className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path
                        d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
                  </svg>
                  <h3>Encuentra el trabajo de tus sueños</h3>
                  <p>Busca miles de empleos de las mejores emperesas de todo el mundo.</p>
               </article>

               <article>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1175d7"
                     className="icon icon-tabler icons-tabler-filled icon-tabler-sitemap">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path
                        d="M2 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                     <path
                        d="M14 16.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                     <path
                        d="M8 4.667a2.667 2.667 0 0 1 2.667 -2.667h2.666a2.667 2.667 0 0 1 2.667 2.667v2.666a2.667 2.667 0 0 1 -2.667 2.667h-2.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                     <path
                        d="M12 8a1 1 0 0 0 -1 1v2h-3c-1.645 0 -3 1.355 -3 3v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -.564 .436 -1 1 -1h8c.564 0 1 .436 1 1v1a1 1 0 0 0 1 1a1 1 0 0 0 1 -1v-1c0 -1.645 -1.355 -3 -3 -3h-3v-2a1 1 0 0 0 -1 -1z" />
                  </svg>
                  <h3>Conecta con las mejores empresas</h3>
                  <p>Conecta con empresas que están contratando por tus habilidades</p>
               </article>

               <article>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#1175d7"
                     className="icon icon-tabler icons-tabler-filled icon-tabler-coin">
                     <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                     <path
                        d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336zm-5 2.66a1 1 0 0 0 -1 1a3 3 0 1 0 0 6v2a1.024 1.024 0 0 1 -.866 -.398l-.068 -.101a1 1 0 0 0 -1.732 .998a3 3 0 0 0 2.505 1.5h.161a1 1 0 0 0 .883 .994l.117 .007a1 1 0 0 0 1 -1l.176 -.005a3 3 0 0 0 -.176 -5.995v-2c.358 -.012 .671 .14 .866 .398l.068 .101a1 1 0 0 0 1.732 -.998a3 3 0 0 0 -2.505 -1.501h-.161a1 1 0 0 0 -1 -1zm1 7a1 1 0 0 1 0 2v-2zm-2 -4v2a1 1 0 0 1 0 -2z" />
                  </svg>
                  <h3>Obtén el salario que mereces</h3>
                  <p>Ajusta el salario que mereces con nuestra calculadora de salarios.</p>
               </article>
            </footer>
         </section>
      </main>
   )
}