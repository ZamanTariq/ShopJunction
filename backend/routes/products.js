// const {Product, validate} = require('../models/product'); 
// const {Category} = require('../models/category');
// const {newMerchant} = require('../models/newMerchant.model');
// const express = require('express');
// const router = express.Router();

// router.get('/', async (req, res) => {
//   const products = await Product.find().sort('name');
//   res.send(products);
// });

// router.post('/', async (req, res) => {
//   const { error } = validate(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);

//   const category = await Category.findById(req.body.categoryId);
//   if (!category) return res.status(400).send('Invalid category.');

//   const merchant = await newMerchant.findById(req.body.merchantId);
//   if (!merchant) return res.status(400).send('Invalid merchant.');


//   let product = new Product({ 
//     title: req.body.title,
//     category: {
//       _id: category._id,
//       name: category.name
//     },
//     numberInStock: req.body.numberInStock,
//     merchant:{
//      _id:merchant._id,
//      merchantName:merchant.merchantName,
//      email:merchant.email,
//      phoneNumber:merchant.phoneNumber,
//      password:merchant.password,
//      shopName:merchant.shopName,
//      shopDetail:merchant.shopDetail,
//      cnic:merchant.cnic,
//      shopAddress:merchant.shopAddress
//     }
    
//   });
//   product = await product.save();
  
//   res.send(product);
// });

// router.put('/:id', async (req, res) => {
//   const { error } = validate(req.body); 
//   if (error) return res.status(400).send(error.details[0].message);


//   const category = await Category.findById(req.body.categoryId);
//   if (!category) return res.status(400).send('Invalid category.');

//   const product = await Product.findByIdAndUpdate(req.params.id,
//     { 
//       title: req.body.title,
//       category: {
//         _id: category._id,
//         name: category.name
//       },
//       numberInStock: req.body.numberInStock,
     
//     }, { new: true });

//   if (!product) return res.status(404).send('The product with the given ID was not found.');
  
//   res.send(product);
// });

// router.delete('/:id', async (req, res) => {
//   const product = await Product.findByIdAndRemove(req.params.id);

//   if (!product) return res.status(404).send('The product with the given ID was not found.');

//   res.send(product);
// });

// router.get('/:id', async (req, res) => {
//   const product = await Product.findById(req.params.id);

//   if (!product) return res.status(404).send('The Product with the given ID was not found.');

//   res.send(product);
// });

// module.exports = router; 