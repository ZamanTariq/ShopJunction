const mongoose = require("mongoose");
//  For Schema //


const Schema = mongoose.Schema;
let ContactUs = new Schema(
  {
    
   name:{
         type:String
    },
    email:{
        type:String
    },
    subject:{
        type:String
    },
    message:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    },
    
    
    
   

  },
  {
    collection: "ContactUs",
    timestamps:true
    
  } 
);




module.exports = mongoose.model("ContactUs", ContactUs);
