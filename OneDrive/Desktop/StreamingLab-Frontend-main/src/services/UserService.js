import axios from 'axios';

const BASE_URL = '/api/users'; // Ajusta según tu endpoint en Spring Boot

class UserService {
  // Obtener todos los usuarios
  getUsers() {
    return axios.get(BASE_URL);
  }

  // Obtener un usuario por ID
  getUser(id) {
    return axios.get(`${BASE_URL}/${id}`);
  }

  // Crear un nuevo usuario
  createUser(user) {
    return axios.post(BASE_URL, user);
  }

  // Actualizar usuario por ID
  updateUser(id, user) {
    return axios.put(`${BASE_URL}/${id}`, user);
  }

  // Eliminar usuario por ID
  deleteUser(id) {
    return axios.delete(`${BASE_URL}/${id}`);
  }
}

// Exportamos una instancia directamente
const userService = new UserService();
export default userService;
