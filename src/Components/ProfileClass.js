import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 10,
      count2: 20,
      userInfo: {
        name: "Dummy name",
        location: "Dummy location",
      },
    };
    console.log("Child : Constructor", this.props.name);
  }

  async componentDidMount() {
    this.inteval = setInterval(function () {
      console.log("NAMASTHE !!");
    }, 2000);
    console.log("Child : Component Did Mount", this.props.name);
    const data = await fetch("https://api.github.com/users/narayancheerla");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Child : Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.inteval);
    console.log("Child : Component Will Unmount");
  }

  render() {
    console.log("Child : Render", this.props.name);
    return (
      <div className="wrapper">
        <h2>Profile Class component</h2>
        <h3>Name : {this.state.userInfo.name}</h3>
        <h3>Location : {this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} />
        {/* <h4>Count One: {this.state.count1}</h4>
        <h4>Count Two: {this.state.count2}</h4>
        <button
          onClick={() => {
            this.setState({ count1: 1, count2: 2 });
            // this.setState({ count2: 2 });
          }}
        >
          Update Counts
        </button> */}
      </div>
    );
  }
}

export default ProfileClass;
