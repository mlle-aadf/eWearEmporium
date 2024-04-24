//To make it more clean, each handler have there own file in the folder handler. This file get all the handler. We will only have one line of code in the index to access all handlers.

const getProductsHandler = require("./handlers/getProductsHandler");
const getProductHandler = require("./handlers/getProductHandler");

const getFilteredHandler = require("./handlers/getProductsHandler");

const getBrandsHandler = require("./handlers/getBrandsHandler");
const getLoginHandler = require("./handlers/getLoginHandler");
const newUserHandler = require("./handlers/newUserHandler");
const createOrderHandler = require("./handlers/createOrderHandler");

module.exports = {getProductsHandler, getProductHandler, getBrandsHandler, getLoginHandler, newUserHandler, createOrderHandler, getFilteredHandler};