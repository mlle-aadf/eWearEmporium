"use strict";

const express = require("express");
const morgan = require("morgan");

const PORT = process.env.PORT || 4000;

//require the handlers
const {
  getProductsHandler,
  getProductHandler,
  getBrandsHandler,
  getLoginHandler,
  newUserHandler,
  createOrderHandler,
  getItemHandler,
  deleteItemHandler,
} = require("./handlers");

const app = express();

app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Methods",
    "OPTIONS, HEAD, GET, PUT, POST, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(morgan("tiny"));
app.use(express.static("./server/assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", express.static(__dirname + "/"));

// PRODUCT ENDPOINTS___________________________________________________

//  getProductsHandler -> returns all items from db
app.get("/products", getProductsHandler);

//  getProductHandler -> returns specific item from db using _id
app.get("/products/:_id", getProductHandler);

// USER ENDPOINTS___________________________________________________

// newUserHandler -> posts a new user to db using id
app.post("/signUp", newUserHandler);
// logInHandler -> retrieves user from db logs user in
app.post("/login", getLoginHandler);

// ORDER ENDPOINTS___________________________________________________

// createOrderHandler -> creates order from cart and adds to db
app.post("/checkout", createOrderHandler);
// getItemHandler -> update the stock according to what the user added
app.patch("/products/:_id", getItemHandler);
// deleteItemHandler -> update the stock if the user delete the item from his cart
app.patch("/checkout", deleteItemHandler);

// getBrands -> retrieves all brands from db
app.get("/brands", getBrandsHandler);

//

// //_______________________________________________________________
// app.listen(PORT, () => console.info(`Listening on port ${PORT}`));

// Determine if the file is being executed directly (as in local development) or required by another module (as in Vercel)
if (require.main === module) {
  // The file is executed directly, start up the server
  app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
} else {
  // The file is required by another module (e.g., Vercel), export the app
  module.exports = app;
}
