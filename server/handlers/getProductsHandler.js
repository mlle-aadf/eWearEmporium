// Set up connection to the mongo database
const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'e-wear_emporium';

// Returns an array of all products
const getProductsHandlers = async (req, res) => {
    const client = new MongoClient(MONGO_URI);

    try {
        await client.connect();
        const db = client.db(dbName);
        const products = await db.collection("items").find({}).toArray();

        if (products.length === 0) {
            res.status(404).send("No products found");
        } else {
            res.status(200).json({
                status: 200,
                data: products
            });
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ status: 500, message: error.message });
    } finally {
        await client.close();
    }
};

module.exports = getProductsHandlers;

