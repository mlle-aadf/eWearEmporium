import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import LoggedInUserProvider from "./pages/LoginSignUp/LoggedInUserContext";
import CartContentProvider from "./components/Cart/CartContentContext";
import GuestInfoProvider from "./pages/Checkout/GuestInfoContext";
import { OrderIdProvider } from "./pages/Checkout/OrderIdContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInUserProvider>
      <GuestInfoProvider>
        <CartContentProvider>
          <OrderIdProvider>
            <App />
          </OrderIdProvider>
        </CartContentProvider>
      </GuestInfoProvider>
    </LoggedInUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
