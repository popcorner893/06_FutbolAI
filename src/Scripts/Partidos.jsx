import "../HojasEstilo/Partidos.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Partidos() {
  const [showOraculo, setShowOraculo] = useState(false);
  const [fechaSeleccionada, setFechaSeleccionada] = useState("hoy");

  const toggleOraculo = () => setShowOraculo(!showOraculo);

  // Datos de ejemplo para las fechas
  const partidosPorFecha = {
    hoy: [
      {
        equipo1: { nombre: "Barcelona", escudo: "/barcelona.png" },
        equipo2: { nombre: "Real Madrid", escudo: "/madrid.png" },
        marcador: "2 : 0",
        hora: "5:30 p.m.",
        plataformas: [
          { nombre: "ESPN", logo: "/espn.png", url: "https://www.espn.com" },
          { nombre: "Star+", logo: "/starplus.png", url: "https://www.starplus.com" },
        ],
      },
      {
        equipo1: { nombre: "Liverpool", escudo: "/liverpool.png" },
        equipo2: { nombre: "Chelsea", escudo: "/chelsea.png" },
        marcador: "1 : 1",
        hora: "7:00 p.m.",
        plataformas: [
          { nombre: "ESPN", logo: "/espn.png", url: "https://www.espn.com" },
          { nombre: "DAZN", logo: "/dazn.png", url: "https://www.dazn.com" },
        ],
      },
    ],
    mañana: [
      {
        equipo1: { nombre: "PSG", escudo: "/psg.png" },
        equipo2: { nombre: "Bayern", escudo: "/bayern.png" },
        marcador: "— : —",
        hora: "4:00 p.m.",
        plataformas: [
          { nombre: "Star+", logo: "/starplus.png", url: "https://www.starplus.com" },
          { nombre: "TNT Sports", logo: "/tnt.jpg", url: "https://www.tnt.com" },
        ],
      },
      {
        equipo1: { nombre: "Inter", escudo: "/inter.png" },
        equipo2: { nombre: "Milan", escudo: "/milan.png" },
        marcador: "— : —",
        hora: "6:30 p.m.",
        plataformas: [
          { nombre: "DAZN", logo: "/dazn.png", url: "https://www.dazn.com" },
          { nombre: "Star+", logo: "/starplus.png", url: "https://www.starplus.com" },
        ],
      },
    ],
  };

  const fechas = [
    { id: "hoy", label: "Hoy" },
    { id: "mañana", label: "Mañana" },
    { id: "miércoles", label: "Miér, 29 Oct" },
    { id: "jueves", label: "Jue, 30 Oct" },
  ];

  return (
    <div>
      
      {/* ona principal */}
      <div className="zona-principal">
        <h2>Fecha</h2>

        {/* Botones de fechas */}
        <div className="panel-fechas">
          {fechas.map((f) => (
            <div
              key={f.id}
              className={`panel ${fechaSeleccionada === f.id ? "activo" : ""}`}
              onClick={() => setFechaSeleccionada(f.id)}
            >
              {f.label}
            </div>
          ))}
        </div>

        <h2>Partidos de {fechaSeleccionada}</h2>

        {/* Renderiza partidos según la fecha seleccionada */}
        {(partidosPorFecha[fechaSeleccionada] || []).map((p, idx) => (
          <div className="zona-programacion" key={idx}>
            {/* Panel Partido */}
            <div className="panel-partido">
              <div className="equipos">
                <div className="equipo">
                  <div className="info-equipo">
                    <img src={p.equipo1.escudo} alt={p.equipo1.nombre} />
                    <span>{p.equipo1.nombre}</span>
                  </div>
                  <span className="resultado">{p.marcador.split(":")[0]}</span>
                </div>

                <div className="equipo">
                  <div className="info-equipo">
                    <img src={p.equipo2.escudo} alt={p.equipo2.nombre} />
                    <span>{p.equipo2.nombre}</span>
                  </div>
                  <span className="resultado">{p.marcador.split(":")[1]}</span>
                </div>
              </div>
              <div className="hora">{p.hora}</div>
            </div>

            {/* Panel Dónde ver */}
            <div className="panel-donde-ver">
              <h3>¿Dónde ver?</h3>
              <div className="plataformas">
                {p.plataformas.map((pl, i) => (
                  <a
                    key={i}
                    href={pl.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="plataforma"
                  >
                    <img src={pl.logo} alt={pl.nombre} title={pl.nombre} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Partidos;
