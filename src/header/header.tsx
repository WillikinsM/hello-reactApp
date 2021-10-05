import React from "react";
import "./header.css";
import img from "./img/ico.jpg";

function HeaderNav() {
  return (
    <header className="header">
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <img
            src={img}
            alt=""
            width="80"
            height="45"
            className="d-inline-block align-text-top"
          />
          <a href="" className="navbar-brand ms-auto">
            Londrina - Setembro de 2021
          </a>
        </div>
      </nav>
    </header>
  );
}

export default HeaderNav;
