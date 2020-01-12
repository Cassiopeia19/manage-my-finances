import axios from "axios";
import { JPA_API_URL } from "../../src/Constants";

class TransactionDataService {
  retrieveAllTransactions(name) {
    return axios.get(`${JPA_API_URL}/users/${name}/transactions`);
  }

  retrieveTransaction(name, transactionId) {
    return axios.get(
      `${JPA_API_URL}/users/${name}/transactions/${transactionId}`
    );
  }

  handleDelete(name, transactionId) {
    return axios.delete(
      `${JPA_API_URL}/users/${name}/transactions/${transactionId}`
    );
  }

  handleEdit(name, transactionId, transaction) {
    return axios.put(
      `${JPA_API_URL}/users/${name}//${transactionId}`,
      transaction
    );
  }

  createAccount(name, transaction) {
    return axios.post(
      `${JPA_API_URL}/users/${name}/transactions/`,
      transaction
    );
  }
}

export default new TransactionDataService();
