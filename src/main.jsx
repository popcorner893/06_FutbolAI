// Main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Oraculo from "./Scripts/Oraculo.jsx";
import LoginPage from "./Scripts/LoginPage.jsx";
import PublicLayout from "./Scripts/PublicLayout.jsx";
import PrivateLayout from "./Scripts/PrivateLayout.jsx";
import ProtectedRoute from "./Scripts/ProtectedRoute.jsx";
import TableroMensajes from "./Scripts/TableroMensajes.jsx"
import { AuthProvider } from "./Scripts/AuthContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import OraculoNotLogged from "./Scripts/OraculoNotLogged.jsx";
import Noticias from "./Scripts/Noticias.jsx";
import Home from "./Scripts/Home.jsx"
import Partidos from "./Scripts/Partidos.jsx"
import CentroSocial from "./Scripts/CentroSocial.jsx";
import Muro from "./Scripts/Muro.jsx";
import TablaDePosiciones from "./Scripts/TablaDePosiciones.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Rutas públicas dentro de PublicLayout */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="oraculo-not-logged" element={<OraculoNotLogged />} />
            <Route path="noticias" element={<Noticias />} />
            <Route path="partidos" element={<Partidos />} />
            <Route path="tabla-de-posiciones" element={<TablaDePosiciones />} />
          </Route>

          {/* Página de login fuera del layout público para no mostrar nav/footer */}
          <Route path="/login" element={<LoginPage />} />

          {/* Rutas protegidas: envolvemos con ProtectedRoute */}
          <Route element={<ProtectedRoute />}>
            {/* Aquí pongo /app como raíz privada*/}
            <Route path="/app" element={<PrivateLayout />}>
              {/* Rutas internas privadas */}
              <Route index element={<Home />} />
              <Route path="oraculo" element={<Oraculo />} />
              <Route path="noticias" element={<Noticias />} />
              <Route path="partidos" element={<Partidos />} />
              <Route path="tabla-de-posiciones" element={<TablaDePosiciones />} />
              <Route path="centro-social" element={<CentroSocial />} />
              <Route path="tablero" element={<TableroMensajes />} />
              <Route path="muro" element={<Muro />} />
            </Route>
          </Route>

          {/* Fallback para rutas no encontradas */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);

