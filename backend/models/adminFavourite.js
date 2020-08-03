const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");
// const newMerchant = require("./newMerchant.model")
// const merchantProduct = require("./merchantProducts.model")
const newAdmin= require("./adminRegister.model")

const adminProduct = require('./adminProduct.model')
const Schema = mongoose.Schema;
let AdminFavourite = new Schema(
  {
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: newUser
      },
      merchantId:{
          type: mongoose.Schema.Types.ObjectId,
          ref: newAdmin
      },
      productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: adminProduct,
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
     
      
      userAddress:{
        type:String
      },
      shopName:{
          type:String
      },
      shopAddress:{
          type:String
      },
      
      
      currentDate:{
          type:Date,
          default: Date.now
      }
    },
    {
      collection: "AdminFavourite",
      timestamps:true
    }
);
AdminFavourite.index({ userId: 1, productId: 1 }, { unique: true })
module.exports = mongoose.model("AdminFavourite", AdminFavourite);
