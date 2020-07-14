import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/protected">protected page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/protected" />
          <Route path="/login" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
