import {
  ShippingInfoContainer,
  Country,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";
import styled from "styled-components";
import { LoggedInUserContext } from "../LoginSignUp/LoggedInUserContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ShippingInfo = () => {
  const { loggedInUser, isAuthenticated } = useContext(LoggedInUserContext);

  return (
    <>
      {!isAuthenticated ? (
        <SignUpLogin to='/login'>Sign up or login before proceeding to checkout</SignUpLogin>
      ) : (
        <ShippingInfoContainer>
          <Header>Shipping Information</Header>

          <FormGroup>
            <Label htmlFor="country">Country:</Label>
            <Country name="country" id="country" value={loggedInUser.user.country} required></Country>
          </FormGroup>

          <FormGroup>
            <Label htmlFor="province-state">Province / State:</Label>
            <Input
              type="text"
              name="province-state"
              id="province-state"
              value={loggedInUser.user.province}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="city">City:</Label>
            <Input
              type="text"
              name="city"
              id="city"
              value={loggedInUser.user.city}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="address">Address:</Label>
            <Input
              type="text"
              name="address"
              id="address"
              value={loggedInUser.user.address}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="zip">Zip/Postal Code:</Label>
            <Input
              type="text"
              name="zip"
              id="zip"
              value={loggedInUser.user.postcode}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="phone">Phone Number:</Label>
            <Input
              type="tel"
              name="phone"
              id="phone"
              value={loggedInUser.user.phone}
              required
            /></FormGroup>


          <FormGroup>
            <Label htmlFor="fname">First Name:</Label>
            <Input
              type="text"
              name="fname"
              id="fname"
              value={loggedInUser.user.fname}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="lname">Last Name:</Label>
            <Input
              type="text"
              name="lname"
              id="lname"
              value={loggedInUser.user.lname}
              required
            /></FormGroup>

          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input
              type="email"
              name="email"
              id="email"
              value={loggedInUser.user.email}
              required
            /></FormGroup>
        </ShippingInfoContainer>
      )}
    </>
  );
};
export default ShippingInfo;

const SignUpLogin = styled(Link)`
  border-radius: 4px;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  transition: color 0.3s ease, background-color 0.3s ease;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
  &:visited {
    color: black;
  }
`;

