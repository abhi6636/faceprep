import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  // handle password change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  // handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "foo" && password === "bar") {
      
        // store token in session storage
      sessionStorage.setItem("token", "123456789");

      // redirect to "/home"
      window.location.href = "/home";
    } else {
      // show error message
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 1000);
    }
  };

  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="card-body text-center d-flex flex-column align-items-center">
            <div className="bs-icon-xl bs-icon-circle bs-icon-primary shadow bs-icon my-4">
              <svg
                className="bi bi-person"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
              </svg>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="text"
                  name="email"
                  placeholder="Username"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-control"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-3">
                <button
                  className="btn btn-primary shadow d-block w-100"
                  type="submit"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>

        {showError && (
          <div className="popup">
            <div className="popup-content">
              <span className="close" onClick={() => setShowError(false)}>
                &times;
              </span>
              <p>Invalid credentials. Please try again.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Login;
