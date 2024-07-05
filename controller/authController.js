import asyncHandler from "express-async-handler"
import User from "../models/User.js";  
import bcrypt from "bcrypt"
/**
 * @description user signup
 * @route api/v1/user/signup
 * @method POST
 * @access PUBLIC  
 */


export const userSignup = asyncHandler( async(req, res) =>{

    const {username, email , password} = req.body;

    // validation
    if(!username || !email || !password || !username === "" || !email === "" || !password === ""){
        return res.status(400).json({message : "All fields are required"})
    }

    // hash password
    const hassPass =  bcrypt.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password : hassPass,
    });

    await newUser.save();

  res.status(200).json({message : "signup successful"})

}) 