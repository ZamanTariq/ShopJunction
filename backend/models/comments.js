const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");

const Schema = mongoose.Schema;
let Comments = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: newUser
    },
    productId:{
      type: mongoose.Schema.Types.ObjectId
    },
    userName:{
         type:String
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default: Date.now
    },
    
    
    
   

  },
  {
    collection: "Comments",
    timestamps:true
    
  } 
);


// Comments.index({ userId: 1, productId: 1 }, { unique: true })

module.exports = mongoose.model("Comments", Comments);
