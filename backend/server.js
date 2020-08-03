const express = require("express");
const config = require("config");

// require("dotenv").config();
// const nodemailer = require("nodemailer");
const cors = require("cors");

// let transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD
//   }
// });

// let mailOptions = {
//   from: "shopinnsite@gmail.com",
//   to:
//     "Zamantariq807@gmail.com , hamzajamshed50@gmail.com , umunir871@gmail.com",
//   subject: "Thanks For Verification",
//   text: "This is the confirmation receipt of your order..."
// };

// transporter.sendMail(mailOptions, function(err, data) {
//   if (err) {
//     console.log("Error occurs", err);
//   } else {
//     console.log("Email sent!!!");
//   }
// });

//For Connect to mongoDB//
const mongoose = require("mongoose");
//For Envionment Variable's//
require("dotenv").config();
// Config Express Server on port 5000 //
const app = express();
const port = process.env.PORT || 5000;

//
if (!config.get("jwtPrivateKey")) {
  console.error("FATAL ERROR: jwtPrivateKey is not defined..");
  process.exit(1);
}

//cors middleware to allow parse json b/c our server is sending and recieving JSON//
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + "../public/upload"));
app.use(express.static(__dirname + "../public/merchantUpload"));
app.use(express.static(__dirname + "../public/deal"));
// mongoB will connect to this uri //
mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.ATLAS_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })

  .catch(function(reason) {
    console.log("Unable to connect to the mongodb ", reason);
  });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection SuccessFul");
});
//Server to use all files which are in "routes" Folder//
//Make Constant For Excercises & Route//

const dealRouter = require("./routes/deal");
const newUserRouter = require("./routes/newUser");
const merchantProductRouter = require("./routes/merchantProduct");
const adminProductRouter = require("./routes/adminProduct");
const newMerchantRouter = require("./routes/newMerchant");
const adminRegisterRouter = require("./routes/adminRegister");
const contactUs = require("./routes/contactUs");
const addToCart = require("./routes/addToCart");
const adminAddToCart = require("./routes/adminAddToCart");
const bookings = require("./routes/bookings");
const rejectBookings = require('./routes/rejectBookings')
const confirmBookings = require("./routes/confirmBookings");
const favourites = require("./routes/favourites");
const adminFavourites = require("./routes/adminFavourites");
const order = require("./routes/orders");
const deliverdOrder = require("./routes/deliverdOrder");
const comments=require("./routes/comments")
// We will initialize at which tab we will navigate this Routers//

app.use("/deal", dealRouter);
app.use("/newuser", newUserRouter);
app.use("/newmerchant", newMerchantRouter);
app.use("/newAdmin", adminRegisterRouter);
app.use("/merchantproduct", merchantProductRouter);
app.use("/adminproduct", adminProductRouter);
app.use("/addtocart", addToCart);
app.use("/adminaddtocart",adminAddToCart);
app.use("/order", order);
app.use("/comments", comments);
app.use("/contactUs", contactUs);
app.use("/deliverdOrder", deliverdOrder);
app.use("/bookings", bookings);
app.use("/confirmBookings", confirmBookings);
app.use("/rejectBookings", rejectBookings);
app.use("/favourites", favourites);
app.use("/adminfavourites", adminFavourites);
// listen on server//
app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
