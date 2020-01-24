import React from "react";
import reactDOM from "react-dom";
import "./NewUser.scss"

class NewUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errors: [],
      pwdState: null
    };
  }

  showValidationErr(elm, msg) {
    this.setState(prevState => ({
      errors: [
        ...prevState.errors,
        {
          elm,
          msg
        }
      ]
    }));
  }

  clearValidationErr(elm) {
    this.setState(prevState => {
      let newArr = [];
      for (let err of prevState.errors) {
        if (elm !== err.elm) {
          newArr.push(err);
        }
      }
      return { errors: newArr };
    });
  }

  onUsernameChange(e) {
    this.setState({ username: e.target.value });
    this.clearValidationErr("username");
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value });
    this.clearValidationErr("password");

    this.setState({ pwdState: "weak" });
    if (e.target.value.length > 10) {
      this.setState({ pwdState: "strong" });
    } else if (e.target.value.length > 5) {
      this.setState({ pwdState: "medium" });
    } 
  }

  openPopup(e) {
    console.log("popup open");
  }

  submitRegister(e) {
    console.log(this.state);

    if (this.state.username === "") {
      this.showValidationErr("username", "Username Cannot be empty!");
    }
    if (this.state.password === "") {
      this.showValidationErr("password", "Password Cannot be empty!");
    }
  }

  render() {
    let usernameErr = null,
      passwordErr = null;

    for (let err of this.state.errors) {
      if (err.elm ==="username") {
        usernameErr = err.msg;
      }
      if (err.elm === "password") {
        passwordErr = err.msg;
      }
    }

    let pwdWeak = false,
      pwdMedium = false,
      pwdStrong = false;

    if (this.state.pwdState === "weak") {
      pwdWeak = true;
    } else if (this.state.pwdState === "medium") {
      pwdWeak = true;
      pwdMedium = true;
    } else if (this.state.pwdState === "strong") {
      pwdWeak = true;
      pwdMedium = true;
      pwdStrong = true;
    }

    return (
        <div className="box-container">
      <div className="inner-container">
        <div className="header">Add new user</div>
        <div className="box">
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              className="register-input"
              placeholder="Username"
              onChange={this.onUsernameChange.bind(this)}
            />
            <small className="danger-error">
              {usernameErr ? usernameErr : ""}
            </small>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="register-input"
              placeholder="Password"
              onChange={this.onPasswordChange.bind(this)}
            />
            <small className="danger-error">
              {passwordErr ? passwordErr : ""}
            </small>

            {this.state.password && (
              <div className="password-state">
                <div
                  className={"pwd pwd-weak " + (pwdWeak ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-medium " + (pwdMedium ? "show" : "")}
                ></div>
                <div
                  className={"pwd pwd-strong " + (pwdStrong ? "show" : "")}
                ></div>
              </div>
            )}
          </div>

          <button
            type="button"
            className="register-btn"
            onHover={this.openPopup.bind(this)}
            onClick={this.openPopup.bind(this) && 
                this.submitRegister.bind(this)}
          >
            Submit
          </button>
        </div>
      </div>
      </div>
    );
  }
}

reactDOM.render(<NewUser />, document.getElementById("root"));

export default NewUser