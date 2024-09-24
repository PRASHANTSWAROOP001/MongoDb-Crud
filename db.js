// Import the MongoClient class from the 'mongodb' package
const { MongoClient } = require("mongodb");

// Connection string to MongoDB, connecting to a locally hosted MongoDB instance
const url = `mongodb://localhost:27017`; 

// Create a new instance of MongoClient, passing the URL to the local MongoDB server
const client = new MongoClient(url);

// Name of the database to connect to
const dbName = "my-database"; 

// Function to establish a connection to the MongoDB database
const connectToDatabase = async () => {
    try {
        // Attempt to establish a connection to the MongoDB server
        await client.connect();

        // Log success message upon successful connection
        console.log("Connected To Database Successfully\n");

        // Select the database by name and return the database instance
        const db = client.db(dbName);
        return db; // Returning the database object for further use
    } catch (error) {
        // Handle any errors that occur during the connection process
        console.error("Error while connecting to the database: ", error);
        throw error; // Re-throw the error to be handled by the calling function
    }
}

// Export the connectToDatabase function for use in other modules
module.exports = { connectToDatabase };

/**
 * Summary:
 * This file provides a function to connect to a MongoDB database. 
 * The `connectToDatabase` function uses MongoClient from the `mongodb` package to connect to a MongoDB instance running locally on `localhost:27017`.
 * If the connection is successful, the function returns the database instance for further operations. 
 * Errors during the connection process are logged and re-thrown.
 */
