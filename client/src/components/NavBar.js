import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo1.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Cart from "./Cart/Cart";

const NavBar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);

  // Styling for the list
  const liStyle = {
    margin: "0 15px 0 0",
    textDecoration: "none",
    fontWeight: "bold"
  };

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
            }}
          />
          </Link>
        </div>
        <div>
          <ul
            // styling for the navbar text
            style={{
              fontWeight: "700",
              textTransform: "uppercase",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <li style={liStyle}>shop all</li>
            <Link to="/products">
            <li style={liStyle}>products</li>
            </Link>
            <Link to="/contact">
            <li style={liStyle}>contact</li>
            </Link>
            <Link to="/about">
            <li style={liStyle}>about</li>
            </Link>
          </ul>
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
