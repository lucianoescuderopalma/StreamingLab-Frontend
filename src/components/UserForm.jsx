import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import UserService from '../services/UserService';

const UserForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('USER');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      UserService.getUserById(id)
        .then(res => {
          setName(res.data.name);
          setEmail(res.data.email);
          setPassword(res.data.password);
          setRole(res.data.role);
        })
        .catch(err => console.error(err));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password, role };
    const action = id ? UserService.updateUser(id, user) : UserService.createUser(user);
    action.then(() => navigate('/')).catch(err => console.error(err));
  };

  return (
    <div className="container">
      <div className="card form-card">
        <h2>{id ? 'Edit User' : 'Add User'}</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
          <select value={role} onChange={e => setRole(e.target.value)}>
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
          <button type="submit">{id ? 'Update' : 'Save'}</button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
