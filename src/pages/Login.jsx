import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/styles.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    import('../assets/js/scripts.js');
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');

    // Aquí validamos el email y contraseña
    if(email === "admin@streaminglab.com" && password === "admin123") {
      // Guardamos usuario en localStorage
      localStorage.setItem('user', JSON.stringify({ email, role: 'ADMIN' }));
      navigate("/admin"); // redirige a admin
    } else if(email === "user@streaminglab.com" && password === "user123") {
      localStorage.setItem('user', JSON.stringify({ email, role: 'USER' }));
      navigate("/account"); // redirige a usuario normal
    } else {
      setError('Correo o contraseña incorrectos.');
    }
  };

  return (
    <div>
      <header className="container header-inner">
        <div className="logo neon-title">
          <a href="/">Streaming Lab</a>
        </div>
        <nav className="nav-list">
          <a href="/" className="neon-button">Inicio</a>
          <a href="/register" className="neon-button">Registro</a>
        </nav>
      </header>

      <main className="container">
        <section className="card auth-card">
          <h2 className="hero-title-neon">Iniciar sesión</h2>
          <form onSubmit={handleLogin} noValidate>
            <label htmlFor="email">Correo electrónico</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />

            <button className="btn primary" type="submit">Entrar</button>
          </form>

          {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
        </section>
      </main>

      <footer>
        <p>&copy; 2025 Streaming Lab</p>
      </footer>
    </div>
  );
}
