// Set up connection to the mongo database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'e-wear_emporium';

// Send the info from the new user to the data base in the collection users

const newUserHandler = async(req, res) => {

};

module.exports = newUserHandler;