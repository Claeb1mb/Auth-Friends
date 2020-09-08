import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// This Component Dispalys The Current Friend List
class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/api/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    );
  }
}

export default FriendList;

// Return to return statement
/*{this.friends.map((item) => (
  <div key={item.id}>
    <p>{this.friend.name}</p>
    <p>{this.friend.age}</p>
    <p>{this.friend.email}</p>
  </div>
))}*/
