'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 4000;

//require the handlers
const { getProductsHandler, getProductHandler, getBrandsHandler, getLoginHandler, newUserHandler, createOrderHandler, getItemHandler, deleteItemHandler} = require("./handlers");



express()
  .use(cors())
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // PRODUCT ENDPOINTS___________________________________________________

  //  getProductsHandler -> returns all items from db
  .get('/products', getProductsHandler)

  //  getProductHandler -> returns specific item from db using _id
  .get("/products/:_id", getProductHandler)
  



  // USER ENDPOINTS___________________________________________________

  // newUserHandler -> posts a new user to db using id
  .post("/signUp", newUserHandler)
  // logInHandler -> retrieves user from db logs user in
  .post("/login", getLoginHandler)


  // ORDER ENDPOINTS___________________________________________________

  // createOrderHandler -> creates order from cart and adds to db
  .post("/checkout", createOrderHandler)
  // getItemHandler -> update the stock according to what the user added
  .patch("/products/:_id", getItemHandler)
  // deleteItemHandler -> update the stock if the user delete the item from his cart
  .patch("/checkout", deleteItemHandler)



  // getBrands -> retrieves all brands from db
  .get("/brands", getBrandsHandler)


  //_______________________________________________________________
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
