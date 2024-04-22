const { MongoClient } = require('mongodb');
require('dotenv').config();
const { MONGO_URI } = process.env;
const dbName = 'e-wear_emporium';


const getFilteredHandler = async (req, res) => {
    
    // const {sort, filters} = req.query
    
    // sort is "AZ", "ZA", "priceLH" or "priceHL"
    // filters = array of checked categories (from user input), 
    // ["Fitness", "Medical", "Lifestyle", "Entertainment", "Industrial", "Pets and Animals", "Gaming"]
    
    let sortFilters = ["Fitness", "Medical", "Lifestyle", "Entertainment", "Industrial", "Pets and Animals", "Gaming"]
    let sortBy = {name : 1}
    
    const client = new MongoClient(MONGO_URI);
    
    try {
        await client.connect();
        const db = client.db(dbName);
        
        // const sort = AZ
        // let sortBy
        
        // switch (sort) {
        //         case AZ :
        //             sortBy = {name : 1}
        //             break;
        //         case ZA :
        //             sortBy = {name : -1}
        //             break;
        //         case priceLH :
        //             sortBy = {price : 1}
        //             break;
        //         case priceHL :
        //             sortBy = {price : -1}
        //             break;
        //     }

        const products = await db.collection("items").aggregate(
            [
                // replace FILTERS with array
                {$match: {category : { $in : sortFilters }}},
                // replace sortBy
                {$sort : sortBy},
            ], {
                collation: {
                    locale: "en_US",
                    numericOrdering: true
                }
        }).toArray()


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

module.exports = getFilteredHandler;
