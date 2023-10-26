import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className={`nav-item ${onlineStatus ? "online" : "offline"}`}>
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/grocery">Groceries</Link>
          </li>
          <li className="nav-item">Cart</li>
          <li
            className="nav-item login"
            onClick={() => {
              loginState === "Login"
                ? setLoginState("Logout")
                : setLoginState("Login");
            }}
          >
            {loginState}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
