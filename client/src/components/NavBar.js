import { useContext, useState } from "react";
import { FiLogOut, FiShoppingCart } from "react-icons/fi";
import logo from "../images/logo1.png";
import logoMobile from "../images/logo2.png";
// import { FaCartArrowDown } from "react-icons/fa";
// import { IoMdLogOut } from "react-icons/io";
import { LuUser } from "react-icons/lu";
// import { IoPersonSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { LoggedInUserContext } from "../pages/LoginSignUp/LoggedInUserContext";
import Cart from "./Cart/Cart";

// Navigation Bar for the page
const NavBar = () => {
  // Use state function for Cart visibility
  const [isCartVisible, setIsCartVisibile] = useState(false);
  //Set name of the user that logged in
  const { loggedInUser, logOut, isAuthenticated } =
    useContext(LoggedInUserContext);
  const name = loggedInUser && loggedInUser.user ? loggedInUser.user.fname : "";

  // Function to toggle the visibility of the cart
  const toggleCart = () => setIsCartVisibile(!isCartVisible);

  return (
    <>
      <nav>
        <NavLink to="/">
          <Logo src={logo} alt="Logo" mobileSrc={logoMobile} />
        </NavLink>
        <div>
          <TextNavLink to="/products">
            SHOP
          </TextNavLink>
          <TextNavLink to="/brands">
            BRANDS
          </TextNavLink>
          <TextNavLink to="/contact">
            CONTACT
          </TextNavLink>
          <TextNavLink to="/about">
            ABOUT
          </TextNavLink>
        </div>

        <IconsContainer>
          {/* Navbar icons that toggle cart on press */}
          <FiShoppingCart className="navbar-buttons" onClick={toggleCart} style={{ background: "transparent", height: "2rem" }}/>
          {/* Navbar icons for login if user is not logged in yet */}
          {!isAuthenticated && (
            <>
              <NavLink to="/login">
                <LuUser
                  style={{ background: "transparent", height: "2rem" }}
                  className="navbar-buttons"
                  title="Click to login or sign up!"
                />
              </NavLink>
            </>
          )}
          {/* Navbar icons for logout if user is logged in */}
          {isAuthenticated && (
            <>
              <p style={{ margin: "0 15px 0 0" }}>{name}</p>
              <button
                onClick={() => logOut()}
                style={{ background: "transparent" }}
                className="navbar-buttons"
              >
                <FiLogOut
                  className="navbar-buttons"
                  title="Click to logout!"
                  style={{border: "none", background: "transparent", height: "2rem" }}
                />
              </button>
            </>
          )}
        </IconsContainer>
      </nav>
      <Cart isVisible={isCartVisible}/>
    </>
  );
};

export default NavBar;

const Logo = styled.img`
  width: auto;
  height: clamp(24px, calc(1.5rem + ((1vw - 3.9px) * 1.0458)), 40px);
  padding-left: 1rem;

  @media (max-width: 768px) {
    content: url(${(props) => props.mobileSrc});
    height: clamp(15px, calc(1rem + ((1vw - 3.3px) * 6.8493)), 40px);
  }
`;

const IconsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`

const TextNavLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  margin: 0 20px;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  padding-bottom: 3px;

  &:hover {
    border-bottom: 2px solid #ffffff;
  }

  @media (max-width: 500px) {
    margin: 0 5px;
    font-size: 0.7rem;
  }
`