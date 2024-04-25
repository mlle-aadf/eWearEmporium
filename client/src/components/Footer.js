import { useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Footer = () => {
  //The input field should be aligned and centered horizontally with the btn.

  //The "Navigate" section should be viewed as a column, aligned vertically.

  //In the section following the <hr/> tag, the content should be aligned horizontally and spaced out.

  const [subEmail, setSubEmail] = useState("");
  const [isSubbed, setIsSubbed] = useState(false);

  const userSubEmail = (event) => {
    setSubEmail(event.target.value);
  };

  const noInput = !subEmail;

  return (
    <>
      <footer>
        <div className="footer-pt1">
          <div className="colOne">
            <h2
              style={{
                textDecoration: "underline",
                padding: "0 0 0 25px",
                margin: "20px 20px 0 20px",
                fontWeight: "bold",
              }}
            >
              Stay Connected
            </h2>
            <br />
            <p>
              Subscribe to get all our latest updates, which include promotional
              offers and more!
            </p>
            {!isSubbed ? (
              <div>
                <label>
                  <input
                    type="text"
                    placeholder="Your email address"
                    className="sub-email"
                    onChange={userSubEmail}
                  />
                </label>
                <button
                  type="submit"
                  className="sub-btn"
                  disabled={noInput}
                  onClick={() => setIsSubbed(true)}
                >
                  Subscribe
                </button>
              </div>
            ) : (
              <>
                <br />
                <ConfirmationMsg>
                  Thank you for subscribing! You will receive an email
                  confirmation to {subEmail}.
                </ConfirmationMsg>
              </>
            )}
          </div>
          <div className="colTwo">
            <h2
              style={{
                textDecoration: "underline",
                padding: "0 0 0 10px",
                margin: "50px 0 20px 0",
                fontWeight: "bold",
              }}
            >
              Navigate
            </h2>
            <ul>
              <Link to="/about" className="footer-link">
                <li>About Us</li>
              </Link>
              <Link to="/contact" className="footer-link">
                <li>Contact Us</li>
              </Link>
              <Link to="/about" className="footer-link">
                <li>Frequently Asked Questions</li>
              </Link>
              <Link to="/about" className="footer-link">
                <li>Terms and Conditions</li>
              </Link>
            </ul>
          </div>
          <br />
          <br />
        </div>
        <hr style={{ width: "75%", margin: "auto" }} />
        <br />
        <div className="brand-info">
          <h1 className="brand-text1">
            E-WEAR <br /> EMPORIUM
          </h1>
          <h2 className="brand-text2">A local brand based in Montreal, QC</h2>
        </div>
        <br />
      </footer>
    </>
  );
};

const ConfirmationMsg = styled.p`
  font-weight: bold;
  margin: 0 60px 0 60px;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

export default Footer;
