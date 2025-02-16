import { useState } from "react";
import styled from "styled-components";
import miniLogo from "../images/logo2.png";

// The footer of the page
const Footer = () => {
  // State for managing email subscription
  const [subEmail, setSubEmail] = useState("");
  const [isSubbed, setIsSubbed] = useState(false);

  const userSubEmail = (event) => {
    setSubEmail(event.target.value);
  };

  const noInput = !subEmail;

  return (
    <FooterContainer>
      <FooterPart>
        <Column textAlign="start">
          <Title>Stay Connected</Title>
          <Description>
            Subscribe to get all our latest updates, which include promotional
            offers and more!
          </Description>
          {!isSubbed ? (
            <SubscriptionForm>
              <label>
                <Input
                  type="text"
                  placeholder="Your email address"
                  onChange={userSubEmail}
                />
              </label>
              <Button
                type="submit"
                disabled={noInput}
                onClick={() => setIsSubbed(true)}
              >
                Subscribe
              </Button>
            </SubscriptionForm>
          ) : (
            <ConfirmationMsg>
              Thanks for subscribing! You will receive an email confirmation
              at {subEmail}.
            </ConfirmationMsg>
          )}
        </Column>
        <Column>
          <Title>Navigate</Title>
          <NavList>
            <NavItem><a href="/about">About Us</a></NavItem>
            <NavItem><a href="/contact">Contact Us</a></NavItem>
            <NavItem><a href="/about#faq">Frequently Asked Questions</a></NavItem>
            <NavItem><a href="/about#terms">Terms and Conditions</a></NavItem>
          </NavList>
        </Column>
      </FooterPart>
      <hr style={{ border: "0.5px solid white", margin: "10px 0 5px 0"}} />
      <BrandInfo>
        <BrandLogo src={miniLogo} alt="Small brand logo" />
        <BrandText>A local brand based in Montreal, QC</BrandText>
      </BrandInfo>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  padding: 20px 40px;
  background-color: var(--nav-bar-color);
  text-align: center;
  height: fit-content;
  position: relative;
  bottom: 0;
`;

const FooterPart = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Column = styled.div`
  flex: 1;
  text-align: ${(props) => props.textAlign || "end"};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  `;

const Description = styled.p`
  font-size: 0.85rem;
  margin: 10px 0 15px 0;
`;

const SubscriptionForm = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 8px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ConfirmationMsg = styled.p`
  font-weight: bold;
  font-size: 0.85rem;
  margin: 0 60px;
  display: inline-block;
  vertical-align: middle;
  `;

const NavList = styled.ul`
  font-size: 0.85rem;
  list-style: none;
  padding: 0;
`;

const NavItem = styled.a`
  display: block;
  margin: 10px 0;
  
  a {
    text-decoration: none;
    color: black;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const BrandInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

const BrandLogo = styled.img`
  width: 50px;
  height: auto;
  `;

const BrandText = styled.h2`
  margin-left: 50px;
  font-size: 0.75rem;
  font-style: italic;
`;

export default Footer;
