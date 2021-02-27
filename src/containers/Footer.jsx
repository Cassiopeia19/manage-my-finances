import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <span className="text-muted">
          <center>
            {" "}
            All Rights Reserved &copy; {new Date().getFullYear()} Manage My
            Finances
          </center>
        </span>
      </footer>
    );
  }
}
export default Footer;
