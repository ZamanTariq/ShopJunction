//For Routing//
const router=require('express').Router();
//Model Require//
let Merchant=require('../models/newMerchant.model');
let Users =  require('../models/newUser.model')
let Admin = require('../models/adminRegister.model')
const Joi = require('joi');
const cors=require('cors');
const jwt =require("jsonwebtoken");

require("dotenv").config();
const nodemailer = require("nodemailer");

const bcrypt=require('bcrypt');
router.use(cors());

process.env.SECRET_KEY='secret'




//-----------------POST----------------------////   Change Threre ///
router.post('/signup',(req,res)=>{

    const userData={
        merchantName:req.body.merchantName,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        shopName:req.body.shopName,
        shopDetail:req.body.shopDetail,
        cnic:req.body.cnic,
        shopAddress:req.body.shopAddress,
        activeMerchant:false
    }
    Merchant.findOne({
        email:req.body.email
    })
    .then(user=>{
        if(!user){
            bcrypt.hash(req.body.password,10,(err,hash)=>{
                userData.password=hash
                Merchant.create(userData)
                .then(user =>{
                  res.send(userData)
                    let transporter = nodemailer.createTransport({
                        service: "gmail",
                        auth: {
                          user: process.env.EMAIL,
                          pass: process.env.PASSWORD
                        }
                      });
                      
                    let mailOptions = {
                        from: "shopinnsite@gmail.com",
                        to:` <${req.body.email}>`,
                        subject: "Account Verification",
                        text: "Thank you for sucessfully creating  your Accouunt In ShopIn Website Now you can Sell your Products.."
                      };
                      transporter.sendMail(mailOptions, function(err, data) {
                        if (err) {
                          console.log("Error occurs", err);
                        } else {
                          console.log("Email sent!!!");
                        }
                      });
                })
                .catch(err=>{
                    res.send('error:' +err)
                })
            })
        }else{
            res.status(400).json({error: 'User already Exist'})
        }
    }
    
    )
    .catch(err=>{
        res.send('error:' +err)
    })   
});

// //--------------------LOGIN-------------------------//
// router.post('/signin',(req,res)=>{
//     Merchant.findOne({
//         email:req.body.email
//     })
//     .then(user=>{
//         if(user){
//             if(bcrypt.compareSync(req.body.password,user.password)){
//                 const payload={
//                     _id:user._id,
//                     merchantName:user.merchantName,
//                     email:user.email,
//                     phoneNumber:user.phoneNumber,
//                     shopName:user.shopName,
//                     shopDetail:user.shopDetail,
//                     cnic:user.cnic,
//                     shopAddress:user.shopAddress
//                 }
//                 let token=jwt.sign(payload,process.env.SECRET_KEY
//                     ///{   //expiresIn:1440}
                 
//                 )
//                 res.send(token)
//             }else{
//                 //Password not Match
//                 res.json({error:"User does Not Exist"})
//             }
//         }else{
//             res.json({error:"User does not exist"})
//         }
//     })
//     .catch(err=>{
//         res.send('error:' +err)
//     })
// });
//
router.get("/", async (req, res) => {
    const merchants = await Merchant.find()
      .sort("name");
    res.send(merchants);
  });
  ///Login Use mosh lec//
  //---LoginBy mosh---//
router.post('/signin', async (req, res) => {
    const { error } = validate(req.body); 
    if (error) return res.status(400).send(error.details[0].message);
  
    let merchant = await Merchant.findOne({ email: req.body.email });
    if (!merchant) return res.status(400).send('Invalid email or password.');
  
    const validPassword = await bcrypt.compare(req.body.password, merchant.password);       
    await merchant.updateOne({$set:{activeMerchant:true}}) 
    if(!validPassword) return res.status(400).send('Invalid email or password.');
  
  
  
    const token = merchant.generateAuthToken();
    res.send(token);
  });
  
  
  function validate(req) {
    const schema = {
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(5).max(255).required()
    };
  
    return Joi.validate(req, schema);
  }
  


//Delete
router.route('/delete/:id').get(function (req, res) {
    Merchant.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

// Defined edit route
router.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Merchant.findById(id, function (err, merchant){
        res.json(merchant);
    });
  });

  //  Defined update route
  router.route('/update/:id').post(function (req, res) {
    Merchant.findById(req.params.id, function(err, merchant) {
    if (!merchant)
      res.status(404).send("data is not found");
    else {
        merchant.merchantName = req.body.merchantName;
        merchant.email=req.body.email;
        merchant.password = req.body.password;
        merchant.phoneNumber = req.body.phoneNumber;
        merchant.shopName = req.body.shopName;
        merchant.shopDetail = req.body.shopDetail;
        merchant.cnic = req.body.cnic;
        merchant.shopAddress = req.body.shopAddress;
       

        merchant.save().then(merchant => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});
//get all merchants and users for graphical represantation
router.get('/UserCounter', async (req, res) => {   
    
    const array =[];
    const merchants = await Merchant.find().countDocuments();
    const users= await Users.find().countDocuments();
    const admins= await Admin.find().countDocuments();
    
  
    array.push(merchants)
    array.push(users)
    array.push(admins)
   

    res.send(array);

    });
  


///get merchant Shop detail


router.get("/profile/:id", async (req, res) => {
    const merchants = await Merchant.find({_id:req.params.id})
      
    res.send(merchants);
  });
  


//------------------------------GET--------------------------//
router.get("/profile"),(req,res)=>{
    var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY) 
    Merchant.findOne({
        _id:decoded._id
    })
    .then(user=>{
        if(user){
            res.json(user)
        }else{
            res.send("Merchant does not exist")
        }
    })
    .catch(err=>{
        res.send("error:" +err)
    })
}


router.route("/logout/:id").post(function(req, res) {
  Merchant.findById(req.params.id, function(err, newuser) {
    if (!newuser) res.status(404).send("data is not found");
    else {
      newuser.activeMerchant=false

      newuser
        .save()
        .then(newuser => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

//--------User Counter-----//
router.get('/status', async (req, res) => {
    
  const array =[];
  const online = await Merchant.find({activeUser:true}).countDocuments();
  const offline = await Merchant.find({activeUser:false}).countDocuments();


  array.push(online)
  array.push(offline)
 
  res.send(array);

  });

  
    router.route("/online-merchants").get(function(req,res){
      Merchant.find({"activeMerchant":"true"},function(err, onlineMerchants){
        if(err){
          console.log(err);
        }
        else {
          if(onlineMerchants.length>0){
            res.json(onlineMerchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })
////Rest Password Work///
router.post('/reset',function(req,res){
  Merchant.findOne({email:req.body.email},function(error,userData){
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });
    var currentDateTime=new Date();
    let mailOptions = {
      from: "shopinnsite@gmail.com",
      to:` <${req.body.email}>`,
      subject: "Password Reset",
      html: "<h3>WELCOME TO SHOPINN </h3><p>\
      <h3>Hello</h3>\
      <small>If you want to reset your password then click below link</small><br/>\
      <a href='http://localhost:3000/merchant-change-password/"+currentDateTime+ "id "+userData._id+"+++'>Click on this Link</a>\
      </p>"
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error occurs", err);
      } else {
        console.log("Email sent!!!",data);
        Merchant.updateOne({email:userData.email},
          {
            token:currentDateTime,
          },{multi:true},function(err,affected,response){
            return res.status(200).json({
              success:false,
              msg:data.response,

            

            })
          })
      }
    });

  })
})


router.post('/updatepassword',function(req, res){
  Merchant.findOne({ email: req.body.email }, function (errorFind, userData) {
    console.log(userData);
          bcrypt.genSalt(10, (errB, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                  if (err) throw err;
                  let condition = ({_id:userData._id})
                  let newPassword = hash;
                  let dataForUpdate = { password: newPassword,updatedDate: new Date() };
                  Merchant.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (error, updatedUser) {
                      if (error) {
                          if (err.name === 'MongoError' && error.code === 11000) {
                            return res.status(500).json({msg:'Mongo Db Error', error:error.message});
                          }else{
                              return res.status(500).json({msg:'Unknown Server Error', error:'Unknow server error when updating User'});
                          }
                      }
                      else{
                              if (!updatedUser) {
                                  return res.status(404).json({
                                      msg: "User Not Found.",
                                      success: false
                                  });
                              }else{
                              return res.status(200).json({
                                  success: true,
                                  msg: "Your password are Successfully Updated",
                                  updatedData: updatedUser
                              });
                          }
                      }
                  });
              });
          });
      
      if (errorFind)
      {
              return res.status(401).json({
              msg: "Something Went Wrong",
              success: false
          });
      }
  }
  );
 
})







module.exports=router;

