//For Routing//
const router = require("express").Router();
//Model Require//
let Admin = require("../models/adminRegister.model");
const Joi = require('joi');
const cors = require("cors");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const nodemailer = require("nodemailer");

const bcrypt = require("bcrypt");
router.use(cors());

process.env.SECRET_KEY = "secret";

//-----------------POST----------------------////   Change Threre ///
router.post("/signup", (req, res) => {
  const userData = {
    adminName: req.body.adminName,
    email: req.body.email,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    cnic: req.body.cnic,
   
  };
  Admin.findOne({
    email: req.body.email,
  })
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          Admin.create(userData)
            .then((user) => {
              res.send(userData)
              let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.EMAIL,
                  pass: process.env.PASSWORD,
                },
              });

              let mailOptions = {
                from: "shopinnsite@gmail.com",
                to: ` <${req.body.email}>`,
                subject: "Account Verification",
                text:
                  "Thank you for sucessfully creating  your Accouunt In ShopIn Website Now you can Sell your Products..",
              };
              transporter.sendMail(mailOptions, function (err, data) {
                if (err) {
                  console.log("Error occurs", err);
                } else {
                  console.log("Email sent!!!");
                }
              });
            })
            .catch((err) => {
              res.send("error:" + err);
            });
        });
      } else {
         res.status(400).json({ error: "User already Exist" });
      }
    })
    .catch((err) => {
      res.send("error:" + err);
    });
});

//--------------------LOGIN-------------------------//
router.post('/signin', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.status(400).send('Invalid email or password.');

  const validPassword = await bcrypt.compare(req.body.password, admin.password);       
   if(!validPassword) return res.status(400).send('Invalid email or password.');



  const token = admin.generateAuthToken();
  res.send(token);
});


function validate(req) {
  const schema = {
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(255).required()
  };

  return Joi.validate(req, schema);
}
//
router.get("/", async (req, res) => {
  const admins = await Admin.find().sort("name");
  res.send(admins);
});

//Delete
router.route("/delete/:id").get(function (req, res) {
  Admin.findByIdAndRemove({ _id: req.params.id }, function (err, admin) {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

// Defined edit route
router.route("/edit/:id").get(function (req, res) {
  let id = req.params.id;
  Admin.findById(id, function (err, admin) {
    res.json(admin);
  });
});

//  Defined update route
router.route("/update/:id").post(function (req, res) {
  Admin.findById(req.params.id, function (err, admin) {
    if (!admin) res.status(404).send("data is not found");
    else {
      admin.adminName = req.body.adminName;
      admin.email = req.body.email;
      admin.password = req.body.password;
      admin.phoneNumber = req.body.phoneNumber;
      admin.shopName = req.body.shopName;
      admin.shopDetail = req.body.shopDetail;
      admin.cnic = req.body.cnic;
      admin.shopAddress = req.body.shopAddress;

      admin
        .save()
        .then((admin) => {
          res.json("Update complete");
        })
        .catch((err) => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

//------------------------------GET--------------------------//
router.get("/profile"),
  (req, res) => {
    var decoded = jwt.verify(
      req.headers["authorization"],
      process.env.SECRET_KEY
    );
    admin
      .findOne({
        _id: decoded._id,
      })
      .then((user) => {
        if (user) {
          res.json(user);
        } else {
          res.send("admin does not exist");
        }
      })
      .catch((err) => {
        res.send("error:" + err);
      });
  };

// router.route('/').get(function (req, res) {
//     admin.find(function(err, admins){
//     if(err){
//       console.log(err);
//     }
//     else {
//       res.json(admins);
//     }
//   });
// });

module.exports = router;
