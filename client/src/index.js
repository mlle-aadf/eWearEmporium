import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import LoggedInUserProvider from "./pages/LoginSignUp/LoggedInUserContext";
import CartContentProvider from "./components/Cart/CartContentContext";
ReactDOM.render(
  <React.StrictMode>
    <LoggedInUserProvider>
      <CartContentProvider>
        <App />
      </CartContentProvider>
    </LoggedInUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
