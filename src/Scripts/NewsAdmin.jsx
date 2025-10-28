import React, { useState } from "react";

export default function NewsAdmin({ onAddNews }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState("");

  {/* Todo este código tiene el propósito de cargar bien los archivos para las publicaciones del muro */}

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      image,
      date: new Date().toLocaleString(),
    };

    onAddNews(newPost);

    {/* Añadir una noticia*/}
    setTitle("");
    setContent("");
    setCategory("General");
    setImage(null);
    setPreview(null);
    setMessage("✅ Noticia publicada con éxito");

    setTimeout(() => setMessage(""), 2500);
  };

  return (
    
    <form className="news-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título de la noticia"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Noticia subida */}
      <textarea
        placeholder="Contenido de la noticia..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <div className="news-extra">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Premier League</option>
          <option>La Liga</option>
          <option>Bundesliga</option>
          <option>Seleccion Colombia</option>
          <option>Liga Colombiana</option>
          <option>Mundo Deportivo</option>
        </select>

        <label className="file-input">
          📷 Subir imagen
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
      </div>

      {preview && (
        <div className="preview-container">
          <img src={preview} alt="Vista previa" className="preview-image" />
        </div>
      )}

      <button type="submit">Publicar noticia</button>

      {message && <p className="success-msg">{message}</p>}
    </form>
  );
}
