import React from "react";
import Shimmer from "./Shimmer";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
    };
  }

  async componentDidMount() {
    const data = await fetch("  https://api.github.com/users/vijay-10");
    const json = await data.json();
    this.setState({ userInfo: json });
    console.log(json);
  }

  render() {
    // this is the way to render when you want to give good UX using shimmer:
    // if (!this.state.userInfo) return <Shimmer />; // handle shimmer before destructuring properties from the state
    // const { name, location, twitter_username } = this.state.userInfo;

    // but this is when you want to keep things simple, the details won't be shown (white page will be visbible)
    // until the api data is loaded inside the state variable
    return (
      <div className="user-card">
        {this.state.userInfo && (
          <>
            <img
              src={this.state.userInfo.avatar_url}
              style={{ width: "200px" }}
            ></img>
            <div className="user-content">
              <h3>Name: {this.state.userInfo.name}</h3>
              <h3>Location: {this.state.userInfo.location}</h3>
              <h3>Socials: @{this.state.userInfo.twitter_username}</h3>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default UserClass;
