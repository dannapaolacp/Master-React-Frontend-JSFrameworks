import React, { Component } from "react";
import logo from "../assets/images/logo.svg";

class TheHeader extends Component {
  render() {
    return (
      <header id="header">
        <div className="center">
          {/* Logo */}
          <div id="logo">
            <img src={logo} alt="Logotipo" className="app-logo" />
            <span id="brand">
              {" "}
              <strong>Curso React </strong>
            </span>
          </div>
          {/* Menu */}
          <nav id="menu">
            <ul>
              <li>
                <a href="./index.html">Inicio</a>
              </li>
              <li>
                <a href="./blog.html">Blog</a>
              </li>
              <li>
                <a href="./form.html">Formulario</a>
              </li>
              <li>
                <a href="#">Pag 1</a>
              </li>
              <li>
                <a href="#">Pag 2</a>
              </li>
            </ul>
          </nav>
          {/* clean floats */}
          <div className="clearfix"></div>
        </div>
      </header>
    );
  }
}

export default TheHeader;
