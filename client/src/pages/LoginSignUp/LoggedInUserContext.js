import { createContext, useState } from "react";

// Stores and provides logged in user info.
export const LoggedInUserContext = createContext();

// Provides logged in user state
const LoggedInUserProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState({
    _id: "",
    fname: "",
    lname: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    province: "",
    postcode: "",
    country: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logIn = (userData) => {
    setLoggedInUser(userData);
    setIsAuthenticated(true);
  };

  const logOut = () => {
    setLoggedInUser({
      _id: "",
      fname: "",
      lname: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      province: "",
      postcode: "",
      country: "",
    });
    setIsAuthenticated(false);
  };

  return (
    <LoggedInUserContext.Provider
      value={{ loggedInUser, isAuthenticated, logIn, logOut }}
    >
      {children}
    </LoggedInUserContext.Provider>
  );
};

export default LoggedInUserProvider;
