import { useState } from "react";

const Navbar = () => {
  const [logedIn, setLogedIn] = useState(false);
  return (
    <div className="list">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
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

export default Navbar;
