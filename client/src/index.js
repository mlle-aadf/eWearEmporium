import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import LoggedInUserProvider from "./pages/LoginSignUp/LoggedInUserContext";

ReactDOM.render(
  <React.StrictMode>
    <LoggedInUserProvider>
      <App />
    </LoggedInUserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
