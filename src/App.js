import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";

const App = () => {
  const isAuthenticated = () => {

    // check if the user is authenticated
    const token = sessionStorage.getItem("token");
    return token ? true : false;
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        
        {/* protected path to home page */}
        <Route
          path="/home"
          element={isAuthenticated() ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
