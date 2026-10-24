import mongoose from "mongoose"
const categorySchema = new mongoose.Schema (
{
name: {
    type : String,
    trim : true,
    minLength : 2,
    maxLength : 20


},
description : {
    type : String,
    trim :true

}},
{
    timestamps : true
}
)
const Category = mongoose.model("category",categorySchema)
export default Category




