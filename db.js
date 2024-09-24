const {MongoClient} = require("mongodb")
const url = `mongodb://localhost:27017`; // string to connect to mongodb locally
const client = new MongoClient(url)
const dbName = "my-database" // database Name

const connectToDatabase = async ()=>{
    try {

        await client.connect();
        console.log("Connected To Database Successfully\n")
        const db = client.db(dbName)
        return db
        
    } catch (error) {
        console.error("Error while connecting to the database: ", error)
        throw error;
    }
}

module.exports = {connectToDatabase}