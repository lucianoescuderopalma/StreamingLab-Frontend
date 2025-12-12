import React, { useEffect } from 'react';
import '../assets/css/styles.css';

export default function Register() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/assets/js/scripts.js';
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div>
      {/* ================= HEADER / NAVBAR ================= */}
      <header className="container header-inner">
        <div className="logo neon-title">
          <a href="/">Streaming Lab</a>
        </div>

        <nav className="nav-list">
          <a href="/" className="neon-button">Inicio</a>
          <a href="/login" className="neon-button">Iniciar sesión</a>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="container">
        <section className="card auth-card">
          <h2 className="hero-title-neon">Crear cuenta</h2>
          <form id="registerForm" noValidate>
            <label htmlFor="name">Nombre completo</label>
            <input id="name" name="name" type="text" required autoComplete="name" />
            <small className="error" id="nameError"></small>

            <label htmlFor="regEmail">Correo electrónico</label>
            <input id="regEmail" name="regEmail" type="email" required autoComplete="email" />
            <small className="error" id="regEmailError"></small>

            <label htmlFor="regPassword">Contraseña</label>
            <input id="regPassword" name="regPassword" type="password" required minLength="8" />
            <small className="error" id="regPasswordError"></small>

            <label htmlFor="confirmPassword">Confirmar contraseña</label>
            <input id="confirmPassword" name="confirmPassword" type="password" required minLength="8" />
            <small className="error" id="confirmPasswordError"></small>

            <button className="btn primary" type="submit">Crear cuenta</button>
          </form>
          <p>¿Ya tienes cuenta? <a href="/login">Entrar</a></p>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>&copy; 2025 Streaming Lab</p>
      </footer>
    </div>
  );
}
