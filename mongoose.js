// Import Mongoose for handling MongoDB operations and schema-based data validation
const mongoose = require("mongoose");

// Define a schema for the "users" collection using Mongoose schema definitions
const UserSchema = new mongoose.Schema({
    name: String,   // Defines the "name" field as a String
    age: Number,    // Defines the "age" field as a Number
    email: String,  // Defines the "email" field as a String
});

// above function is used from moongoose.Schema its for data validation

// Create a Mongoose model for the "users" collection, based on the UserSchema
const UserModel = mongoose.model("users", UserSchema);

// it creates a model based on schema take two parametrs one where data is stored and schema

/**
 * Function to connect to MongoDB using Mongoose and save a new user document.
 */
const connectUsingMongoose = async () => {
    // Connect to the MongoDB database at the specified URI
    await mongoose.connect("mongodb://localhost:27017/my-database");
    console.log("Connected To MongoDB using Mongoose successfully\n");

    // Create a new instance of the UserModel with specific data fields
    const newData = new UserModel({
        name: "John Mcarthy",  // User's name
        age: 50,               // User's age
        email: "mcarthy@yahoomail.com",  // User's email
        rollNO: 101,           // Extra field not defined in the schema (will be ignored)
    });

    // Save the new user document to the "users" collection
    await newData.save();
    console.log("Data Saved successfully\n");
}

// Call the function to establish the connection and save data
connectUsingMongoose();

/**
 * Notes on behavior:
 * 
 * If a schema while adding data to MongoDB has lesser data than defined in the schema, it will still add it.
 * 
 * Example 1: 
 * const newData = new UserModel({
 *     name: "John Cena",
 *     age: 58,
 * });
 * 
 * This will be added even if it has no "email" field.
 * Data for "name" and "age" will be added.
 * 
 * Example 2:
 * const newData = new UserModel({
 *     name: "John Mcarthy",
 *     age: 50,
 *     email: "mcarthy@yahoomail.com",
 *     rollNO: 101,
 * });
 * 
 * In this case, "rollNO" will not be added because it’s not defined in the schema.
 * Only "name", "age", and "email" fields will be stored as per the schema.
 */

/**
 * Summary:
 * This file demonstrates how to connect to MongoDB using Mongoose and perform basic data insertion.
 * 
 * - A "UserSchema" is defined to enforce structure and validation on the "users" collection.
 * - The `connectUsingMongoose` function connects to a MongoDB instance and saves a new user document.
 * - It also demonstrates how Mongoose handles schema mismatches: extra fields (like `rollNO`) not defined in the schema are ignored.
 * 
 * This setup ensures data integrity while allowing flexible schema enforcement when inserting documents.
 */
