const items = require("./server/data/items.json")

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//Function to import the local data of the products to MongoDB
batchImport = async () => {
    try {
        const client = new MongoClient(MONGO_URI, options);
        await client.connect()
        const db = client.db("e-wear_emporium")
        
        await db.collection("items").insertMany(items, {ordered: false})
        
        console.log("success ٩(◕‿◕)۶")

    } catch (error) {
        console.log("an error occurred :(")
    }
}

batchImport()