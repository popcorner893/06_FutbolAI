import React, { useState } from "react";
import "../HojasEstilo/TableroMensajes.css";

function CentroSocial() {
  const [comentarios, setComentarios] = useState([
    { nombre: "Andrés", texto: "Excelente partido del Liverpool, Lucho está imparable." },
    { nombre: "Camila", texto: "¡Qué emoción ver a Colombia en el top 10 de FIFA!" }
  ]);
  const [nuevoComentario, setNuevoComentario] = useState("");

  //Ejemplos de mensajes

  const agregarComentario = () => {
    if (nuevoComentario.trim() === "") return;
    setComentarios([...comentarios, { nombre: "Usuario", texto: nuevoComentario }]);
    setNuevoComentario("");
  };

  return (
    <div className="centrosocial-container">
      <h2>💬 Tablero Social de Mensajes de Fútbol</h2>

      {/* Tablero social */}
      <div className="foro-container">
        {comentarios.map((c, index) => (
          <div key={index} className="comentario">
            <strong>{c.nombre}:</strong> <span>{c.texto}</span>
          </div>
        ))}
      </div>

      {/* Añadir comentarios*/}

      <div className="nuevo-comentario">
        <textarea
          value={nuevoComentario}
          onChange={(e) => setNuevoComentario(e.target.value)}
          placeholder="Escribe tu opinión sobre el último partido..."
        />
        <button onClick={agregarComentario}>Enviar</button>
      </div>

      <div className="galeria">
        <h3>📸 Galería de Aficionados</h3>
        <div className="galeria-grid">
          <img src="/assets/centrosocial/fans1.jpg" alt="Fanáticos celebrando" />
          <img src="/assets/centrosocial/fans2.jpg" alt="Niños jugando fútbol" />
          <img src="/assets/centrosocial/fans3.jpg" alt="Estadio lleno" />
          <img src="/assets/centrosocial/fans4.jpg" alt="Hinchas con banderas" />
        </div>
      </div>
    </div>
  );
}

export default CentroSocial;
