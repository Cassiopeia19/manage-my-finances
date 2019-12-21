import axios from "axios";

class AccountDataService {
  retrieveAllAccounts(name) {
    return axios.get(`http://localhost:8080/users/${name}/accounts`);
  }

  retrieveAccount(name, accountId) {
    return axios.get(`http://localhost:8080/users/${name}/accounts/${accountId}`);
  }

  deleteAccount(name, accountId) {
    return axios.delete(`http://localhost:8080/users/${name}/accounts/${accountId}`);
  }

  updateAccount(name, accountId, account) {
    return axios.put(`http://localhost:8080/users/${name}/accounts/${accountId}`, account);
  }

  createAccount(name, account) {
    return axios.post(`http://localhost:8080/users/${name}/accounts/`, account);
  }
}

export default new AccountDataService();