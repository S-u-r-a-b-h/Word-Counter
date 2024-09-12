import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <Link className="navbar-brand mx-2" to="/">{props.title}</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="d-flex">
        <div
          className="bg-primary rounded mx-2 border border-2" onClick={() => {props.toggleMode("primary"); 
            if (typeof props.showAlert === 'function') {
              props.showAlert("Blue Mode has been enabled", "success");
            } 
          }}
          style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
        <div className="bg-danger rounded mx-2 border border-2" onClick={() => {props.toggleMode("danger");
            if (typeof props.showAlert === 'function') {
              props.showAlert("Red Mode has been enabled", "success");
            } 
          }}style={{height: "25px", width: "25px", cursor: "pointer" }}></div>
        <div className="bg-success rounded mx-2 border border-2" onClick={() => {props.toggleMode("success");
            if (typeof props.showAlert === 'function') {
              props.showAlert("Green Mode has been enabled", "success");
            } 
          }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
        <div className="bg-warning rounded mx-2 border border-2" onClick={() => {props.toggleMode("warning");
            if (typeof props.showAlert === 'function') {
              props.showAlert("Yellow Mode has been enabled", "success");
            } 
          }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
        <div className="bg-light rounded mx-2 border border-2" onClick={() => {props.toggleMode("light");
            if (typeof props.showAlert === 'function') {
              props.showAlert("Light Mode has been enabled", "success");
            } 
          }} style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
        <div className="bg-dark rounded mx-2 border border-2" onClick={() => {props.toggleMode("dark");
            if (typeof props.showAlert === 'function') {
              props.showAlert("Dark Mode has been enabled", "success");
            } }}style={{ height: "25px", width: "25px", cursor: "pointer" }}></div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  showAlert: PropTypes.func.isRequired,
};
