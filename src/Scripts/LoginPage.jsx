import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";
import "../HojasEstilo/LoginPage.css";

const LoginPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Si venía de una ruta protegida, regresar allí; si no, ir a /app
  const from = location.state?.from?.pathname || "/app";

  const togglePassword = () => setPasswordVisible(!passwordVisible);
  const handleCaptcha = (value) => setCaptchaValue(value);

  const handleLogin = (e) => {
    e.preventDefault();

    //Captcha necesario
    if (!captchaValue) {
      setError("⚠️ Por favor, completa el CAPTCHA antes de continuar.");
      return;
    }
    

    //Credenciales correctas
    const success = login(email, password);
    if (success) {
      alert("✅ Inicio de sesión exitoso");
      navigate(from, { replace: true });
    } else {
      setError("❌ Credenciales incorrectas. Usa admin1234@gmail.com / 1234 para pruebas.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Inicia Sesión</h1>

        {/* Manejar los forms */}
        <form onSubmit={handleLogin} className="form-container">
          <div className="form-left">
            <label htmlFor="correo">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su correo"
              required
            />

            <label htmlFor="password">Contraseña</label>
            <div className="password-field">
              <input
                type={passwordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contraseña"
                required
              />

              {/* Botón para ver u ocultar contraseña */}
              <button
                type="button"
                className="toggle-pass-btn"
                onClick={togglePassword}
                aria-label="Mostrar u ocultar contraseña"
              >
                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          {/* Momentáneamente */}
          <div className="form-right">
            <h3>¿No tiene una cuenta?</h3>
            <button type="button" className="btn-register" onClick={() => alert("⚠️ Esta feature se implementará con la base de datos")}>
              Regístrese
            </button>
          </div>
        </form>

        <hr />

        {/* Captcha */}
        <div className="captcha-container">
          <ReCAPTCHA
            sitekey="6LeF_fYrAAAAAP-gbGqBdJzWsWj-sUnrBIeqoDtN"
            onChange={handleCaptcha}
          />
        </div>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        <button className="btn-login" type="submit" onClick={handleLogin}>
          Iniciar Sesión
        </button>

        <div className="links">
          <Link to="/">Volver al inicio</Link> •{" "}
          <a href="#">Términos y Condiciones</a> -{" "}
          <a href="#">Política de Privacidad</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;





