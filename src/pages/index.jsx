import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import gestion from '../assets/img/gestion.png'
import planes from '../assets/img/planes.png'
import infografia from '../assets/img/infografia.jpg'

export default function Index() {
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
      <header>
        <div className="container header-inner">
          {/* Logo con neón blanco + toque morado */}
          <h1 className="logo neon-title">
            <a href="/">Streaming Lab</a>
          </h1>

          {/* Navbar con botones animados */}
          <nav>
            <ul className="nav-list">
              <li>
                <a href="/" className="neon-button">Inicio</a>
              </li>
              <li>
                <a href="/plans" className="neon-button">Planes</a>
              </li>
              <li>
                <a href="/account" className="neon-button">Cuentas</a>
              </li>
              <li>
                <a href="/login" className="neon-button">Iniciar sesión</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* ================= HERO / BANNER ================= */}
      <section className="hero hero-banner">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h2 className="hero-title-neon">
            Administra todas tus cuentas de streaming en un solo lugar
          </h2>
          <p className="hero-subtitle">
            Organiza usuarios, controla accesos y elige planes de forma rápida y segura.
          </p>
          <a className="btn primary" href="/register">Comenzar gratis</a>
        </div>
      </section>

      {/* ================= FEATURES / CARDS ================= */}
      <main className="container">
        <section className="features">
          <article className="card">
            <img src={gestion} alt="Gestión de Cuentas"/>
            <h3>Gestión de Cuentas</h3>
            <p>Añade, edita o elimina cuentas de tus plataformas favoritas.</p>
          </article>
          <article className="card">
            <img src={planes} alt="Planes Flexibles"/>
            <h3>Planes Flexibles</h3>
            <p>Elige el plan que mejor se adapte a tu grupo o familia.</p>
          </article>
          <article className="card">
            <img src={infografia} alt="Dashboard Centralizado"/>
            <h3>Dashboard Centralizado</h3>
            <p>Visualiza estadísticas y control de accesos en un solo panel.</p>
          </article>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>&copy; 2025 Streaming Lab — Proyecto DSY1104</p>
        <p>Contacto: streaminglab@example.com</p>
      </footer>
    </div>
  );
}
