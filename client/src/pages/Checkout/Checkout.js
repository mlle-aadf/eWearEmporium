import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import styled from "styled-components";
import BillingInfo from "./BillingInfo";
import PaymentMethod from "./PaymentMethod";
import CartDetails from "./CartDetails";
import PriceTotal from "./PriceTotal";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
  }, []);

  return (
    <>
      <NavBar />
      <GridLayout>
        <BillingInfo />
        <PaymentMethod />
        <CartDetails />
        <PriceTotal />
      </GridLayout>
      <Footer />
    </>
  );
};

export default Checkout;

const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(60%, 1fr);
  grid-template-rows: auto auto auto;
  gap: 20px;
  grid-template-areas:
    "info price"
    "method ."
    "cart .";
  margin: 200px 100px;
`;