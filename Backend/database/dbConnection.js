import mongoose from "mongoose";

const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName:"Restaurant_Reservation"
    }).then(()=>{
        console.log("Connected to database Succesfully");
    }).catch(err=>{
        console.log(`Some Error occured while Connecting to databse ${err}`);
         
    })
}


export default dbConnection;
