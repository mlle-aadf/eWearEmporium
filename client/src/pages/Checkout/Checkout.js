import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GridLayout } from "./StyledComponents";
import ShippingInfo from "./ShippingInfo";
import PaymentMethod from "./PaymentMethod";
import CartDetails from "./CartDetails";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
  }, []);

  return (
    <>
      <NavBar />
      <GridLayout>
        <ShippingInfo />
        <PaymentMethod />
        <CartDetails />
      </GridLayout>
      <Footer />
    </>
  );
};

export default Checkout;
