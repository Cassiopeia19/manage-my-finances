import React, { useState } from "react";
import "./AddNewUser.scss";
import Axios from 'axios'

function AddNewUser()  {

    const [usernameRegister,setUsernameRegister] = useState('')
    const [passwordRegister,setPasswordRegister] = useState('')
    const [emailRegister,setEmailRegister] = useState('')
    const [message, setMessage] = useState('')

    const register = () => {
        Axios.post('http://localhost:3000/register', {
            username: usernameRegister,
            password: passwordRegister,
            email: emailRegister
        }).then((response) => {
            console.log(response);
        });
        setMessage({
          message: `The new user has been successfully added!`,
        });
    };
 
    return (
      <div className="base-container">
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
        <button type="button" className="btn btn-success" onClick={register}>
          Save
        </button>
      </div>
    );
}

export default AddNewUser;