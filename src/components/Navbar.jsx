import './Navbar.css';
import logo from '../assets/escuelaname.png';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark navbar-custom">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">
        <img src={logo} alt="Logo" className="logo-navbar" />
        <span className="logo-text"></span>
          Sistema de Matricula
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavbar"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Mostrar menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#">Inicio</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Cursos</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Especialidades</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contacto</a>
            </li>

            <li className="nav-item">
              <a className="nav-link btn-contacto" href="#">Login</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;