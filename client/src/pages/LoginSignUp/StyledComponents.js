import styled from "styled-components";

const Form = styled.form`
  text-align: center;
  border-top: 4px solid var(--nav-bar-color);
  border-bottom: 4px solid var(--nav-bar-color);
  height: fit-content;
  width: 35vw;
  padding: 5px 20px 10px 20px;

  @media (max-width: 500px) {
    padding: 20px;
    margin: 0 55px;
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 15px 0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.label`
  font-weight: bold;

  @media (max-width: 500px) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 5px;
  margin-left: 20px;
  border: 1px solid var(--nav-bar-color);
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 5px 20px;
  border: none;
  border-radius: 3px;
  background-color: #007bff;
  color: white;
  margin-left: 50px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const Message = styled.p`
  margin-top: 20px;
  color: red;
`;

export { Button, Description, Form, FormGroup, Input, Label, Message, Title };

