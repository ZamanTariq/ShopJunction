const mongoose = require("mongoose");
//  For Schema //
const newUser = require("./newUser.model");
const newMerchant = require("./newMerchant.model")
const merchantProduct = require("./merchantProducts.model")
const Schema = mongoose.Schema;
let Favourite = new Schema(
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
        type: mongoose.Schema.Types.ObjectId,
        ref: merchantProduct,
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
      collection: "Favourite",
      timestamps:true
    }
);

Favourite.index({ userId: 1, productId: 1 }, { unique: true })

module.exports = mongoose.model("Favourite", Favourite);
