const mongoose=require("mongoose");
const sectionSchema=new mongoose.Schema({
    sectionName:{
        type:String,
    },
    subSection:[{
        type:mongoose.Types.ObjectId,
        ref:"SubSection",
    }],
})

const Section=mongoose.model("Section",sectionSchema);
module.exports=Section;