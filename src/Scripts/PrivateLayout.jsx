import React, { useEffect } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Dropdown } from "bootstrap"

import "../HojasEstilo/PublicLayout.css"; 
import Fondo_Banner_Oscuro from "../Multimedia/Fondo_banner.png";
import Logo_Vertical from "../Multimedia/Logo_Vertical.png";
import { FiLogOut, FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { useAuth } from "./AuthContext.jsx";

const PrivateLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document
      .querySelectorAll('[data-bs-toggle="dropdown"]')
      .forEach((el) => new Dropdown(el));
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="public-layout">
      {/* === Header === */}
      <header className="zona-superior">
        <div className="header-logo-center">
          <div className="header-logo-container">
            <Link to="/app" className="logo-link">
              <img src={Fondo_Banner_Oscuro} alt="Portal Deportivo" className="logo-img" />
            </Link>
          </div>
        </div>

        <button className="btn-cerrar-sesion" onClick={handleLogout}>
          <FiLogOut style={{ marginRight: "8px" }} />
          Cerrar sesión
        </button>
      </header>

      {/* === Menú principal === */}
      <nav className="zona-menu">
        <NavLink to="/app/partidos" className={({ isActive }) => (isActive ? "activo" : "")}>
          Programación de Partidos
        </NavLink>
        <NavLink to="/app/noticias" className={({ isActive }) => (isActive ? "activo" : "")}>
          Noticias
        </NavLink>
        <NavLink to="/app/oraculo" className={({ isActive }) => (isActive ? "activo" : "")}>
          Oráculo
        </NavLink>
        <NavLink to="/app/centro-social" className={({ isActive }) => (isActive ? "activo" : "")}>
          Centro Social
        </NavLink>
        <NavLink to="/app/tabla-de-posiciones" className={({ isActive }) => (isActive ? "activo" : "")}>
          Tabla de Posiciones
        </NavLink>

        {/* === Dropdown "Más" === */}
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Más
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="/app/tablero">Tablero</Link></li>
            <li><Link className="dropdown-item" to="/app/muro">Muro</Link></li>
          </ul>
        </div>
      </nav>


      {/* === Contenido Principal === */}
      <main className="zona-principal">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="footer-container">
        <div className="footer-column">
          <div className="footer-logo-container">
            <img
              src={Logo_Vertical}
              alt="Logo Vertical"
              className="footer-logo"
            />
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-title">Síguenos en Nuestras redes sociales</p>
          <div className="footer-social-icons">
            <a href="#"><FiFacebook /></a>
            <a href="#"><FiTwitter /></a>
            <a href="#"><FiInstagram /></a>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-title">Equipo de Desarrollo</p>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#teamModal"
          >
            Ver
          </button>

          {/* Modal */}
          <div className="modal fade" id="teamModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
              <div className="modal-header">
                  <h5 className="modal-title">Equipo de Desarrollo</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
              </div>
              <div className="modal-body">
                  <div className="team-grid">
                  {/* Footer */}
                  <div className="team-member">
                    <img src="/Ivan.jpg" alt="Integrante 1" />
                    <p>Iván Camargo</p>
                    <p>2230033</p>
                    <p>ivan2230033@correo.uis.edu.co</p>
                    <div className="social-icons">
                      <FiFacebook /><FiTwitter /><FiInstagram />
                    </div>
                  </div>
                  <div className="team-member">
                    <img src="/Sofia.jpg" alt="Integrante 2" />
                    <p>Sofía Vega</p>
                    <p>2230041</p>
                    <p>sofia2230041@correo.uis.edu.co</p>
                    <div className="social-icons">
                      <FiFacebook /><FiTwitter /><FiInstagram />
                    </div>
                  </div>
                  <div className="team-member">
                      <img src="/Andres.jpg" alt="Integrante 3" />
                      <p>Andrés García</p>
                      <p>2230089</p>
                      <p>andresgarcia120035@gmail.com</p>
                      <div className="social-icons">
                        <FiFacebook /><FiTwitter /><FiInstagram />
                      </div>
                    </div>
                  <div className="team-member">
                        <img src="/Nicolas.jpeg" alt="Integrante 4" />
                        <p>Nicolás Linares</p>
                        <p>2230027</p>
                        <p>nicolas2230027@correo.uis.edu.co</p>
                        <div className="social-icons">
                          <FiFacebook /><FiTwitter /><FiInstagram />
                        </div>
                      </div>
                  </div>
              </div>
              </div>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivateLayout;

