// Import the Express framework for creating a web server
const express = require("express");

// Import the connectToDatabase function from db.js for MongoDB operations
const { connectToDatabase } = require("./db");

// Initialize the Express application
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * Route to GET all users from the MongoDB "users" collection
 * Endpoint: /users
 */
app.get("/users", async (req, res) => {
    try {
        // Establish connection to the database
        const db = await connectToDatabase();
        
        // Access the "users" collection
        const collection = db.collection("users");
        
        // Fetch all users from the collection and convert to an array
        const usersList = await collection.find().toArray();
        
        // Send the list of users as JSON
        res.json(usersList);
    } catch (error) {
        // Log and handle any errors encountered
        console.log("Error happened while getting users data: ", error);
        res.status(500).json({ "error": "Internal Error Happened :( " });
    }
});

/**
 * Route to POST (create) a new user in the "users" collection
 * Endpoint: /users
 */
app.post("/users", async (req, res) => {
    try {
        // Establish connection to the database
        const db = await connectToDatabase();
        
        // Access the "users" collection
        const collection = db.collection("users");
        
        // Insert a new user using the request body data
        const insertedData = await collection.insertOne(req.body);
        
        // Respond with the inserted data
        res.json(insertedData);
    } catch (error) {
        // Log the error and return internal server error response
        console.log("Error happened while adding data to MongoDB: ", error);
        res.status(500).json({ "error": "Internal Error Occurred" });
    }
});

/**
 * Route to PUT (update) an existing user's data by name
 * Endpoint: /users/:name
 */
app.put("/users/:name", async (req, res) => {
    try {
        // Establish connection to the database
        const db = await connectToDatabase();
        
        // Access the "users" collection
        const collection = db.collection("users");
        
        // Update the user's information where the name matches the route parameter
        const updatedData = await collection.updateOne({ name: req.params.name }, { $set: req.body });
        
        // Respond with the updated data
        res.json(updatedData);
    } catch (error) {
        // Log the error and return internal server error response
        console.log("Error happened while trying to update user: ", error);
        res.status(500).json({ "error": "Internal Error Occurred" });
    }
});

/**
 * Route to DELETE a user by name from the "users" collection
 * Endpoint: /users/:name
 */
app.delete("/users/:name", async (req, res) => {
    try {
        // Log the route parameters for debugging
        console.log(req.params);
        
        // Establish connection to the database
        const db = await connectToDatabase();
        
        // Access the "users" collection
        const collection = db.collection("users");
        
        // Delete the user whose name matches the route parameter
        const deleteOneData = await collection.deleteOne({ name: req.params.name });
        
        // Respond with the result of the delete operation
        res.json(deleteOneData);
    } catch (error) {
        // Log the error and return internal server error response
        console.log("Error happened while trying to delete user: ", error);
        res.status(500).json({ "error": "Internal Error Occurred" });
    }
});

// Start the Express server, listening on port 3000
app.listen(3000, () => {
    console.log("Starting server at port 3000");
});

/**
 * Summary:
 * This Express.js server provides a RESTful API for performing CRUD operations on a MongoDB "users" collection.
 * 
 * - GET /users: Retrieves and returns all users from the database.
 * - POST /users: Adds a new user to the collection using the data provided in the request body.
 * - PUT /users/:name: Updates an existing user's details, searching by their name.
 * - DELETE /users/:name: Deletes a user whose name matches the provided parameter.
 * 
 * The server listens on port 3000, and it connects to a MongoDB instance through the connectToDatabase function. 
 * Errors are logged and handled with a 500 status and error message response.
 */
