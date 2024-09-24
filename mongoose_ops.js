const mongoose = require("mongoose")
const express = require("express")

const app = express()



const connect =  async() =>{
    try {

        await mongoose.connect("mongodb://localhost:27017/my-database")

        console.log("Succefully Connected To MongoDb \n");
        
        
    } catch (error) {

        console.log("Cant Connect to mongoDb database: ", error);
        
        
    }
}

connect()


const BookSchema = new mongoose.Schema({

    title:String,
    author:String,

})


const book = mongoose.model("books", BookSchema) // this is used for connection to a particular connection and data updatations


app.get("/books", async (req,res) => {

    try {
        
        const booksList = await book.find();
        res.json(booksList)

    } catch (error) {

        console.log("Error happend while getting books list: ",error)
        res.statusCode(501).json({"error":"Internal Error Happend"})
        
    }

})

//middelware

app.use(express.json())

app.post("/books", async(req,res)=>{
     try {
        
        const{title, author} = req.body;

        const newData = new book({
            title,
            author
        })

        await newData.save()

        res.json(newData)

     } catch (error) {
        
        console.log("Error happend while adding data ",error);
        res.statusCode(501).json({"error":"Internal Error Happend"})
     }
})

app.put("/books/:id", async(req,res)=>{
    try {
        const {id} = req.params;
        const{title,author} = req.body;

       const updatedBooks = await book.findByIdAndUpdate(id,{title,author})
       res.json(updatedBooks)

    } catch (error) {

        console.log("Error happend while updating data ",error);
        res.statusCode(501).json({"error":"Internal Error Happend"})
        
    }
})


app.delete("/books/:id", async(req,res)=>{
    try {
        const {id} = req.params;

       const updatedBooks = await book.findByIdAndDelete(id)
       res.sendStatus(204)

    } catch (error) {

        console.log("Error happend while deleting data ",error);
        res.statusCode(501).json({"error":"Internal Error Happend"})
        
    }
})

app.listen(3000,()=>{
    console.log("Started Listening on Port 3000");
    
})

