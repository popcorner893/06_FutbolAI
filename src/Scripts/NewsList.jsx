import React from "react";

export default function NewsList({ news, onDelete }) {
  if (news.length === 0) {
    return <p className="no-news">No hay noticias publicadas aún.</p>;
  }

  return (
    <div className="news-list">
      {news.map((post) => (
        <div className="news-card" key={post.id}>
          {post.image && (
            <img src={post.image} alt={post.title} className="news-image" />
          )}

          {/* Lista todas las noticias publicadas con anterioridad */}

          <div className="news-content">
            <span className="news-category">{post.category}</span>
            <h3>{post.title}</h3>
            <p>{post.content}</p>

            <div className="news-footer">
              <span>📅 {post.date}</span>
              <button
                className="delete-btn"
                onClick={() => onDelete(post.id)}
              >
                🗑️ Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
