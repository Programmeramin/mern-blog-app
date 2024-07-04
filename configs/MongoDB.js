import mongoose from "mongoose";

export const MongoDBConnect = async () =>{

    try {
        const connect = mongoose.connect(process.env.MONGO_STRING);
        console.log('MongoDB connection success'.bgGreen.black);
    } catch (error) {
        console.log('MongoDB connection failed'.bgRed.white);
    }

}