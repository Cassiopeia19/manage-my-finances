import axios from "axios";
import { JPA_API_URL } from "../../src/Constants";

class TransactionDataService {
    retrieveAllTransactions(name) {
        return axios.get(`${JPA_API_URL}/users/${name}/transactions`);
    }

    retrieveTransaction(name, id) {
        return axios.get(
            `${JPA_API_URL}/users/${name}/transactions/${id}`
        );
    }

    handleDelete(name, id) {
        return axios.delete(
            `${JPA_API_URL}/users/${name}/transactions/${id}`
        );
    }

    handleEdit(name, id, transaction) {
        return axios.put(
            `${JPA_API_URL}/users/${name}/transactions/${id}`,
            transaction
        );
    }

    createTransaction(name, transaction) {
        return axios.post(
            `${JPA_API_URL}/users/${name}/transactions/`,
            transaction
        );
    }
}

export default new TransactionDataService();