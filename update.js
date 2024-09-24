// Import the connectToDatabase function from the db.js module
const { connectToDatabase } = require("./db.js");

/**
 * Function to update user data in the "users" collection of the MongoDB database.
 * In this case, it updates the name field of users with "Hiamnshi" to "Himanshi".
 */
const updateData = async () => {
    try {
        // Establish a connection to the database
        const db = await connectToDatabase();

        // Access the "users" collection
        const collection = db.collection("users");

        // Update multiple documents where the name is misspelled as "Hiamnshi" and correct it to "Himanshi"
        const updatedData = await collection.updateMany({ name: "Hiamnshi" }, { $set: { name: "Himanshi" } });

        // Print the result of the update operation, which includes matched and modified count
        console.log(updatedData);
    } 
    catch (error) {
        // Log an error if something goes wrong during the update process
        console.error("Error happened while updating data: ", error);
    }
}

// Call the updateData function to execute the update operation
updateData();

/**
 * Summary:
 * This file defines an `updateData` function that connects to a MongoDB database and updates multiple records in the "users" collection.
 * Specifically, it searches for users with the misspelled name "Hiamnshi" and updates their name to "Himanshi".
 * The result of the update operation (number of documents matched and modified) is logged to the console.
 * Error handling is in place to catch and log any issues during the update process.
 */
