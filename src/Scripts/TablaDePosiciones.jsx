import React, { useState } from "react";
import StandingsTable from "./StandingsTable";
import "../HojasEstilo/TablaDePosiciones.css";

export default function TablaDePosiciones() {
  const [selectedLeague, setSelectedLeague] = useState("laliga");

  const leagues = {
    laliga: "LaLiga",
    premier: "Premier League",
    bundesliga: "Bundesliga",
  };

  //Acá si, se reconstruyen cada una de las tablas para cada elección. 

  return (
    <div className="standings-container">
      <h1>🏆 Tablas de Posiciones</h1>

      <div className="select-league">
        <label htmlFor="league">Selecciona una liga:</label>
        <select
          id="league"
          value={selectedLeague}
          onChange={(e) => setSelectedLeague(e.target.value)}
        >
          {Object.entries(leagues).map(([key, name]) => (
            <option key={key} value={key}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <StandingsTable league={selectedLeague} />
    </div>
  );
}
