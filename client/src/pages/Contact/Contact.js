import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const userFirstName = (event) => {
    setFirstName(event.target.value);
  };

  const userLastName = (event) => {
    setLastName(event.target.value);
  };

  const userEmail = (event) => {
    setEmail(event.target.value);
  };

  const userMessage = (event) => {
    setMessage(event.target.value);
  };

  const blankInput = !firstName || !lastName || !email || !message;

  return (
    <>
      <NavBar />
      <Main>
        <Div>
        <Form>
          <H1>Let's Get In Touch!</H1>
          <br />
          <Subtext>
            For any questions or inquiries, please feel free to leave a message.{" "}
            <br /> Thank you!
          </Subtext>
          <br />
          <br />
          <Label>Your First Name: </Label>
          <br />
          <input
            className="input-field"
            type="text"
            value={firstName}
            onChange={userFirstName}
            placeholder="Your first name"
          ></input>
          <br />
          <br />
          <Label>Your Last Name: </Label>
          <br />
          <input
            className="input-field"
            type="text"
            value={lastName}
            onChange={userLastName}
            placeholder="Your last name"
          ></input>
          <br />
          <br />
          <Label>Your Email: </Label>
          <br />
          <input
            className="input-field"
            type="text"
            value={email}
            onChange={userEmail}
            placeholder="Your email"
          ></input>
          <br />
          <br />
          <Label>Your Message: </Label>
          <br />
          <input
            className="msg-field"
            type="text"
            value={message}
            onChange={userMessage}
            placeholder="Your message"
          ></input>
          <br />
          <br />
          <Link
            to="/contact-success"
            style={{ color: "black", textDecoration: "none" }}
          >
            <button className="contact-btn" type="submit" disabled={blankInput}>
              Submit
            </button>
          </Link>
          <br />
        </Form>
        </Div>
      </Main>
      <Footer />
    </>
  );
};

const Main = styled.main`
  margin: 150px 0 100px 0;
`;

const Form = styled.form`
  text-align: center;
`;

const H1 = styled.h1`
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  font-size: xx-large;
`;

const Subtext = styled.h3`
  text-align: center;
  font-weight: bold;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Div = styled.div`
  background-color: white;
  outline-style: solid;
  outline-color: black;
  border-radius: 10px;
  padding: 75px;
  margin: 0 50px 0 50px;
`;

export default Contact;
