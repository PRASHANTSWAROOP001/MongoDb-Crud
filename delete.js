const{connectToDatabase} = require("./db")


const deleteData = async ()=>{

    try {
        const db = await connectToDatabase();
        const collection = db.collection("users")
        const deletedData = await collection.deleteMany({"name":"Rohit Vishwakarma"})
        console.log(deletedData)

    } catch (error) {
        console.error("Error happened while trying to delete data: ", error);
        throw error;
    }

}

deleteData()

