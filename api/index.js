import express from "express"
import colors from "colors"
import dotenv from "dotenv"


// init express
const app = express();
dotenv.config();

// env var
const PORT = process.env.PORT || 8080

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));


// server listen
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`.bgBlue.white);
});