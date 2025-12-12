import React, { useEffect } from 'react';
import '../assets/css/styles.css';
import PlanIndividual from '../assets/img/Plan_individual.png'
import PlanFamiliar from '../assets/img/Plan_familiar.png'
import PlanCorporativo from '../assets/img/Plan_corporativo.png'
export default function Plans() {
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
          <a href="/account" className="neon-button">Cuentas</a>
          <a href="/login" className="neon-button">Iniciar sesión</a>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="container">
        <h2 className="hero-title-neon">Planes disponibles</h2>
        <div className="plans-grid">
          <section className="card plan">
            <img src={PlanIndividual} alt="Plan Individual" />
            <h3>Individual</h3>
            <p>1 cuenta vinculada · Acceso completo</p>
            <p className="price">$5.990 / mes</p>
            <button className="btn primary">Seleccionar</button>
          </section>

          <section className="card plan">
            <img src={PlanFamiliar} alt="Plan Familiar" />
            <h3>Familiar</h3>
            <p>Hasta 6 cuentas vinculadas · Administradores múltiples</p>
            <p className="price">$9.990 / mes</p>
            <button className="btn primary">Seleccionar</button>
          </section>

          <section className="card plan">
            <img src={PlanCorporativo} alt="Plan Corporativo" />
            <h3>Corporativo</h3>
            <p>Hasta 20 cuentas · Estadísticas avanzadas y soporte dedicado</p>
            <p className="price">$14.990 / mes</p>
            <button className="btn primary">Seleccionar</button>
          </section>
        </div>

        <section className="video-embed card">
          <h3 className="hero-title-neon">¿Cómo funciona?</h3>
          <div className="video-wrapper">
            <iframe title="Demo" src="https://www.youtube.com/embed/dQw4w9WgXcQ" allowFullScreen></iframe>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>&copy; 2025 Streaming Lab</p>
      </footer>
    </div>
  );
}
