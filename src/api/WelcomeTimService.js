import axios from "axios";

class WelcomeTimService {
  executeWelcomeTimService() {
    return axios.get("http://localhost:8080/welcome-tim");
  }

  executeWelcomeTimBeanService() {
    return axios.get("http://localhost:8080/welcome-tim-bean");
  }

  executeWelcomeTimPathVariableService(name) {

    return axios.get(
      `http://localhost:8080/welcome-tim/path-variable/{name}/${name}`
     
    );
    }
}

export default new WelcomeTimService();
