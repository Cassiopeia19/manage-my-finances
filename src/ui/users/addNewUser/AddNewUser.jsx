import React, { useState } from "react";
import "./AddNewUser.scss";
import Axios from "axios";
import AuthenticationService from '../../../components/authentication/AuthenticationService'
import Button from "../../transactions/addTransaction/components/Button";

function AddNewUser() {
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passwordRegister, setPasswordRegister] = useState("");
  const [emailRegister, setEmailRegister] = useState("");
  const [message, setMessage] = useState("");
  const [state,setState] = useState("");
  const register = () => {
         let username = AuthenticationService.getLoggedInUsername();
        Axios.post(`http://localhost:8080/jpa/users/${username}/users"`, {
          username: usernameRegister,
          password: passwordRegister,
          email: emailRegister,
        }).then((response) => {
          console.log(response);
        });
    setMessage({
      message: `The new user has been successfully added!`,
    });
  };
  const handleFormReset = (e) => {
    setState({ username: "", password: "", email: "" });
  };

  return (
    <form className="base-container" onReset={handleFormReset}>
      {/* ref={this.props.containerRef} above*/}
      {message.message && (
        <div className="alert alert-success">{message.message}</div>
      )}
      <br />
      <div className="header">Add new user</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={(e) => {
                setUsernameRegister(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={(e) => {
                setEmailRegister(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              placeholder="password"
              onChange={(e) => {
                setPasswordRegister(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
      <center>
        <button type="button" className="btn btn-success" onClick={register}>
          Save
        </button>
        <Button
          className="btn btn-warning"
          type="reset"
          theme={"secondary"}
          title={"reset form"}
          style={{
            margin: "10px 10px 10px 10px",
            backgroundColor: "#ffce42",
            color: "black",
          }}
        />{" "}
      </center>
    </form>
  );
}

export default AddNewUser;
