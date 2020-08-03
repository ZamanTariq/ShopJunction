const mongoose=require('mongoose');
//  For Schema //
const Schema =mongoose.Schema;
const jwt = require("jsonwebtoken");
const config = require('config')

const newUserSchema =new Schema({
firstname:{
type:String,
required:true,
trim:true,
minlength:3
},
lastname:{
    type:String,
    required:true,
    trim:true,
    minlength:3
    },

email:{
    type:String,
    required:true,

},

password:{
  type:String,
  required:true,
  trim:true,
  minlength:8
},
phone:{
  type:String,

  required:true
},
address:{
  type:String,
  required:true
},
token:{
  type:String,
  default:''
},
activeUser:{
  type:Boolean,
  default:false
},
onlineDate:{
  type:Date
},
offlineDate:{
  type:Date
},
discount:{
  type:Number,
  default:0
}

},{
    
  timestamps:true,



})

newUserSchema.methods.generateAuthToken = function(){
  const token = 
  jwt.sign( {
    _id: this._id,
    firstname: this.firstname,
    lastname:this.lastname,
    email: this.email,
    phone:this.phone,
    address:this.address,
    discount:this.discount
    
  },
    
    config.get('jwtPrivateKey'))
return token;
}
const newUser=mongoose.model('newUser',newUserSchema);
module.exports=newUser;