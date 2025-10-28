import React, { useState, useEffect } from "react";
import NewsAdmin from "./NewsAdmin";
import NewsList from "./NewsList";
import "../HojasEstilo/Muro.css";

export default function Muro() {
  const [news, setNews] = useState([]);

  // Cargar noticias desde localStorage
  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    setNews(storedNews);
  }, []);

  // Guardar noticias en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("news", JSON.stringify(news));
  }, [news]);

  const handleAddNews = (newPost) => {
    const updated = [newPost, ...news];
    setNews(updated);
  };

  const handleDeleteNews = (id) => {
    const updated = news.filter((post) => post.id !== id);
    setNews(updated);
  };

  return (
    <div className="news-container">
      <header className="news-header">
        <h1>📰 Muro</h1>
      </header>

      <NewsAdmin onAddNews={handleAddNews} />
      <NewsList news={news} onDelete={handleDeleteNews} />
    </div>
  );
}
 