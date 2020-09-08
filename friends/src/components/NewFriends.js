import React, { Component } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// This form Will be to add new friends to the friend list
class NewFriend extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.addFriend();
  }

  addFriend = () => {
    axiosWithAuth()
      .post("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return <div></div>;
  }
}

export default NewFriend;
