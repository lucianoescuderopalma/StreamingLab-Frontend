import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children, user }) => {
  // Si no hay usuario o no es admin, redirige al login
  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default AdminRoute;
