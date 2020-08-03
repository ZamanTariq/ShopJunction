const mongoose=require('mongoose');
//  For Schema //

const newAdmin = require('./adminRegister.model')
const Schema =mongoose.Schema;
let adminProduct = new Schema({
  adminId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: newAdmin
  },
    title: {
      type: String
    },
    image: {
      type: String
    },
    category:{
      type:String
    },
    rating:{
type:String
    },
    oldprice:{
type:String
    },
    price: {
      type: Number
    }
    ,
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
    adminPhone:{
			type:String
		},
    stock:{
        type: Number
    },
		
    currentDate:{
      type:Date,
      default: Date.now
  },
  },{
      collection: 'adminProduct',
      timestamps:true,
  });
  
  module.exports = mongoose.model('adminProduct', adminProduct);