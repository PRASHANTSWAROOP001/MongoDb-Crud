const {connectToDatabase} = require("./db")

//connect to database and add data to it 

const insertData = async () =>{
    try {

        const db = await connectToDatabase();
        const collection = db.collection("users")
        // let insertedData = await collection.insertOne({"name":"Faial Ahmed", "email":"freeguy101@gmail.com", "age": 28})
        // console.log(insertedData.acknowledged)
        const data = [{"name":"himanshu","age":24,"email":"himanshuclt@gmail.com"},{
            "name":"Rohit Vishwakarma",
            "age":23,
            "email":"vishwakarmarohit@gmail.com"
        },{
            "name":"Nitin Kumar",
            "age":22,
            "email":"nitinrajashthani@gmail.com"
        }]
        let insertData = await collection.insertMany(data);
        console.log("insert count is: ", insertData)
    } catch (error) {
        console.error("error happend while inserting data :", error);
    }
}

insertData();
