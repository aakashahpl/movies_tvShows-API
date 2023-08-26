import mongoose from "mongoose";
const Connection = ()=>{
    const MONGODB_URI = "<URL>";

    mongoose.connect(MONGODB_URI, { useNewUrlParser: true});

    mongoose.connection.on('connected',() =>{
        console.log('Database connected successfully');
    })


    mongoose.connection.on('disconnected',() =>{
        console.log('Database disconnected ');
    })

    mongoose.connection.on('error',(error) =>{
        console.log("error while connecting to the database ",error.message);
    })

}

export default Connection;
