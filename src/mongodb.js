const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/loginSignupTUT")
.then(()=>{
  console.log("mongodb connected yhahoo")
})
.catch(()=>{
  console.log("mongodb Failed to connected")
})

const loginSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})
const collection=new mongoose.model("collection1",loginSchema)

module.exports=collection