// Set up connection to the mongo database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'e-wear_emporium';

// Search in the data base the users to be able log him in

const getLoginHandler = async(req, res) => {

};

module.exports = getLoginHandler;