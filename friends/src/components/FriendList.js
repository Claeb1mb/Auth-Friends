import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

// This Component Dispalys The Current Friend List
const FriendList = () => {
  const [friends, setFriends] = useState([
    {
      age: "",
      email: "",
      id: "",
      name: "",
    },
  ]);

  useEffect(() => {
    axiosWithAuth()
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        console.log(res);
        setFriends(res.data);
      })
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <h1>Hi</h1>
      {friends.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.age}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default FriendList;

// Return to return statement
/*{this.friends.map((item) => (
  <div key={item.id}>
    <p>{this.friend.name}</p>
    <p>{this.friend.age}</p>
    <p>{this.friend.email}</p>
  </div>
))}*/
