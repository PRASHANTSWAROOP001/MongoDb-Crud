// Import the necessary modules: mongoose for database operations and express for creating a web server
const mongoose = require("mongoose");
const express = require("express");

// Initialize the Express application
const app = express();

/**
 * Function to connect to the MongoDB database using Mongoose.
 * The database connection string points to a local MongoDB instance.
 */
const connect = async () => {
    try {
        // Connect to the MongoDB database at the specified URI
        await mongoose.connect("mongodb://localhost:27017/my-database");
        console.log("Successfully Connected To MongoDB \n");
    } catch (error) {
        // Log an error if the connection fails
        console.log("Can't Connect to MongoDB database: ", error);
    }
};

// Call the connect function to establish the database connection
connect();

/**
 * Mongoose schema definition for a "Book" collection.
 * Each book has two properties: title (String) and author (String).
 */
const BookSchema = new mongoose.Schema({
    title: String,
    author: String,
});

// Create a Mongoose model for the "books" collection, using the defined BookSchema
const book = mongoose.model("books", BookSchema); 

/**
 * Route to GET all books from the "books" collection
 * Endpoint: /books
 */
app.get("/books", async (req, res) => {
    try {
        // Fetch all documents from the "books" collection
        const booksList = await book.find();
        // Respond with the list of books as JSON
        res.json(booksList);
    } catch (error) {
        // Log the error and return a 501 error status
        console.log("Error happened while getting books list: ", error);
        res.status(501).json({ "error": "Internal Error Happened" });
    }
});

// Middleware to parse JSON request bodies
app.use(express.json());

/**
 * Route to POST (create) a new book in the "books" collection
 * Endpoint: /books
 */
app.post("/books", async (req, res) => {
    try {
        // Extract title and author from the request body
        const { title, author } = req.body;

        // Create a new instance of the "book" model with the provided data
        const newData = new book({ title, author });

        // Save the new book to the database
        await newData.save();

        // Respond with the newly created book data
        res.json(newData);
    } catch (error) {
        // Log the error and return a 501 error status
        console.log("Error happened while adding data: ", error);
        res.status(501).json({ "error": "Internal Error Happened" });
    }
});

/**
 * Route to PUT (update) an existing book by its ID
 * Endpoint: /books/:id
 */
app.put("/books/:id", async (req, res) => {
    try {
        // Extract the book ID from the route parameters
        const { id } = req.params;
        
        // Extract the updated title and author from the request body
        const { title, author } = req.body;

        // Find the book by ID and update its details
        const updatedBooks = await book.findByIdAndUpdate(id, { title, author });

        // Respond with the updated book data
        res.json(updatedBooks);
    } catch (error) {
        // Log the error and return a 501 error status
        console.log("Error happened while updating data: ", error);
        res.status(501).json({ "error": "Internal Error Happened" });
    }
});

/**
 * Route to DELETE a book by its ID
 * Endpoint: /books/:id
 */
app.delete("/books/:id", async (req, res) => {
    try {
        // Extract the book ID from the route parameters
        const { id } = req.params;

        // Find the book by ID and delete it
        const deletedBook = await book.findByIdAndDelete(id);

        // Respond with a 204 (No Content) status to indicate successful deletion
        res.sendStatus(204);
    } catch (error) {
        // Log the error and return a 501 error status
        console.log("Error happened while deleting data: ", error);
        res.status(501).json({ "error": "Internal Error Happened" });
    }
});

// Start the Express server, listening on port 3000
app.listen(3000, () => {
    console.log("Started Listening on Port 3000");
});

/**
 * Summary:
 * This Express.js server connects to a MongoDB database using Mongoose and provides a RESTful API for managing a "books" collection.
 * 
 * - GET /books: Fetches and returns a list of all books from the collection.
 * - POST /books: Adds a new book to the collection, using the title and author from the request body.
 * - PUT /books/:id: Updates an existing book's title and author by its ID.
 * - DELETE /books/:id: Deletes a book from the collection based on its ID.
 * 
 * The server listens on port 3000 and interacts with a local MongoDB instance running on localhost:27017.
 * Error handling is in place for database operations, and errors are logged with appropriate responses returned.
 */
