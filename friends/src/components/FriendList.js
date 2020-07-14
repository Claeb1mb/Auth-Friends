import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendList extends React.Component {
  state = {
    friends: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => {
        console.log(res);
        this.setState({ friends: res.data });
      })
      .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        {this.friends.map((item) => (
          <div key={item.id}>
            <p>{this.friend.name}</p>
            <p>{this.friend.age}</p>
            <p>{this.friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendList;
