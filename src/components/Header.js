import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [loginState, setLoginState] = useState('Login')
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li className="nav-item">Home</li>
          <li className="nav-item">About Us</li>
          <li className="nav-item">Contact Us</li>
          <li className="nav-item">Cart</li>
          <li className="nav-item login" onClick={() => {
            loginState === 'Login'? setLoginState('Logout') : setLoginState('Login');
          }}>{loginState}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
