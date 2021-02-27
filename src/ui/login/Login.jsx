import React, { useState } from "react";
import AuthenticationService from "../../components/authentication/AuthenticationService";
import { Icon } from "@iconify/react";
import userCircle from "@iconify/icons-fa/user-circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReloadPage from "../../components/ReloadPage.js";
import { withRouter } from "react-router";
import "./Login.css";
import Axios from 'axios'
import { useHistory } from "react-router-dom";


function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setLoginStatus] = useState("");
  const history = useHistory();

  const login = () => {
    console.log("login")
    Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setLoginStatus(response.data.message)
        console.log(response.data.message)
      } else {
        setLoginStatus(response.data[0].username)
        AuthenticationService.registerSuccessfulLogin(
          setUsername({ username }),
          setPassword({ password })
        );
         history.push(`/welcome/${username}`);
        console.log(response.data[0].username)
      }
    });
  };

  return (
    <>
      <div className="login">
        <div className="card1">
          <h1>
            <center>Sign-in</center>
          </h1>
          <center>
            <div>
              <Icon icon={userCircle} style={{ float: "left" }} />
              <input
                type="text"
                name="username"
                placeholder="username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <div>
              <FontAwesomeIcon icon="key" style={{ float: "left" }} />
              <input
                type="text"
                name="password"
                placeholder="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <br></br>
            <div>
              <button className="btn btn-success" onClick={login}>
                Login
              </button>
              <button
                className="btn btn-warning"
                onClick={withRouter && ReloadPage.refresh}
              >
                Reset
              </button>
              <br></br>
            </div>
          </center>
        </div>
        <h1 style={{ backgroundColor: "#ffa07a" }}>
          <center>{loginStatus}</center>
        </h1>
      </div>
    </>
  );
}

export default withRouter(Login);