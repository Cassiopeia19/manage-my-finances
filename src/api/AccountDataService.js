import axios from "axios";
import { JPA_API_URL } from "../../src/Constants";

class AccountDataService {
  retrieveAllAccounts(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/accounts`);
  }

  retrieveAccount(name, accountId) {
    return axios.get(`${JPA_API_URL}/users/${name}/accounts/${accountId}`);
  }

  deleteAccount(name, accountId) {
    return axios.delete(`${JPA_API_URL}/users/${name}/accounts/${accountId}`);
  }

  updateAccount(name, accountId, account) {
    return axios.put(
      `${JPA_API_URL}/users/${name}/accounts/${accountId}`,
      account
    );
  }

  createAccount(name, account) {
    return axios.post(`${JPA_API_URL}/users/${name}/accounts/`, account);
  }
}

export default new AccountDataService();
