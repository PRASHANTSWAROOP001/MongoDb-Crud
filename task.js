const {connectToDatabase} = require("./db")

//here we will get the data print data

const getData =  async () => {
      try {

        const db = await connectToDatabase()
        const collection = db.collection("users")
        const userList = await collection.find().toArray()
        console.log(userList)
        
      } 
      catch (error) {

        console.error("Error happend while getting data from users: ", error);
        
     }
}

getData()
