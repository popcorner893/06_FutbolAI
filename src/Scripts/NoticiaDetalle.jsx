import React from "react";
import { useParams, Link } from "react-router-dom";
import "../HojasEstilo/Noticias.css";

export default function NoticiaDetalle({ noticias = [] }) {
  const { id } = useParams();
  const noticia = noticias[Number(id)];

  if (!noticia) {
    return (
      <div className="noticia-detalle contenedor">
        {/*Define cada noticia en particular */}
        <p>⚠️ Noticia no encontrada.</p>
        <Link to="/noticias" className="btn btn-outline-success">
          ← Volver a Noticias
        </Link>
      </div>
    );
  }

  return (
    <div className="noticia-detalle contenedor card shadow-sm p-4">
      <Link to="/noticias" className="volver-link mb-3">
        ← Volver a Noticias
      </Link>

      {/* IMAGEN AJUSTADA */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 16,
        }}
      >
        <img
          src={noticia.imagen}
          alt={noticia.titulo}
          style={{
            width: "auto",          // Mantiene el tamaño natural
            maxWidth: "100%",       // No se sale del contenedor
            maxHeight: "350px",     // Límite para evitar que crezca demasiado
            objectFit: "contain",   // Mantiene proporciones sin recortar
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)"
          }}
        />
      </div>

      <h2 className="mt-3" style={{ color: "#16A34A" }}>
        {noticia.titulo}
      </h2>
      <p className="text-secondary">{noticia.descripcion}</p>

      <div style={{ marginTop: 12, lineHeight: 1.6 }}>
        <p>
          {noticia.contenido ||
            "Aquí va el texto ampliado de la noticia. Puedes reemplazar esta descripción por el cuerpo completo de la noticia."}
        </p>
        <p>Fuente: Futbol.AI — {new Date().getFullYear()}</p>
      </div>

      <Link to="/noticias" className="btn btn-outline-success mt-3">
        ← Volver a Noticias
      </Link>
    </div>
  );
}
