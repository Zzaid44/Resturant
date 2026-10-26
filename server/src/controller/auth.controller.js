

import User from "../models/user.Model.js";
import bcrypt from "bcrypt"
export const createUser = async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ message: "all fields are requiered!" })
        }
        const emailRegex = /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{5,30}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "email should be valid email" })
        }
        // email not exist
        const isExist = await User.findOne({email})
        if (isExist) {
            return res.status(409).json({ message: "email already exist" })
        }
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password not match!" })
        }
        const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/
        if (!validPassword.test(password)) {
            return res.status(400).json({ message: "password must include small letters , capital letters" })
        }
        const hashed_password = await bcrypt.hash(password, 10)
        console.log({ hashed_password });

        const user = await User.create({ name, email, hashed_password })
        if (!user) {
            return res.status(400).json({ message: "could not register" })
        }
        return res.status(201).json({ message: "register successfully", user })

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "internal server error" });
    }
}



export const login = async (req , res) =>{
 
  try {
    const {email , password} = req.body
    if (!email || !password ) {
        return res.status(400).json({message : "all fields are requiered!"})
        
    }
    const isExist = await User.findOne({ email })
    if (!isExist) {
        return res.status(400).json({message :"you dont have account"})

        
    }
    const isMatch = await bcrypt.compaer(password , isExist.hashed_password)
    if (!isMatch) {
        return res.status(400).json({message:"password or email are not correct!"})
        
    }
    const user = {
        role: isExist.role,
        id: isExist._id,
        name: isExist.name
    }
    const token = jwt.sign(
        user,
        process.env.JWT_SECRET,
        { expiresIn:"15m"}
    )
    return res.status(200).json({message:"you logged in , user , token"})
  } catch (error) {
    console.log(error);
    return res.status(500).json({message:"internal server error"})
    
  } 


}