import React, { useEffect } from 'react';
import '../assets/css/styles.css';

export default function Account() {
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
        {/* Logo neon blanco con toque morado */}
        <div className="logo neon-title">
          <a href="/">Streaming Lab</a>
        </div>

        {/* Navbar con botones rectangulares y animación */}
        <nav className="nav-list">
          <a href="/" className="neon-button">Inicio</a>
          <a href="/planes" className="neon-button">Planes</a>
          <a href="/cuentas" className="neon-button">Cuentas</a>
          <a href="/register" className="neon-button">Iniciar sesión</a>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="container">
        {/* Sección de cuentas vinculadas */}
        <section className="card">
          <h2>Cuentas vinculadas</h2>
          <button id="addAccountBtn" className="btn primary">Agregar cuenta</button>
          <table id="accountsTable" className="striped">
            <thead>
              <tr>
                <th>Plataforma</th>
                <th>Usuario</th>
                <th>Plan</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody></tbody>
          </table>
        </section>

        {/* Sección de formulario de cuenta */}
        <section className="card" id="accountFormSection" style={{ display: 'none' }}>
          <h3 id="formTitle">Agregar cuenta</h3>
          <form id="accountForm" noValidate>
            <label htmlFor="platform">Plataforma</label>
            <input id="platform" name="platform" required />
            <small className="error" id="platformError"></small>

            <label htmlFor="accUser">Usuario / Correo</label>
            <input id="accUser" name="accUser" type="email" required />
            <small className="error" id="accUserError"></small>

            <label htmlFor="accPlan">Plan</label>
            <select id="accPlan" name="accPlan">
              <option value="basico">Básico</option>
              <option value="premium">Premium</option>
              <option value="familiar">Familiar</option>
            </select>

            <button className="btn primary" type="submit">Guardar</button>
            <button className="btn" type="button" id="cancelForm">Cancelar</button>
          </form>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer>
        <p>&copy; 2025 Streaming Lab</p>
      </footer>
    </div>
  );
}
