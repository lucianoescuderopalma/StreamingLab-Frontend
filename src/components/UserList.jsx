import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import UserService from '../services/UserService';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => { fetchUsers(); }, []);

  const fetchUsers = () => {
    UserService.getAllUsers()
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  };

  const deleteUser = (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) return;
    UserService.deleteUser(id)
      .then(fetchUsers)
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <div className="top-actions">
        <Link className="btn btn-primary" to="/add">Add New User</Link>
      </div>

      {users.length === 0 ? (
        <p>No users available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <Link className="btn btn-edit" to={`/edit/${user.id}`}>Edit</Link>
                  <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserList;
