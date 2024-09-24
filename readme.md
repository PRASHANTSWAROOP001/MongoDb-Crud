# MongoDB User Management System

## Overview

This repository contains a simple Node.js application that demonstrates how to interact with a MongoDB database using both the native MongoDB driver and Mongoose. The application includes functionalities for creating, reading, updating, and deleting user data. This serves as a foundational project for developers looking to learn about MongoDB operations in a practical context.

## Features

- Connect to a MongoDB database locally.
- Perform CRUD (Create, Read, Update, Delete) operations on user data.
- Error handling for database operations.
- Example usage of Mongoose for schema-based data management.

## Technologies Used

- **Node.js**: JavaScript runtime for building scalable network applications.
- **MongoDB**: NoSQL database for storing data in flexible, JSON-like documents.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js, simplifying data validation and schema creation.
- **Express.js**: Web application framework for Node.js.

## Directory Structure

```plaintext
├── db.js                # Database connection logic using MongoDB native driver
├── app.js               # Main application file with Express routes and middleware
├── models               # Directory containing Mongoose models (e.g., UserModel)
├── README.md            # Project documentation
└── package.json         # Project metadata and dependencies

```

## Getting Started Locally

  
### Prequiste
- Node.js (>=14.0.0)
- MongoDB (>=4.0.0)
  

### Installation
Install project dependencies (including Express, Mongoose, etc.) with the following command:


1. Clone The Repo
```bash
git clone https://github.com/yourusername/MongoDb-Crud
cd MongoDb-Crud
```
2. Install Dependency
``` bash
npm install
```
3. Run App
``` bash
node app.js
```

# Useage

## Crud Operations
1. Create a User
   - Send a POST request to /users with a JSON body containing user details (e.g., name, age, email)

2. Read Users:
   - Send a GET request to /users to retrieve a list of all users.
  
3. Update a User:
   - Send a PUT request to /users/:name with the new user data in the request body to update the user's detail
4. Delete a User:
   - Send a DELETE request to /users/:name to remove a user by name



## API Documentation
### Users API
- **POST /users**: Create a new user.
- **GET /users**: Retrieve all users.
- **PUT /users/:name**: Update user details by name.
- **DELETE /users/:name**: Delete a user by name.


### Example Request / How To Post/ Test Using Postman
**Create a User:**
- POST to `/users`
```json
{
    "name": "John Doe",
    "age": 30,
    "email": "johndoe@example.com"
}
```
## Troubleshooting
- **Issue:** Unable to connect to MongoDB.
- **Solution:** Ensure MongoDB is running locally and the connection string in `db.js` is correct.
