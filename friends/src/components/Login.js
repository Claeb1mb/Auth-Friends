import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", res.data.payload)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        this.props.history.push("./protected");
      })
      .catch((err) => console.Console.log({ err }));
  };

  render() {
    return (
      <div>
        <form></form>
      </div>
    );
  }
}
