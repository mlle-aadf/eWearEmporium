import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/e-wear_long.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Cart from "./Cart/Cart";

const NavBar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);

  // Styling for login and cart buttons
  const navBarButtons = {
    width: "50px",
    height: "50px",
    margin: "0 15px 0 0",
    cursor: "pointer",
  };

  // Function to toggle the visibility of the cart
  const toggleCart = () => setIsCartVisibile(!isCartVisible);

  return (
    <>
      <nav>
        <div style={{ margin: "0px 0 0 0px" }}>
          <Link to="/">
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "auto",
              height:
                "clamp(39px, calc(2.4375rem + ((1vw - 3.2px) * 2.25)), 75px)", // Responsive styling for the logo based on device
              marginLeft: "5px"
            }}
          />
          </Link>
        </div>
    
        <div className="navText">
            <Link to="/products" className="navLink">shop all</Link>
            <Link to="/brands" className="navLink">brands</Link>
            <Link to="/contact" className="navLink">contact</Link>
            <Link to="/about" className="navLink">about</Link>
        </div>
    
        <div>
          <FaCartArrowDown style={navBarButtons} onClick={toggleCart} />
          <Link to="/login">
          <IoMdLogIn style={navBarButtons} />
          </Link>
        </div>
      </nav>
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default NavBar;
