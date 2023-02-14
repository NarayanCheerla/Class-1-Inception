import { Link } from "react-router-dom";
import Tabs from "./Tabs";
import logo from "../assets/img/food-villa.png";

const Header = () => {
  return (
    <div className="flex justify-between bg-yellow-50 shadow sm:bg-blue-50 md:bg-pink-50">
      <Link to="/">
        <img
          data-testid="logo"
          className="h-24 w-24 p-2"
          alt="logo"
          src={logo}
        />
      </Link>
      <Tabs />
    </div>
  );
};

export default Header;
