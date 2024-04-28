import { createContext, useState } from "react";

//Create context for the guest info user to be able to access it in other page
export const GuestInfoContext = createContext();

const GuestInfoProvider = ({ children }) => {
  const [guestInfo, setGuestInfo] = useState({
    country: "",
    province: "",
    city: "",
    address: "",
    postcode: "",
    phone: "",
    fname: "",
    lname: "",
    email: "",
  });
  const [guestInfoCheck,setGuestInfoCheck] = useState(false);

  // Function to update guest info
  const updateGuestInfo = (newGuestInfo) => {
    setGuestInfo({ ...guestInfo, ...newGuestInfo });
    setGuestInfoCheck(true);
  };

  return (
    <GuestInfoContext.Provider value={{ guestInfo, updateGuestInfo, guestInfoCheck }}>
      {children}
    </GuestInfoContext.Provider>
  );
};

export default GuestInfoProvider;