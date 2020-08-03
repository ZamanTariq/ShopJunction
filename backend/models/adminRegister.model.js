const mongoose = require("mongoose");
//  For Schema //
const Schema = mongoose.Schema;
const jwt = require('jsonwebtoken')
const config = require('config')
const newAdminSchema = new Schema(
  {
    adminName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
    },
    cnic: {
      type: String,
    }
  },
  {
    collection: "newAdmin",
    timestamps: true,
  }
);


newAdminSchema.methods.generateAuthToken = function(){
  const token = 
  jwt.sign( {
    _id: this._id,
    adminName: this.adminName,
    email:this.email,
    phoneNumber: this.phoneNumber,
    cnic:this.cnic,
   
   
    
  },
    
    config.get('jwtPrivateKey'))
return token;
}

const newAdmin = mongoose.model("newAdminSchema", newAdminSchema);
module.exports = newAdmin;
// exports.newMerchant =newMerchant;

// exports.newMerchantSchema=newMerchantSchema;
