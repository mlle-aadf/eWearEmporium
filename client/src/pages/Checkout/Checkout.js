import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { GridLayout } from "./StyledComponents";
import ShippingInfo from "./ShippingInfo";
import PaymentMethod from "./PaymentMethod";
import OrderSummary from "./OrderSummary";


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
        <OrderSummary/>
      </GridLayout>
      <Footer />
    </>
  );
};

export default Checkout;
