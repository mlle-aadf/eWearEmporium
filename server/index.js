'use strict';

const express = require('express');
const morgan = require('morgan');

const PORT = 4000;

//require the handlers
const {getProductsHandler, getProductHandler, getBrandsHandler, getLoginHandler} = require("./handlers");

express()
  .use(function(req, res, next) {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, HEAD, GET, PUT, POST, DELETE'
    );
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('tiny'))
  .use(express.static('./server/assets'))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use('/', express.static(__dirname + '/'))

  // REST endpoints?
  .get('/bacon', (req, res) => res.status(200).json('🥓'))


// PRODUCT ENDPOINTS___________________________________________________

//  getProductsHandler -> returns all items from db
  .get('/products', getProductsHandler)
//  getProductHandler -> returns specific item from db using _id
  .get("/products/:_id", getProductHandler) 



// USER ENDPOINTS___________________________________________________

// newUserHandler -> posts a new user to db using id
 // .post("/login/:userId", newUserHandler)
// logInHandler -> retrieves user from db logs user in
 // .get("/login/:userId", getloginHandler)


// ORDER ENDPOINTS___________________________________________________

// createOrderHandler -> creates order from cart and adds to db
//.post("/checkout", createOrderHandler)
// updateOrderHandler -> updates order in db
//.patch("/checkout/:orderId", updateOrderHandler)
// STRETCH deleteOrderHandler -> deletes order in db
//.delete("/checkout/:orderId", deleteOrderHandler)



// getBrands -> retrieves all brands from db
.get("/brands", getBrandsHandler)

// 







//_______________________________________________________________
.listen(PORT, () => console.info(`Listening on port ${PORT}`));
