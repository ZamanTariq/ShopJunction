const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");
const newMerchant = require("./newMerchant.model");
const Schema = mongoose.Schema;
let Booking = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: newUser
    },
    merchantId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: newMerchant
    },
    productId:{
      type: mongoose.Schema.Types.ObjectId
    },
    userEmail:{
      type: String,
      
  }
    ,
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
      type: Number
    },
    
    userAddress:{
      type:String
    },
    shopName:{
        type:String
    },
    shopAddress:{
        type:String
    },
    bookingQuantity:{
        type:Number
    },
    totalPrice:{
        type:Number
      },
    currentDate:{
        type:Date,
        default: Date.now
    },
    bookingDate:{
        type:Date
    },
    paymentMethod:{
      type:String
    },
  },
  {
    collection: "Booking",
    timestamps:true
  }
);

module.exports = mongoose.model("Booking", Booking);
