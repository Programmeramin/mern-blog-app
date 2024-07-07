import express from "express"
import colors from "colors"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { MongoDBConnect } from "./configs/MongoDB.js";
import authRouter from "./route/auth.js"
import errorHandler from "./middleware/errorHandler.js";


// init express
const app = express();
dotenv.config();

// env var
const PORT = process.env.PORT || 8080

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(cookieParser());

// route
app.use("/api/auth/", authRouter);
 
 
// error handler
app.use(errorHandler);
 
// server listen
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`.bgBlue.white);
    MongoDBConnect()
});     