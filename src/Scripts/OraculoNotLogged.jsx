import React from "react";
import { useNavigate } from "react-router-dom";
import "../HojasEstilo/OraculoNotLogged.css";

const OraculoNotLogged = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  //Incita al usuario al iniciar sesión, solo está disponible si la ha iniciado. 

  return (
    <div className="oraculo-not-logged-container">
      <div className="oraculo-not-logged-card">
        <h2 className="oraculo-not-logged-title">
          Para utilizar el oráculo, inicia sesión
        </h2>
        <button
          className="oraculo-not-logged-button"
          onClick={handleLoginRedirect}
        >
          Ir a iniciar sesión
        </button>
      </div>
    </div>
  );
};

export default OraculoNotLogged;

