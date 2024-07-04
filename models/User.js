import mongoose from "mongoose";
import { type } from "os";
import { boolean } from "webidl-conversions";


const UserSchema = new mongoose.Schema({

    username : {
        type : String,
        required : true,
        unique : true,
    },

    email : {
        type : String,
        required : true ,
        unique : true,
    },

    password : {
        type : String,
        required : true ,
        unique : true,
    },

    status : {
        type : boolean,
        default : true
    },

    trush : {
        type : boolean,
        default : false
    },


}, {timestamps : true});


export default mongoose.model("User", UserSchema)