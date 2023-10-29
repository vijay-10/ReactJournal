import React from "react";
// import User from './User';
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is About component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <p>
          This is a food ordering project app using live data fetched from
          swiggy api
        </p>
        <UserClass name="First" />
      </div>
    );
  }
}

export default About;
