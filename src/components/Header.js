import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Header = () => {
  const [loginState, setLoginState] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext)

  return (
    <div className="flex justify-between mb-4 pb-4 pr-6 shadow-md rounded-xl">
      <Link to="/">
        <div className="relative flex flex-col items-center">
          <img className="w-40 aspect-sqaure" alt="Logo" src={LOGO_URL} />
          <h1 className="absolute bottom-0 font-bold text-orange-400 text-xl italic tracking-widest">
            QuickBite
          </h1>
        </div>
      </Link>
      <div className="flex items-center mt-4">
        <ul className="flex text-lg gap-8 font-medium">
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/about">About Us</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="nav-item bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md cursor-pointer">
            Cart
          </li>
          <li
            className="nav-item login bg-gray-100 hover:bg-orange-400 hover:text-white px-2 rounded-md shadow-md cursor-pointer"
            onClick={() => {
              loginState === "Login"
                ? setLoginState("Logout")
                : setLoginState("Login");
            }}
          >
            {`${loginState} ${onlineStatus ? "🟢" : "🔴"}`}
          </li>
          <li className="nav-item bg-gray-100 px-2 rounded-md shadow-md">
            User: {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
