import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // CORRECCIÓN: usar getUsers() en lugar de getAllUsers()
  const fetchUsers = async () => {
    try {
      const res = await UserService.getUsers();
      setUsers(res.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
      alert("No se pudieron cargar los usuarios.");
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleCreate = async () => {
    try {
      await UserService.createUser({ name, email });
      setName('');
      setEmail('');
      fetchUsers();
    } catch (error) {
      console.error("Error al crear usuario:", error);
      alert("No se pudo crear el usuario.");
    }
  };

  const handleUpdate = async (id) => {
    const newName = prompt('Nuevo nombre:');
    if (newName) {
      try {
        await UserService.updateUser(id, { name: newName });
        fetchUsers();
      } catch (error) {
        console.error("Error al actualizar usuario:", error);
        alert("No se pudo actualizar el usuario.");
      }
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('¿Seguro que quieres eliminar este usuario?')) {
      try {
        await UserService.deleteUser(id);
        fetchUsers();
      } catch (error) {
        console.error("Error al eliminar usuario:", error);
        alert("No se pudo eliminar el usuario.");
      }
    }
  };

  return (
    <div>
      <h1>Administración de Usuarios</h1>
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
      <button onClick={handleCreate}>Crear Usuario</button>

      <ul>
        {users.map(u => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => handleUpdate(u.id)}>Editar</button>
            <button onClick={() => handleDelete(u.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
