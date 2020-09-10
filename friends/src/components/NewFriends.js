import React, { Component, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// This form Will be to add new friends to the friend list
const NewFriend = () => {
  const [addFriend, setAddFriends] = useState([
    {
      name: "",
      age: "",
      email: "",
      id: Date.now(),
    },
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", addFriend)
      .then((res) => {
        console.log(res);
        setAddFriends({ name: "", age: "", email: "" });
      })
      .catch((err) => console.log({ err }));
  };

  const changeHandler = (e) => {
    setAddFriends({
      ...addFriend,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        Name:
        <input
          type="text"
          name="name"
          value={addFriend.name}
          onChange={changeHandler}
        />
        <br />
        Age:
        <input
          type="text"
          name="age"
          value={addFriend.age}
          onChange={changeHandler}
        />
        <br />
        Email:
        <input
          type="text"
          name="email"
          value={addFriend.email}
          onChange={changeHandler}
        />
        <br />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default NewFriend;
