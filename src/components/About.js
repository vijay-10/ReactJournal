import React from "react";
// import User from './User';
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is About component</h1>
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
