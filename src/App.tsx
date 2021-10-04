import "./css/App.css";
import React, { useState } from "react";
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
