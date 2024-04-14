// const companies = require("./server/data/companies.json")
const items = require("./server/data/items.json")

const { MongoClient } = require("mongodb");
require("dotenv").config();

const { MONGO_URI } = process.env;

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

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