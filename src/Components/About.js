import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunctional from "./ProfileFunctional";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent : Constructor ");
  }

  async componentDidMount() {
    // console.log("Parent : Component Did Mount");
  }
  render() {
    // console.log("Parent : Render");
    return (
      <>
        <h1>About Page</h1>
        <p>This is about page</p>
        <ProfileFunctional name="Narayan" />
        {/* <ProfileClass name="First Child" /> */}
        {/* <ProfileClass name="Second Child" /> */}
      </>
    );
  }
}

export default About;
