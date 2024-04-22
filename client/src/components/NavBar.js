import { useState, useEffect, useContext } from "react";
import logo from "../images/logo1.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import { IoMdLogOut } from "react-icons/io";
import Cart from "./Cart/Cart";
import { LoggedInUserContext } from "../pages/LoginSignUp/LoggedInUserContext";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);
  //Set name of the user that logged in
  const { loggedInUser, logOut, isAuthenticated } = useContext(LoggedInUserContext);
  const name = loggedInUser && loggedInUser.user ? loggedInUser.user.fname : "";

  // Styling for the list
  const liStyle = {
    margin: "0 15px 0 0",
    textDecoration: "underline",
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
      <nav
        // Styling for the navbar, uses clamp to change the heigh based on the width of the device.
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          height: "clamp(39px, calc(2.4375rem + ((1vw - 3.2px) * 2.25)), 75px)",
        }}
      >
        <div style={{ margin: "0px 0 0 0px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "auto",
              height:
                "clamp(39px, calc(2.4375rem + ((1vw - 3.2px) * 2.25)), 75px)", // Responsive styling for the logo based on device
            }}
          />
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
            <li style={liStyle}>categories</li>
            <li style={liStyle}>contact</li>
            <li style={liStyle}>faq</li>
          </ul>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaCartArrowDown style={navBarButtons} onClick={toggleCart} />
          {!isAuthenticated &&
            <>
              <NavLink to="/login">
                <IoMdLogIn
                  style={{
                    ...navBarButtons,
                    background: "none",
                  }}
                />
              </NavLink>
            </>
          }
          {isAuthenticated &&
            <>
              <p style={{ margin: "0 15px 0 0" }}>{name}</p>
              <button onClick={() => logOut()} style={{
                ...navBarButtons,
                background: "transparent",
              }} >
                <IoMdLogOut style={navBarButtons} />
              </button>
            </>
          }

        </div>
      </nav>
      <Cart isVisible={isCartVisible} />
    </>
  );
};

export default NavBar;
