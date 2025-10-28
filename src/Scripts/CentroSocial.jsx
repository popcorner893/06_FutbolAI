import React from "react";
import "../HojasEstilo/CentroSocial.css";



export default function CentroSocial() {
    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4" style={{ color: "#16A34A" }}>
                🌍 Centro Social Futbol.AI
            </h2>

            <div className="row">
                {/* SECCIÓN IZQUIERDA - Acordeón */}
                <div className="col-md-8">
                    <div className="accordion" id="accordionRedes">

                        {/* Selección Colombia */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingColombia">
                                <button
                                    className="accordion-button"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseColombia"
                                    aria-expanded="true"
                                    aria-controls="collapseColombia"
                                >
                                    🇨🇴 Selección Colombia
                                </button>
                            </h2>
                            <div
                                id="collapseColombia"
                                className="accordion-collapse collapse show"
                                aria-labelledby="headingColombia"
                                data-bs-parent="#accordionRedes"
                            >
                                <div className="accordion-body text-center">
                                    <img
                                        src="/assets/centrosocial/colombia.jpg"
                                        alt="Selección Colombia"
                                        className="img-fluid rounded mb-3"
                                        style={{ maxHeight: "220px", objectFit: "cover" }}
                                    />
                                    <p>
                                        Sigue a la Selección Colombia para conocer convocatorias, resultados
                                        y momentos destacados del equipo nacional.
                                    </p>
                                    <div className="d-flex justify-content-center gap-3">
                                        <a
                                            href="https://www.instagram.com/fcfseleccioncol/"
                                            target="_blank"
                                            className="btn btn-outline-danger"
                                            rel="noopener noreferrer"
                                        >
                                            Instagram
                                        </a>
                                        <a
                                            href="https://twitter.com/FCFSeleccionCol"
                                            target="_blank"
                                            className="btn btn-outline-primary"
                                            rel="noopener noreferrer"
                                        >
                                            X (Twitter)
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FIFA */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFifa">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFifa"
                                    aria-expanded="false"
                                    aria-controls="collapseFifa"
                                >
                                    🌐 FIFA - Copa del Mundo
                                </button>
                            </h2>
                            <div
                                id="collapseFifa"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFifa"
                                data-bs-parent="#accordionRedes"
                            >
                                <div className="accordion-body text-center">
                                    <img
                                        src="/assets/centrosocial/fifa.jpg"
                                        alt="FIFA World Cup"
                                        className="img-fluid rounded mb-3"
                                        style={{ maxHeight: "220px", objectFit: "cover" }}
                                    />
                                    <p>
                                        Mantente al día con las noticias y videos oficiales de la FIFA y las
                                        competiciones internacionales más importantes del mundo.
                                    </p>

                                    {/* Video de YouTube embebido */}
                                    <div className="ratio ratio-16x9 mb-3">
                                        <iframe
                                            width="560"
                                            height="315"
                                            src="https://www.youtube.com/embed/BNpP2JfdGM4?si=iH-kv1auxnBoBcn8"
                                            title="YouTube video player"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    <a
                                        href="https://www.youtube.com/fifa"
                                        target="_blank"
                                        className="btn btn-danger"
                                        rel="noopener noreferrer"
                                    >
                                        🔴 Ver canal de la FIFA
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Fans del fútbol */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingFans">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseFans"
                                    aria-expanded="false"
                                    aria-controls="collapseFans"
                                >
                                    🎉 Comunidad de Fans
                                </button>
                            </h2>
                            <div
                                id="collapseFans"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingFans"
                                data-bs-parent="#accordionRedes"
                            >
                                <div className="accordion-body text-center">
                                    <div className="row">
                                        {["fans1.jpg", "fans2.jpg", "fans3.jpg"].map((img, i) => (
                                            <div className="col-md-4 mb-3" key={i}>
                                                <img
                                                    src={`/assets/centrosocial/${img}`}
                                                    alt={`Fan ${i + 1}`}
                                                    className="img-fluid rounded shadow-sm"
                                                    style={{ maxHeight: "180px", objectFit: "cover" }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <p>
                                        Los fanáticos del fútbol comparten su pasión desde todas partes del mundo 🌎
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Audios y Retransmisiones */}
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingAudios">
                                <button
                                    className="accordion-button collapsed"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseAudios"
                                    aria-expanded="false"
                                    aria-controls="collapseAudios"
                                >
                                    🎧 Audios y Retransmisiones
                                </button>
                            </h2>
                            <div
                                id="collapseAudios"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingAudios"
                                data-bs-parent="#accordionRedes"
                            >
                                <div className="accordion-body">
                                    <div className="mb-4 text-center">
                                        <h5>🏟️ Nacional genera miedo: Contundente victoria en el clásico frente al DIM</h5>
                                        <p>
                                            Revive la narración y análisis del triunfo de Atlético Nacional en el clásico paisa. 
                                            Un partido lleno de intensidad y dominio verde.
                                        </p>
                                        <audio controls className="w-100">
                                            <source src="/assets/audios/nacional_america.mp3" type="audio/mpeg" />
                                            Tu navegador no soporta la reproducción de audio.
                                        </audio>
                                    </div>

                                    <div className="mb-4 text-center">
                                        <h5>⚔️ 8 equipos por 2 cupos: Millonarios, Santa Fe, América, Cali... ¿Quién entra?</h5>
                                        <p>
                                            Un análisis de la recta final del campeonato colombiano, donde varios clubes pelean 
                                            por un lugar en los cuadrangulares.
                                        </p>
                                        <audio controls className="w-100">
                                            <source src="/assets/audios/equipos_cupos.mp3" type="audio/mpeg" />
                                            Tu navegador no soporta la reproducción de audio.
                                        </audio>
                                    </div>

                                    <div className="text-center">
                                        <h5>🇨🇴 La Selección Colombia y su nuevo reto en la Liga de Naciones Femenina</h5>
                                        <p>
                                            Escucha los detalles del próximo desafío del combinado femenino colombiano en la 
                                            Liga de Naciones, con entrevistas y reacciones exclusivas.
                                        </p>
                                        <audio controls className="w-100">
                                            <source src="/assets/audios/colombia.mp3" type="audio/mpeg" />
                                            Tu navegador no soporta la reproducción de audio.
                                        </audio>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SECCIÓN DERECHA - Amigos */}
                <div className="col-md-4">
                    <div className="card shadow-sm p-3">
                        <h5 className="text-center" style={{ color: "#004488" }}>
                            👥 Mis Amigos
                        </h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Carlos ⚽</li>
                            <li className="list-group-item">Valentina 💬</li>
                            <li className="list-group-item">Andrés 🎯</li>
                            <li className="list-group-item">Laura 🏟️</li>
                        </ul>
                        <button className="btn btn-success w-100 mt-3" onClick={() => alert("⚠️ Esta feature se implementará con la base de datos")}>
                            ➕ Agregar nuevo amigo
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
