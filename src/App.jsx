import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/index';
import Account from './pages/Account';
import Plans from './pages/Plans';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminPage from './pages/AdminPage';
import AdminRoute from './routes/AdminRoute';

export default function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/account" element={<Account />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/admin" 
          element={
            <AdminRoute user={user}>
              <AdminPage />
            </AdminRoute>
          } 
        />
      </Routes>
    </Router>
  );
}
