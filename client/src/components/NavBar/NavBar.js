import logo from "../../images/logo1.png";
import { FaCartArrowDown } from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";

const NavBar = () => {
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
  };

  return (
    <>
      <nav
  // CONSOLIDATED STYLING TO nav in INDEX.CSS, DELETE THIS COMMENT IF OK      
  
        // Styling for the navbar, uses clamp to change the heigh based on the width of the device.
        // style={{
        //   display: "flex",
        //   justifyContent: "space-between",
        //   alignItems: "center",
        //   position: "fixed",
        //   height: "clamp(39px, calc(2.4375rem + ((1vw - 3.2px) * 2.25)), 75px)",
        // }}
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
        <div>
          <FaCartArrowDown style={navBarButtons} />
          <IoMdLogIn style={navBarButtons} />
        </div>
      </nav>
    </>
  );
};

export default NavBar;
