// import UserContext from "../utils/UserContext";
// import { useContext } from "react";

import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  console.log("Footer user : ", user);
  console.log("Footer setUser: ", setUser);
  return (
    <div>
      <h1>Footer</h1>
      <h2>
        Developed by {user.name} @ {user.email}
      </h2>
    </div>
  );
};
export default Footer;
