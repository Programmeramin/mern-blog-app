import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import { MongoDBConnect } from "./configs/MongoDB.js";
import userRouter from "./route/auth.js"
import errorHandler from "./middleware/errorHandler.js";


// init express
const app = express();
dotenv.config();

// env var
const PORT = process.env.PORT || 8080

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// route
app.use("/api/auth/", userRouter);

// error handler
app.use(errorHandler);

// server listen
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`.bgBlue.white);
    MongoDBConnect()
});     