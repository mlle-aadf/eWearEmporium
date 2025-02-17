'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const PORT = process.env.PORT || 4000;

//require the handlers
const { getProductsHandler, getProductHandler, getBrandsHandler, getLoginHandler, newUserHandler, createOrderHandler, getItemHandler, deleteItemHandler} = require("./handlers");



express()
  // .use(function (req, res, next) {
  //   res.header(
  //     'Access-Control-Allow-Methods',
  //     'OPTIONS, HEAD, GET, PUT, POST, DELETE'
  //   );
  //   res.header(
  //     'Access-Control-Allow-Headers',
  //     'Origin, X-Requested-With, Content-Type, Accept'
  //   );
  //   next();
  // })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.static(path.resolve(__dirname, '../client/build')))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  // .use('/', express.static(__dirname + '/'))
  
  .get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  })
  .get("/brands", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  })

  // PRODUCT ENDPOINTS___________________________________________________
  
  //  getProductsHandler -> returns all items from db
  .get('/api/products', getProductsHandler)
  
  //  getProductHandler -> returns specific item from db using _id
  .get("/api/products/:_id", getProductHandler)
  
  
  
  
  // USER ENDPOINTS___________________________________________________
  
  // newUserHandler -> posts a new user to db using id
  .post("/api/signUp", newUserHandler)
  // logInHandler -> retrieves user from db logs user in
  .post("/api/login", getLoginHandler)
  
  
  // ORDER ENDPOINTS___________________________________________________
  
  // createOrderHandler -> creates order from cart and adds to db
  .post("/api/checkout", createOrderHandler)
  // getItemHandler -> update the stock according to what the user added
  .patch("/api/products/:_id", getItemHandler)
  // deleteItemHandler -> update the stock if the user delete the item from his cart
  .patch("/api/checkout", deleteItemHandler)
  
  
  
  // getBrands -> retrieves all brands from db
  .get("/api/brands", getBrandsHandler)
  
  

  //_______________________________________________________________
  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
  