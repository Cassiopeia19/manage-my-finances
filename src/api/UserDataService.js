import axios from "axios";
import { JPA_API_URL } from "../Constants";

class UserDataService {

  retrieveAllUsers(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/users`);
  }
  
  retrieveUser(name, id) {
    return axios.get(`${JPA_API_URL}/users/${name}/users/${id}`);
  }

  deleteUser(name, id) {
    return axios.delete(`${JPA_API_URL}/users/${name}/users/${id}`);
  }

  updateUser(name, id, user) {
    return axios.put(`${JPA_API_URL}/users/${name}/users/${id}`, user);
  }
}

export default new UserDataService();