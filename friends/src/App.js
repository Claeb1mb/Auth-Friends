import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import NewFriends from "./components/NewFriends";
function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <ul>
            <Link to="/login">Login</Link>
          </ul>
          <ul>
            <Link to="/friend">Friends</Link>
          </ul>
          <ul>
            <Link to="/new-friends">New friends</Link>
          </ul>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friend" component={FriendList} />
          <PrivateRoute exact path="/new-friends" component={NewFriends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
