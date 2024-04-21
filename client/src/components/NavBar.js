import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo1.png";
import logoMobile from "../images/logo2.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import Cart from "./Cart/Cart";
import styled from "styled-components";

const NavBar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);

  // Styling for the list
  const liStyle = {
    margin: "0 15px 0 0",
    textDecoration: "none",
    fontWeight: "bold"
  };

  const Logo = styled.img`
    width: auto;
    height: clamp(34px, calc(2.125rem + ((1vw - 3.9px) * 1.0458)), 50px);

    @media (max-width: 768px) {
      content: url(${(props) => props.mobileSrc});
      height: clamp(25px, calc(1.5625rem + ((1vw - 3px) * 7.4786)), 60px);
    }
  `;

  // Function to toggle the visibility of the cart
  const toggleCart = () => setIsCartVisibile(!isCartVisible);

  return (
    <>
      <nav>
        <div style={{ margin: "0px 0 0 0px" }}>
          <Logo src={logo} alt="Logo" mobileSrc={logoMobile} />
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
          <FaCartArrowDown className="navbar-buttons" onClick={toggleCart} />
          <Link to="/login">
          <IoMdLogIn className="navbar-buttons" />
          </Link>
        </div>
      </nav>
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default NavBar;
