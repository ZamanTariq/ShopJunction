const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");
const newMerchant =require("./newMerchant.model")

const Schema = mongoose.Schema;
let AddToCart = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: newUser
    },
    productId:{
      type: mongoose.Schema.Types.ObjectId
    },
    userEmail:{
type:String
    },
    
    quantity:{
        type:Number
    },
    totalPrice:{
      type:Number
    },
   
    userAddress:{
      type:String
    }, 
    userName:{
      type:String
    },
    userPhone:{
      type:Number,
    
    
    },

  },
  {
    collection: "AddToCart",
    timestamps:true
    
  } 
);


AddToCart.index({ userId: 1, productId: 1 }, { unique: true })

module.exports = mongoose.model("AddToCart", AddToCart);
