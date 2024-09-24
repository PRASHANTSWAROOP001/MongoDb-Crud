// Import the connectToDatabase function from the db.js module
const { connectToDatabase } = require("./db");

// Here we will fetch and print data from the "users" collection

/**
 * Function to connect to the MongoDB database and retrieve data from the "users" collection.
 */
const getData = async () => {
    try {
        // Establish a connection to the database
        const db = await connectToDatabase();

        // Access the "users" collection
        const collection = db.collection("users");

        // Fetch all the documents (users) from the collection and convert them to an array
        const userList = await collection.find().toArray();

        // Print the list of users retrieved from the database
        console.log(userList);
    } 
    catch (error) {
        // Log an error if something goes wrong while fetching data
        console.error("Error happened while getting data from users: ", error);
    }
}

// Call the getData function to execute the data retrieval
getData();

/**
 * Summary:
 * This file defines a `getData` function that connects to a MongoDB database and retrieves all documents (users) from the "users" collection.
 * The data is printed to the console. Any errors encountered during the database operations are caught and logged.
 */
