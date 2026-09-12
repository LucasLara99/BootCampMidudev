import { useId, useState } from 'react'
import './SearchFormSection.css'

export function SearchFormSection({ onSearch, onTextFilter }) {
   const [isActive, setIsActive] = useState(false)
   const [technologyFilter, setTechnologyFilter] = useState('')
   const [locationFilter, setLocationFilter] = useState('')
   const [experienceFilter, setExperienceFilter] = useState('')
   const idText = useId()
   const idTechnology = useId()
   const idLocation = useId()
   const idExperience = useId()
   const isSearchButtonActive = (technologyFilter !== '') || (locationFilter !== '') || (experienceFilter !== '')

   const handleSubmit = (event) => {
      event.preventDefault()
      const formData = new FormData(event.target)
      const filters = {
         search: formData.get(idText),
         technology: formData.get(idTechnology),
         location: formData.get(idLocation),
         experience: formData.get(idExperience)
      }
      onSearch(filters)
   }

   const handleFilterChange = (event) => {
      if (event.target.id === 'technology-filter') {
         setTechnologyFilter(event.target.value)
      }
      if (event.target.id === 'location-filter') {
         setLocationFilter(event.target.value)
      }
      if (event.target.id === 'experience-filter') {
         setExperienceFilter(event.target.value)
      }
   }

   const handleTextChange = (event) => {
      const text = event.target.value
      onTextFilter(text)
   }

   const handleFocus = () => {
      setIsActive(true)
   }

   const handleBlur = () => {
      setIsActive(false)
   }

   return (
      <section className="hero-section">
         <h2>Encuentra tu próximo trabajo</h2>
         <p>Explora miles de oportunidades en el sector tecnológico</p>
         <form onSubmit={handleSubmit} id='empleos-search-form' role="search">
            <div className='search-container'>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
                  strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="icon icon-tabler icons-tabler-outline icon-tabler-search">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                  <path d="M21 21l-6 -6" />
               </svg>
               <input
                  name={idText} id='search-filter' type="text"
                  placeholder="Buscar empleos por título, habilidad o empresa"
                  className={isActive ? 'is-active' : ''}
                  onChange={handleTextChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
               />
               <button type='submit' className={isSearchButtonActive ? 'search-button is-active' : 'search-button'}>Buscar</button>
            </div>
            <div className="filters-container">
               <select name={idTechnology} onChange={handleFilterChange} id='technology-filter' className={technologyFilter !== '' ? 'has-data' : ''}>
                  <option value="">Todas las tecnologías</option>
                  <hr />
                  <optgroup label="Frontend">
                     <option value="JavaScript">JavaScript</option>
                     <option value="React">React</option>
                     <option value="UX/UI">UX/UI</option>
                  </optgroup>
                  <hr />
                  <optgroup label="Backend">
                     <option value="Python">Python</option>
                     <option value="node">Node.js</option>
                     <option value="SQL">SQL</option>
                     <option value="BBDD">BBDD</option>
                  </optgroup>
                  <hr />
                  <option value="Cloud">Cloud</option>
                  <option value="Mobile">Mobile</option>
                  <option value="ciberseguridad">Ciberseguridad</option>
                  <option value="agile">Agile</option>
                  <option value="qa">QA</option>
               </select>
               <select name={idLocation} onChange={handleFilterChange} id='location-filter' className={locationFilter !== '' ? 'has-data' : ''}>
                  <option value="">Todas las ubicaciones</option>
                  <hr />
                  <optgroup label="Latinoamérica">
                     <option value="cdmx">Ciudad de México</option>
                     <option value="guadalajara">Guadalajara</option>
                     <option value="santiago">Santiago de Chile</option>
                     <option value="bogota">Bogotá</option>
                     <option value="lima">Lima</option>
                  </optgroup>
                  <optgroup label="España">
                     <option value="madrid">Madrid</option>
                     <option value="barcelona">Barcelona</option>
                     <option value="valencia">Valencia</option>
                  </optgroup>
                  <hr />
                  <option value="remoto">Remoto</option>
               </select>
               <select name={idExperience} onChange={handleFilterChange} id='experience-filter' className={experienceFilter !== '' ? 'has-data' : ''}>
                  <option value="">Niveles de experiencia</option>
                  <hr />
                  <option value="junior">Junior</option>
                  <option value="mid">Mid</option>
                  <option value="senior">Senior</option>
               </select>
            </div>
         </form>
      </section>
   )
}