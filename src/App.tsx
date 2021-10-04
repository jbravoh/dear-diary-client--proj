import "./css/App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import NewPost from "./components/NewPost";
import Dashboard from "./components/Dashboard";

function App(): JSX.Element {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const setAuth = (boolean: boolean) => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();
      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    isAuth();
  });

  return (
    <div className="app-container">
      <Router>
        <Navbar setAuth={setAuth} />
        <Switch>
          <Route exact path="/dashboard">
            {isAuthenticated ? (
              <Dashboard setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/login">
            {!isAuthenticated ? (
              <Login setAuth={setAuth} />
            ) : (
              <Redirect to="/dashboard" />
            )}
          </Route>
          <Route path="/register">
            {!isAuthenticated ? (
              <Register setAuth={setAuth} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/new-post">
            <NewPost />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
