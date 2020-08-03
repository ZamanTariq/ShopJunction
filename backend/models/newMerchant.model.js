const mongoose=require('mongoose');
//  For Schema //
const Schema =mongoose.Schema;
const jwt = require("jsonwebtoken");
const config = require('config')

const newMerchantSchema =new Schema({
    merchantName:{
        type:String,
        
       
       
    },
    email:{
        type: String,
     
       


    },
    password:{
        type:String,
        required:true,
       
       
    },
    phoneNumber:{
        type:String,
     
      
    },
   
    shopName:{
        type:String,
     
     
    },
    shopDetail:{

        type:String,
       
    },

    cnic:{
        type:String,
      
        

    },
    shopAddress:{
        type:String,
     

    },
    activeMerchant:{
        type:Boolean,
        default:false
      }
},{
  collection: 'newMerchant',
  timestamps:true,



})


newMerchantSchema.methods.generateAuthToken = function(){
    const token = 
    jwt.sign( {
      _id: this._id,
      merchantName: this.merchantName,
      email:this.email,
      phoneNumber: this.phoneNumber,
      shopName:this.shopName,
      shopDetail:this.shopDetail,
      cnic:this.cnic,
      shopAddress:this.shopAddress
     
      
    },
      
      config.get('jwtPrivateKey'))
  return token;
  }

const newMerchant=mongoose.model('newMerchant',newMerchantSchema);
 module.exports=newMerchant;
// exports.newMerchant =newMerchant;

// exports.newMerchantSchema=newMerchantSchema;