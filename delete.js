// Import the connectToDatabase function from the db.js module
const { connectToDatabase } = require("./db");

// Function to delete data from the "users" collection
const deleteData = async () => {
    try {
        // Establish connection to the database
        const db = await connectToDatabase();

        // Access the "users" collection within the database
        const collection = db.collection("users");

        // Delete all documents where the "name" field matches "Rohit Vishwakarma"
        const deletedData = await collection.deleteMany({ "name": "Rohit Vishwakarma" });

        // Log the result of the delete operation, including count of deleted documents
        console.log(deletedData);

    } catch (error) {
        // Log an error if anything goes wrong during the deletion process
        console.error("Error happened while trying to delete data: ", error);
        throw error; // Re-throw error for handling at a higher level
    }
}

// Invoke the deleteData function to execute the deletion operation
deleteData();

/**
 * Summary:
 * This file contains a function `deleteData` that connects to a MongoDB database and deletes records from the "users" collection.
 * It specifically removes all documents where the "name" field is "Rohit Vishwakarma".
 * If successful, it logs the outcome, including the number of deleted documents. Any errors encountered during the operation are caught, logged, and re-thrown.
 */
