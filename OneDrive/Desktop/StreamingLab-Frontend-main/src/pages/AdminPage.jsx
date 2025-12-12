// src/pages/AdminPage.jsx
import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');

  // Obtener todos los usuarios
  const fetchUsers = async () => {
    try {
      const res = await UserService.getUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      alert("No se pudieron cargar los usuarios.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Crear usuario
  const handleCreate = async () => {
    if (!name || !email || !password) {
      return alert("Completa todos los campos");
    }
    try {
      await UserService.createUser({ name, email, password, role });
      setName('');
      setEmail('');
      setPassword('');
      setRole('USER');
      fetchUsers();
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert("No se pudo crear el usuario.");
    }
  };

  // Editar usuario
  const handleUpdate = async (user) => {
    const newName = prompt("Nuevo nombre:", user.name);
    if (!newName) return;
    const newEmail = prompt("Nuevo email:", user.email);
    if (!newEmail) return;
    const newRole = prompt("Nuevo rol (USER/ADMIN):", user.role);
    if (!newRole) return;

    try {
      await UserService.updateUser(user.id, {
        name: newName,
        email: newEmail,
        password: user.password, // mantenemos la contraseña actual
        role: newRole
      });
      fetchUsers();
    } catch (error) {
      console.error("Error al actualizar usuario:", error);
      alert("No se pudo actualizar el usuario.");
    }
  };

  // Eliminar usuario
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que quieres eliminar este usuario?")) return;
    try {
      await UserService.deleteUser(id);
      fetchUsers();
    } catch (error) {
      console.error("Error al eliminar usuario:", error);
      alert("No se pudo eliminar el usuario.");
    }
  };

  return (
    <div className="container">
      <h1>Administración de Usuarios</h1>

      <div className="form">
        <input
          placeholder="Nombre"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <select value={role} onChange={e => setRole(e.target.value)}>
          <option value="USER">USER</option>
          <option value="ADMIN">ADMIN</option>
        </select>
        <button onClick={handleCreate}>Crear Usuario</button>
      </div>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email}) - {u.role}
            <button onClick={() => handleUpdate(u)}>Editar</button>
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
