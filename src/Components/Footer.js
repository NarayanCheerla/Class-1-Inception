import { useContext } from "react";
import UserContext from "../utils/userContext";

const Footer = () => {
  const { user, setUser } = useContext(UserContext);
  console.log("Footer user : ", user);
  console.log("Footer setUser: ", setUser);
  return (
    <div className="m-5 p-2">
      <h2>
        This is developed by {user.name} @ {user.email}
      </h2>
    </div>
  );
};
export default Footer;
