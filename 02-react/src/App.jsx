function App() {

  return (
    <>
      <header className="main-header">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#1173d4"
            className="icon icon-tabler icons-tabler-filled icon-tabler-briefcase-2">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
          </svg>
          <h2>DevJobs</h2>
          <nav>
            <a href="./index.html">Inicio</a>
            <a href="">Empleos</a>
          </nav>
        </div>
        <div>
          <devjobs-avatar service="github" username="LucasLara99" size="40"></devjobs-avatar>
        </div>
      </header>
      <main>
        <section className="hero-section">
          <h2>Encuentra tu próximo trabajo</h2>
          <p>Explora miles de oportunidades en el sector tecnológico</p>
          <form role="search">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
            <input id="text-filter" type="text" placeholder="Buscar empleos por título, habilidad o empresa" />
          </form>
          <div className="filters-container">
            { /* <label for="filter-technology">Tecnología</label> */}
            <select name="technology" id="technology-filter">
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
            {/* <label for="filter-location">Ubicación</label> */}
            <select name="location" id="location-filter">
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
            {/* <label for="filter-experience">Experiencia</label> */}
            <select name="experience" id="experience-filter">
              <option value="">Niveles de experiencia</option>
              <hr />
              <option value="junior">Junior</option>
              <option value="mid">Mid</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </section>
        <h2 className="job-list-title">Resultados de búsqueda</h2>
        <section className="job-listings">
        </section>
      </main>
      <footer>
        <small>&copy; 2025 Lucas Lara. Todos los derechos reservados</small>
      </footer>
    </>
  )
}

export default App
