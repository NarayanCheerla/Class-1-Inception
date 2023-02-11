import React, { useState, useEffect } from "react";

const ProfileFunctional = (props) => {
  const [count1, setCount1] = useState(10);
  const [count2, setCount2] = useState(20);
  const [user, setUser] = useState({});

  async function fetchData() {
    console.log("Functional Child : Component Did Mount", props.name);
    const data = await fetch("https://api.github.com/users/narayancheerla");
    const json = await data.json();
    console.log(json);
    setUser(json);
  }

  useEffect(() => {
    fetchData();
    const interval = setInterval(() => {
      console.log("Namasthe from Functioanl");
    }, 1000);
    return () => {
      clearInterval(interval);
      console.log("Functional Child : Component Will Unmount");
    };
  }, []);
  return (
    <div className="wrapper">
      <h2>Profile Functional Component</h2>
      <h3>Name : {user?.name}</h3>
      <h3>Location : {user?.location}</h3>
      <img src={user?.avatar_url} />
      <h4>Count One : {count1}</h4>
      <h4>Count Two: {count2}</h4>
      <button
        onClick={() => {
          setCount1(1);
          setCount2(2);
        }}
      >
        Update Counts
      </button>
    </div>
  );
};

export default ProfileFunctional;
