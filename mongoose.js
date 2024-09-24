const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name:String,
    age: Number,
    email: String,
})

// above function is used from moongoose.Schema its for data validation

const UserModel = mongoose.model("users",UserSchema)

// it creates a model based on schema take two parametrs one where data is stored and schema


const connectUsingMongoose = async () =>{
    await mongoose.connect("mongodb://localhost:27017/my-database")
    console.log("Connected To MongoDb using mongoose successfully\n")

    const newData = new UserModel({
        name:"Jhon Mcarthy",
        age: 50,
        email:"mcarthy@yahoomail.com",
        rollNO: 101,
    })

    await newData.save()

    console.log("data Saved successfully\n")

}

connectUsingMongoose()

/*

if a schema while adding data to mongoDb has lesser data than defined schema it will still add it

example:   const newData = new UserModel({
        name:"Jhon Cena",
        age: 58,
    })
        this will be added even if it has no email
        data name and age will be added

exmple 2: 

 const newData = new UserModel({
        name:"Jhon Mcarthy",
        age: 50,
        email:"mcarthy@yahoomail.com",
        rollNO: 101,
    })

    await newData.save()

    this adds all the data but it does not add rollNO data as its not defined 

*/
