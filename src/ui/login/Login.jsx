import React, { Component } from "react";
import AuthenticationService from "../../components/authentication/AuthenticationService.js";
import { Icon } from "@iconify/react";
import userCircle from "@iconify/icons-fa/user-circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReloadPage from "../../components/ReloadPage.js";
import { withRouter } from "react-router";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "Tim",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  loginClicked() {
    //Tim,1234
    // AuthenticationService
    //     .executeBasicAuthenticationService(this.state.username, this.state.password)
    //     .then(() => {
    //         AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
    //         this.props.history.push(`/welcome/${this.state.username}`)
    //     }).catch( () =>{
    //         this.setState({showSuccessMessage:false})
    //         this.setState({hasLoginFailed:true})
    //     })

     AuthenticationService.executeJwtAuthenticationService(
       this.state.username,
       this.state.password
     )
       .then(response => {
         AuthenticationService.registerSuccessfulLoginForJwt(
           this.state.username,
           response.data.token
         );
         this.props.history.push(`/welcome/${this.state.username}`);
       })
       .catch(() => {
         this.setState({ showSuccessMessage: false });
         this.setState({ hasLoginFailed: true });
       });
    }


  resetForm = () => {
    this.setState({ username: "" });
    this.setState({ password: "" });
  };

  render() {
    return (
      <div className="login">
        <div className="card1">
          <h1>Sign-in</h1>
          <div className="container">
            {this.state.hasLoginFailed && (
              <div className="alert alert-warning">Invalid Credentials</div>
            )}
            {this.state.showSuccessMessage && <div>Login Sucessful</div>}
            <div>
              <Icon icon={userCircle} style={{ float: "left" }} />
              <input
                type="text"
                name="username"
                placeholder="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div>
              <FontAwesomeIcon icon="key" style={{ float: "left" }} />
              <input
                type="password"
                name="password"
                placeholder="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <br></br>
            <div>
              <button className="btn btn-success" onClick={this.loginClicked}>
                Login
              </button>
              <button
                className="btn btn-warning"
                onClick={
                  this.resetForm.bind(this) && withRouter && ReloadPage.refresh
                }
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
