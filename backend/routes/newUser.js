//For Routing//
const router = require("express").Router();
//Model Require//
let User=require('../models/newUser.model');
let Comment=require("../models/comment.model");
const Joi = require('joi');

const cors = require("cors");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
router.use(cors());

process.env.SECRET_KEY = "secret";

require("dotenv").config();
const nodemailer = require("nodemailer");

router.route('/').get(function (req, res) {
    User.find(function(err, users){
    if(err){
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});


router.get("/", async (req, res) => {
  const users = await User.find()
    .select("-__v")
    .sort("name");
  res.send(users);
});

//-----------------POST----------------------////   Change Threre ///
router.post("/signup", (req, res) => {
  const userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    phone: req.body.phone,
    address: req.body.address,
    activeUser:false
  };
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then(user => {
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
                text: "Thank you for sucessfully creating  Accouunt In ShopIn Website Now you can Book and Purchase   Products.."
              };
              transporter.sendMail(mailOptions, function(err, data) {
                if (err) {
                  console.log("Error occurs", err);
                } else {
                  console.log("Email sent!!!");
                }
              });
            })
            .catch(err => {
              res.send("error:" + err);
            });
        });
      } else {
        // res.json({ error: "User already Exist" });
        res.status(400).send("User already registered.")
      }
    })
    .catch(err => {
      res.send("error:" + err);
    });
});

//--------------------LOGIN-------------------------//
// router.post("/signin", (req, res) => {
//   User.findOne({
//     email: req.body.email
//   })
//     .then(user => {
//       if (user) {
//         if (bcrypt.compareSync(req.body.password, user.password)) {
//           const payload = {
//             _id: user._id,
//             firstname: user.firstname,
//             lastname: user.lastname,
//             email: user.email,
//             phone: user.phone,
//             address: user.address
//           };
//           let token = jwt.sign(
//             payload,
//             process.env.SECRET_KEY
//             ///{   //expiresIn:1440}
//           );
//           res.send(token);
//         } else {
//           //Password not Match
//           res.json({ error: "User does Not Exist" });
//         }
//       } else {
//         res.json({ error: "User does not exist" });
//       }
//     })
//     .catch(err => {
//       res.send("error:" + err);
//     });
// });
//---LoginBy mosh---//
router.post('/signin', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, user.password);      
  await user.updateOne({$set:{activeUser:true,onlineDate:new Date()}})
   if(!validPassword) return res.status(400).send('Invalid email or password.');



  const token = user.generateAuthToken();
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
router.route("/delete/:id").get(function(req, res) {
  User.findByIdAndRemove({ _id: req.params.id }, function(err, newuser) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

// Defined edit route
router.route("/edit/:id").get(function(req, res) {
  let id = req.params.id;
  User.findById(id, function(err, newuser) {
    res.json(newuser);
  });
});

//  Defined update route
router.route("/update/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, newuser) {
    if (!newuser) res.status(404).send("data is not found");
    else {
      newuser.firstname = req.body.firstname;
      newuser.lastname = req.body.lastname;
      newuser.email = req.body.email;
      newuser.password = req.body.password;
      newuser.phone = req.body.phone;
      newuser.address = req.body.address;
      

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
router.get("/userProfile/:id", async (req,res)=>{


  const profile = await User.find({_id:req.params.id})
  res.send(profile);

})
//------------------------------GET--------------------------//
router.get("/profile"),
  (req, res) => {
    var decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET_KEY
    );
    User.findOne({
      _id: decoded._id
    })
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.send("user does not exist");
        }
    })
    .catch(err=>{
        res.send("error:" +err)
    })
}

router.post('/reset',function(req,res){
  User.findOne({email:req.body.email},function(error,userData){
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
      <a href='http://localhost:3000/change-password/"+currentDateTime+ "id "+userData._id+"+++'>Click on this Link</a>\
      </p>"
    };
    transporter.sendMail(mailOptions, function(err, data) {
      if (err) {
        console.log("Error occurs", err);
      } else {
        console.log("Email sent!!!",data);
        User.updateOne({email:userData.email},
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
  User.findOne({ email: req.body.email }, function (errorFind, userData) {
    console.log(userData);
          bcrypt.genSalt(10, (errB, salt) => {
              bcrypt.hash(req.body.password, salt, (err, hash) => {
                  if (err) throw err;
                  let condition = ({_id:userData._id})
                  let newPassword = hash;
                  let dataForUpdate = { password: newPassword,updatedDate: new Date() };
                  User.findOneAndUpdate(condition, dataForUpdate, { new: true }, function (error, updatedUser) {
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


router.route("/logout/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, newuser) {
    if (!newuser) res.status(404).send("data is not found");
    else {
      newuser.activeUser=false,
      newuser.offlineDate=new Date()

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
  const online = await User.find({activeUser:true}).countDocuments();
  const offline = await User.find({activeUser:false}).countDocuments();


  array.push(online)
  array.push(offline)
 
  res.send(array);

  });

  
    router.route("/online-users").get(function(req,res){
      User.find({},function(err, onlineUsers){
        if(err){
          console.log(err);
        }
        else {
          if(onlineUsers.length>0){
            res.json(onlineUsers);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    router.route("/offline-users").get(function(req,res){
      User.find({"activeUser":"false"},function(err, onlineUsers){
        if(err){
          console.log(err);
        }
        else {
          if(onlineUsers.length>0){
            res.json(onlineUsers);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })







//Update Discount



router.route("/discount/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, newuser) {
    if (!newuser) res.status(404).send("data is not found");

    else {
     
      newuser.discount = req.body.discount

      newuser
        .save()
        .then(newuser => {
          res.json("Update complete");
          let transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: process.env.EMAIL,
              pass: process.env.PASSWORD
            }
            
          });
          let mailOptions = {
            from: "shopinnsite@gmail.com",
            to:` <${newuser.email}>`,
            subject: "Discount Offer",
            text: "We noticed that you are not using our website for along time we give you a discount offer "+req.body.discount+"% on 1st product minimum of 3 quantity"
          };
          transporter.sendMail(mailOptions, function(err, data) {
            if (err) {
              console.log("Error occurs", err);
            } else {
              console.log("Email sent!!!");
            }
          });
          
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});


router.route("/resetdiscount/:id").post(function(req, res) {
  User.findById(req.params.id, function(err, newuser) {
    if (!newuser) res.status(404).send("data is not found");
    else {
     
      newuser.discount = 0

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
 

module.exports = router;
