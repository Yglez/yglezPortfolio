import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import yglez from "../yglez.JPG";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homePage: true,
      contactPage: false
    };
  }
  render() {
    return (
      <section>
        <nav className="navbar navbar-expand-lg navbar-light default-color lighten-4">
          <a className="navbar-brand" href="#home">
            <img
              className="potrait"
              src={yglez}
              alt=""
              style={{ background: "transparent" }}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navLinks"
            aria-controls="navLinks"
            aria-expanded="false"
            aria-label="Toggle navidation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navLinks">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item ">
                <NavLink className="nav-link active" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/work">
                  Work
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    );
  }
}

export default Navbar;
