import React, { useState } from "react";
import "./Home.css";
import ApiFetch from "./ApiFetch";

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);

  //toggle action
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleLogout = () => {
    
    // remove the token from sessionStorage
    sessionStorage.removeItem("token");

    // redirect to root ("/")
    window.location.href = "/";
  };

  return (
    <>
      <nav id="mainNav" className="navbar navbar-dark navbar-expand-md py-3">
        <div className="container">
          <span className="bs-icon-sm bs-icon-circle bs-icon-primary shadow d-flex justify-content-center align-items-center me-2 bs-icon">
            <svg
              className="bi bi-bezier"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 16 16"
            ></svg>
          </span>
          <span>Infinite Scroll List</span>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleCollapse}
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          >
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">Welcome</li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
              <li className="nav-item"></li>
            </ul>
            <button
              className="btn btn-primary shadow"
              type="button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
      <div className="body">
        <ApiFetch />
      </div>
    </>
  );
};

export default Home;
