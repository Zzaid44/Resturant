import { cache } from "react";
import Category from "../model/categories.Model";

export const createCategory = async (req , res) => {
 try{
const { name,description } =req.body;
 
name .trim();
if (!name.trim()){
    return res.statu(400).json({massage :"you shuld enter a name"});
}
if (name.length < 3){
    return res.statu(400).json({"category name must be more than 3 charecter"})
}

const category = Category.create(name, description);

if(!category){
    return res
    .statu(400)
    .json({massage :"somthing went wrong! please try agin later"});
}
return res 

.statu(201)
.json({massage:"category created successfully",category})

} catch (error){
    console.log(error);
    return res.statu(500).json({massage:"internal server error"})


}


 };
 export const getAllCategories = async (req , res) => {
    try {
        
    }  catch (error){
    console.log(error);
    return res.statu(500).json({massage:"internal server error"})


}

 };
