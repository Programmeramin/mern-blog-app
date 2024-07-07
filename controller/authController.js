import asyncHandler from "express-async-handler"
import User from "../models/User.js";  
import bcrypt from "bcrypt";
import JWT from 'jsonwebtoken'



/**
 * @description user signup
 * @route api/v1/auth/signup
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



/**
 * @description user signin
 * @route api/auth/signup
 * @method POST
 * @access PUBLIC  
 */


export const signin = asyncHandler(async(req, res) =>{

    const {email, password} = req.body;

    if(!email || !password || email === "" || password === ""){
        return res.status(400).json({message : "All fields are required"})
    }

    
        const validUser = await User.findOne({email});

        if(!validUser){
            return res.status(400).json({message : "User not found"});
        }

        const validPassword = bcrypt.compareSync(password, validUser.password);

        if(!validPassword){
            return res.status(400).json({message : "Invalid Password"});
        }

        const token = JWT.sign(
            {id : validUser._id}, process.env.JWT_SECRET)

            const {password: pass, ...rest} = validUser._doc
    
            res.status(200)
            .cookie("access_token", token, {
                httpOnly : true
            })
            .json(rest);        

            res.status(200).json({message : "Sign In Successful"});

});