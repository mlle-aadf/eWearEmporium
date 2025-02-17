import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

//This page contains a form for users to write their questions/comments
const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);

  //Created states for the values below to track the user's input when filling out the form
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

  //If any of the fields are blank, disable the "Submit" button
  const blankInput = !firstName || !lastName || !email || !message;

  return (
    <>
      <NavBar />
      <Container>
        <FormContainer>
          <Title>Contact Us</Title>
          <Subtext>
            Got questions or feedback? We’re just a message away! Our customer
            support team is here to help with anything you need.
          </Subtext>
          <Form>
            <FormGroup>
              <Label>Your First Name:</Label>
              <Input
                type="text"
                value={firstName}
                onChange={userFirstName}
                placeholder="Your first name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Your Last Name:</Label>
              <Input
                type="text"
                value={lastName}
                onChange={userLastName}
                placeholder="Your last name"
              />
            </FormGroup>
            <FormGroup>
              <Label>Your Email:</Label>
              <Input
                type="email"
                value={email}
                onChange={userEmail}
                placeholder="Your email"
              />
            </FormGroup>
            <FormGroup>
              <Label>Your Message:</Label>
              <MessageInput
                value={message}
                onChange={userMessage}
                placeholder="Your message"
              />
            </FormGroup>
            <Link
              to="/contact-success"
              style={{ color: "black", textDecoration: "none" }}
            >
              <Button type="submit" disabled={blankInput}>
                Submit
              </Button>
            </Link>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;
  margin-top: 4vh;

  @media (max-width: 500px) {
    margin-top: 0;
  }
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Subtext = styled.p`
  text-align: center;
  margin-bottom: 30px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const MessageInput = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
  height: 100px;
`;

const Button = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export default Contact;
