const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");
const newMerchant =require("./newMerchant.model")

const Schema = mongoose.Schema;
let Order = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: newUser
    },
    productId:{
      type: mongoose.Schema.Types.ObjectId,
    },

    merchantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: newMerchant
    },
    
    userEmail:{
      type:String,
    },
    title: {
      type: String
    },
    image: {
      type: String
    },
    category: {
      type: String
    },
    price: {
      type: Number
    },
    company: {
      type: String
    },
    info: {
      type: String
    },
    inCart: {
      type: Boolean
    },
    count: {
      type: Number
    },
    total: {
      type: Number
    },
    quantity:{
        type:Number
    },
    totalPrice:{
      type:Number
    },
    shopAddress:{
      type:String
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
    

    date:{
      type:Date,
        default: Date.now
    }
  },
  {
    collection: "Order",
    timestamps:true
  }
);

module.exports = mongoose.model("Order", Order);
