import AlumnoCard from "./components/AlumnoCard";
import Navbar from "./components/Navbar";

function App(){
  return(
    <>
      <Navbar/>
      <div className="container mt-5">

        <div className="row">

          <AlumnoCard
            nombre="Fabian Andre"
            carrera="Desarrollo de Aplicaciones Web"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Josue Ramos"
            carrera="Ingeniería de Software"
            estado="Pendiente"
          />

          <AlumnoCard
            nombre="Carlos Diaz"
            carrera="Ciberseguridad"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Vega Minaya"
            carrera="Diseño Web"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Roberto Carlos"
            carrera="Desarrollo de Aplicaciones Web"
            estado="Inactivo"
          />

          <AlumnoCard
            nombre="Sandro Rodriguez"
            carrera="Ingeniería de Software"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Sofia Perez"
            carrera="Ciberseguridad"
            estado="Matriculado"
          />

          <AlumnoCard
            nombre="Jeremy Gomez"
            carrera="Diseño Web"
            estado="Pendiente"
          />

          <AlumnoCard
            nombre="Sandra Lopez"
            carrera="Desarrollo de Aplicaciones Web"
            estado="Matriculado"
          />

        </div>

      </div>
    </>
  )
}

export default App;