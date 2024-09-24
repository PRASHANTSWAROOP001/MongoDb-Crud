const {connectToDatabase} = require("./db.js")

const updateData = async () =>{
    try {
        const db = await connectToDatabase()
        const collection = db.collection("users")
        const updatedData = await collection.updateMany({name:"Hiamnshi"},{$set:{name:"Himanshi"}});
        console.log(updatedData)
        
    } catch (error) {

        console.error("Error Happend while updating data: ", error);
        
    }
}

updateData()

