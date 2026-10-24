


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