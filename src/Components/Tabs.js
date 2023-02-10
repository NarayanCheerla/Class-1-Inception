import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Tabs = () => {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="list">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        {logedIn ? (
          <li>
            <button onClick={() => setLogedIn(false)}>Logout</button>
          </li>
        ) : (
          <li>
            <button onClick={() => setLogedIn(true)}>Login</button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Tabs;
