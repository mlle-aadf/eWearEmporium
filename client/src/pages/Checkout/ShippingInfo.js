import {
  ShippingInfoContainer,
  Country,
  Header,
  FormGroup,
  Label,
  Input,
} from "./StyledComponents";
import { LoggedInUserContext } from "../LoginSignUp/LoggedInUserContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { GuestInfoContext } from "./GuestInfoContext";

const ShippingInfo = () => {
  const { loggedInUser, isAuthenticated } = useContext(LoggedInUserContext);
  // Info is stored in this state if the user is not logged in
  const { guestInfo, updateGuestInfo } = useContext(GuestInfoContext);

  // Handle changes in the form inputs and update guest info
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateGuestInfo({ [name]: value });
  };
  console.log("This is shipping info: ", guestInfo);

  return (
    <>
      <ShippingInfoContainer>
        <Header>Shipping Information</Header>

        <FormGroup>
          <Label htmlFor="country">Country:</Label>
          <Country
            name="country"
            id="country"
            value={isAuthenticated ? loggedInUser.user.country : guestInfo.country}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="province-state">Province / State:</Label>
          <Input
            type="text"
            name="province"
            id="province-state"
            value={isAuthenticated ? loggedInUser.user.province : guestInfo.province}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="city">City:</Label>
          <Input
            type="text"
            name="city"
            id="city"
            value={isAuthenticated ? loggedInUser.user.city : guestInfo.city}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="address">Address:</Label>
          <Input
            type="text"
            name="address"
            id="address"
            value={isAuthenticated ? loggedInUser.user.address : guestInfo.address}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="zip">Zip/Postal Code:</Label>
          <Input
            type="text"
            name="postcode"
            id="zip"
            value={isAuthenticated ? loggedInUser.user.postcode : guestInfo.postcode}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Phone Number:</Label>
          <Input
            type="tel"
            name="phone"
            id="phone"
            value={isAuthenticated ? loggedInUser.user.phone : guestInfo.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="fname">First Name:</Label>
          <Input
            type="text"
            name="fname"
            id="fname"
            value={isAuthenticated ? loggedInUser.user.fname : guestInfo.fname}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="lname">Last Name:</Label>
          <Input
            type="text"
            name="lname"
            id="lname"
            value={isAuthenticated ? loggedInUser.user.lname : guestInfo.lname}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={isAuthenticated ? loggedInUser.user.email : guestInfo.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
      </ShippingInfoContainer>
    </>
  );
};

export default ShippingInfo;

