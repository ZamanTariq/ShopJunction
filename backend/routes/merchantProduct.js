const MerchantRoutes=require('express').Router();
const newMerchant = require('../models/newMerchant.model')

//Model Require//
let Merchant=require('../models/merchantProducts.model');
var multer  = require('multer')

//for staorage to save image in folder
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload/')
  },
  filename: function (req, file, cb) {
    let a = file.originalname.split('.')
    cb(null, `${file.fieldname}-${Date.now()}.${a[a.length-1]}`)
  }
})
var upload = multer({ storage: storage })
//upload product by merchant
MerchantRoutes.route('/add').post(upload.single("image"),async function (req, res) {
  try {
    
  
  const merchantId = await newMerchant.findById(req.body.merchantId);
  if (!merchantId) return res.status(400).send("Invalid merchant.");
    let merchant = new Merchant({
      merchantId:req.body.merchantId,
      title:req.body.title,
      image:req.file.filename,
      category:req.body.category,
      rating:req.body.rating,
      oldprice:req.body.oldprice,
      price:req.body.price,
      company:req.body.company,
      info:req.body.info,
      inCart:req.body.inCart,
      count:req.body.count,
      total:req.body.total,
      merchantPhone:req.body.merchantPhone,
      shopName:req.body.shopName,
      shopAddress:req.body.shopAddress,
      bookingStatus:req.body.bookingStatus,
      orderStatus:req.body.orderStatus,
      minBookQuantity:req.body.minBookQuantity,
      maxBookQuantity:req.body.maxBookQuantity,
      stock:req.body.stock
    });
    merchant.save()
      .then(merchant => {
        res.status(200).json({'business': 'business in added successfully'});
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
    } catch (error) {

      console.log(error)
    
    }


  });
  
// Defined get data(index or listing) route
MerchantRoutes.route('/').get(function (req, res) {




  
      Merchant.find(function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        res.json(merchants);
      }
    });
  });
//Count no of products in each category
MerchantRoutes.get('/CategoryCounter', async (req, res) => {   
    
    const array =[];
    const ElectronicDevices = await Merchant.find({"category":"Electronic Devices"}).countDocuments();
    const ElectronicAccessories = await Merchant.find({"category":"Electronic Accessories"}).countDocuments();
    const TVHomeAppliances = await Merchant.find({"category":"TV & Home Appliances"}).countDocuments();
    const HealthBeauty = await Merchant.find({"category":"Health & Beauty"}).countDocuments();
    const BabiesToys= await Merchant.find({"category":"Babies & Toys"}).countDocuments();
    const GroceriesPets = await Merchant.find({"category":"Groceries & Pets"}).countDocuments();
    const HomeLifestyle= await Merchant.find({"category":"Home & Lifestyle"}).countDocuments();
    const WomenFashion = await Merchant.find({"category":"Women Fashion"}).countDocuments();
    const MenFashion= await Merchant.find({"category":"Men Fashion"}).countDocuments();
    const WatchesBagsJewelery= await Merchant.find({"category":"Watches, Bags & Jewelery"}).countDocuments();
    const SportsOutdoor= await Merchant.find({"category":"Sports & Outdoor"}).countDocuments();
    const AutomotiveMotorbike = await Merchant.find({"category":"Automotive & Motorbike"}).countDocuments();
  
    array.push(ElectronicDevices)
    array.push(ElectronicAccessories)
    array.push(TVHomeAppliances)
    array.push(HealthBeauty)
    array.push(BabiesToys)
    array.push(GroceriesPets)
    array.push(HomeLifestyle)
    array.push(WomenFashion)
    array.push(MenFashion)
    array.push(WatchesBagsJewelery)
    array.push(SportsOutdoor)
    array.push(AutomotiveMotorbike)

    res.send(array);

    });
  
  // Defined edit route
 MerchantRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Merchant.findById(id, function (err, merchant){
        res.json(merchant);
    });
  });
  
  //  Defined update route
  MerchantRoutes.route('/update/:id').post(function (req, res) {
      Merchant.findById(req.params.id, function(err, merchant) {
      if (!merchant)
        res.status(404).send("data is not found");
      else {
          merchant.title = req.body.title;
          merchant.image = req.body.image;
          merchant.category=req.body.category;
          merchant.rating=req.body.rating;
          merchant.oldprice=req.body.oldprice;
          merchant.price = req.body.price;
          merchant.company = req.body.company;
          merchant.info = req.body.info;
          merchant.inCart = req.body.inCart;
          merchant.count = req.body.count;
          merchant.total = req.body.total;
          merchant.bookingStatus=req.body.bookingStatus;
          merchant.orderStatus=req.body.orderStatus;
          merchant.minbookQuantity=req.body.minbookQuantity;
          merchant.maxBookQuantity=req.body.maxBookQuantity
          merchant.stock=req.body.stock
  
          merchant.save().then(merchant => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
MerchantRoutes.route('/delete/:id').get(function (req, res) {
      Merchant.findByIdAndRemove({_id: req.params.id}, function(err, merchant){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });
  //route to get specific product of particullar  router/merchant
 MerchantRoutes.get('/:merchantId', async (req, res) => {
		const orders = await Merchant.find({merchantId:req.params.merchantId}).sort('Date');
		res.send(orders);
    });
    
  // Manage Stock Route
  MerchantRoutes.route("/updateStock/:id").post(function(req, res) {
    Merchant.findById(req.params.id, function(err, product) {
      if (!product) res.status(404).send("data is not found");
      else {
        const data= product.stock
        product.stock=(data-req.body.stock)
  
        product
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
    
  module.exports = MerchantRoutes;