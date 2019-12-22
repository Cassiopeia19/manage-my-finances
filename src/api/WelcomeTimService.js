import axios from "axios";

class WelcomeTimService {
  executeWelcomeTimService() {
    return axios.get("http://localhost:8080/welcome-tim");
  }

  executeWelcomeTimBeanService() {
    return axios.get("http://localhost:8080/welcome-tim-bean");
  }

  executeWelcomeTimPathVariableService(name) {
    let username = "Tim";
    let password = "1234";

    let basicAuthHeader = "Basic " + window.btoa(username + ":" + password)

    return axios.get(
      `http://localhost:8080/welcome-tim/path-variable/{name}/${name}`,
      {
        headers: {
          authorization: basicAuthHeader
        }
      }
    );
    }
}

export default new WelcomeTimService();
