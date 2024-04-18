// Set up connection to the mongo database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const bcrypt = require('bcrypt');
const dbName = 'e-wear_emporium';
const { v4: uuidv4 } = require("uuid");

// Send the info from the new user to the data base in the collection users
//requiredField to be sure the user field up the sign up forms correctly
//Using filter to go through each of them and check if there are not undefined or empty

const newUserHandler = async (req, res) => {

    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        console.log("connected");
        const db = client.db(dbName);
        const { fname, lname, phone, email, address, city, province, postcode, country, password, confirmPassword } = req.body;
        const requiredFields = ["fname", "lname", "phone", "email", "address", "city", "province", "postcode", "country", "password", "confirmPassword"];
        const missingFields = requiredFields.filter(field => req.body[field] === undefined || req.body[field] === '');

        //checking if all the required fields are completed if not then send a 400
        if (missingFields.length > 0) {
            return res.status(400).json({
                status: 400,
                message: "Missing-Data"
            })
        }

        //checking if the password and confirmPassword does not match
        if (password !== confirmPassword) {
            return res.status(400).json({
                status: 400,
                message: "Passwords do not match",
            });
        }

        //checking if the new user doesn't already have an account created
        const notNewUser = await db
            .collection('users')
            .findOne({ email: req.body.email });
        if (notNewUser) {
            return res.status(404).json({
                status: 404,
                message: `Error, there is already an account with this email`,
            });
        }

        //Hashing the password for security
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = {
            _id: uuidv4(),
            fname,
            lname,
            phone,
            email,
            address,
            city,
            province,
            postcode,
            country,
            password: hashedPassword
        }

        const insertNewUser = await db
            .collection('users')
            .insertOne(newUser);
        if (!insertNewUser || !insertNewUser.insertedId) {
            res.status(500).json({
                status: 500,
                message: "Mongo error while creating new user",
            });
        } else {
            res.status(201).json({
                status: 201,
                _id: insertNewUser.insertedId,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: 500,
            message: error.message,
        });
    } finally {
        await client.close();
    }
}


module.exports = newUserHandler;
