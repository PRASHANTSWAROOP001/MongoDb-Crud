const express = require("express")

const {connectToDatabase} = require("./db")

const app = express()

app.use(express.json())


app.get("/users",async (req,res)=>{
    try {
        const db = await connectToDatabase();
        const collection = db.collection("users")
        const usersList = await collection.find().toArray()
        res.json(usersList)
    } catch (error) {
        console.log("error happend while getting users data ",error)
        res.sendStatus(500).json({"error":"Internal Error Happened :( "})

    }

})

app.post("/users", async (req,res)=>{
    try {
        const db = await connectToDatabase()
        const collection = db.collection("users")
        const insertedData = await collection.insertOne(req.body)
        res.json(insertedData)
    } catch (error) {
        console.log("Error happend while adding data in mongoDb: ", error);
        
    }
})


app.put("/users/:name", async (req,res)=>{
    try {
        const db = await connectToDatabase()
        const collection = db.collection("users")
        const updatedData = await collection.updateOne({name:req.params.name},{$set:req.body})
        res.json(updatedData)
    } 
    catch (error) {

        console.log("Error happened while trying to update value: ", error);
        res.status(500).json({"error":"internal error happend"})
        
    }
})


app.delete("/users/:name", async(req,res)=>{

    try {
        console.log(req.params)
        const db = await connectToDatabase()
        const collection = db.collection("users")
        const deleteOneData = await collection.deleteOne({name:req.params.name})
        res.json(deleteOneData)
        
    } catch (error) {

        console.log("Error happened while trying to delete value: ", error);
        res.status(500).json({"error":"internal error happend"})
        
    }

})


app.listen(3000,()=>{
    console.log("Starting server at port 3000: ")
})


