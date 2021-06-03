import axios from "axios";
import { JPA_API_URL } from '../Constants'


class AccountDataService {
  retrieveAllAccounts(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/accounts`);
  }

  retrieveAccount(name, id) {
    return axios.get(`${JPA_API_URL}/users/${name}/accounts/${id}`);
  }

  deleteAccount(name, id) {
    return axios.delete(`${JPA_API_URL}/users/${name}/accounts/${id}`);
  }

   archiveAccount(name, id, account) {
    return axios.put(`${JPA_API_URL}/users/${name}/accounts/${id}`, account);
  }

   updateAccount(name, id, account) {
        return axios.put(
            `${JPA_API_URL}/users/${name}/accounts/${id}`,
            account
        );
    }

  createAccount(name, account) {
    return axios.post(`${JPA_API_URL}/users/${name}/accounts/`, account);
  }
}

export default new AccountDataService();

