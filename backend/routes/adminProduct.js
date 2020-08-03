const adminRoutes=require('express').Router();

//Model Require//
let adminProduct=require('../models/adminProduct.model');
var multer  = require('multer')
const cloudinary = require('cloudinary').v2
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/upload/')
  },
  filename: function (req, file, cb) {
    let a = file.originalname.split('.')
    cb(null, `${file.fieldname}-${Date.now()}.${a[a.length-1]}`)
  }
})

cloudinary.config({
  cloud_name: 'shopinn',
  api_key: '443728241943539',
  api_secret: '-M_eFvzV9TSDdaUDVa5ge_iHjWc'
})
var upload = multer({ storage: storage })

adminRoutes.route('/add').post(upload.single('image'),function (req, res) {
  console.log(req.file)
  cloudinary.uploader.upload(req.file.path).then(function(data){  
    console.log(data.url)  
       
    let admin = new adminProduct({
      adminId:req.body.adminId,
      title:req.body.title,
      image:data.url,
      category:req.body.category,
      rating:req.body.rating,
      oldprice:req.body.oldprice,
      price:req.body.price,
      company:req.body.company,
      info:req.body.info,
      inCart:req.body.inCart,
      count:req.body.count,
      total:req.body.total,
      adminPhone:req.body.adminPhone,
      stock:req.body.stock
      

    
    });
    admin.save()
      .then(merchant => {
        res.status(200).json({'Admin': 'Product in added successfully'});
        console.log(admin);
      })
      .catch(err => {
      res.status(400).send("unable to save to database");
      });
  });
}) 
   //route to get specific product of particullar  router/merchant
   adminRoutes.route('/products/:id').get(async function (req, res) {
    try {
      const admin = await adminProduct.find({adminId:req.params.id})
      
        res.send(admin);
      
    } catch (error) {
      console.log(error)
    }
     
  
    
  });
   // Manage Stock Route
   adminRoutes.route("/updateStock/:id").post(function(req, res) {
    adminProduct.findById(req.params.id, function(err, product) {
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
    
  // Defined get data(index or listing) route
  adminRoutes.route('/').get(async function (req, res) {
    try {
      const admin = await adminProduct.find().sort('-currentDate')
      
        res.json(admin);
      
    } catch (error) {
      console.log(error)
    }
     
  
    
  });

  //-----------------------SORT BY TITLE-------------------------------//
  adminRoutes.route('/sort/title').get(function (req, res) {
    adminProduct.find(function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      res.json(merchants);
    }
  }).sort({title:1});
});

adminRoutes.route('/sort/title/des').get(function (req, res) {
  adminProduct.find(function(err, merchants){
  if(err){
    console.log(err);
  }
  else {
    res.json(merchants);
  }
}).sort({title:-1});
});

  //-----------------------SORT BY Price-------------------------------//
  adminRoutes.route('/sort/price').get(function (req, res) {
    adminProduct.find(function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      res.json(merchants);
    }
  }).sort({price:1});
});

adminRoutes.route('/sort/price/des').get(function (req, res) {
  adminProduct.find(function(err, merchants){
  if(err){
    console.log(err);
  }
  else {
    res.json(merchants);
  }
}).sort({price:-1});
});

  //-----------------------SORT BY TITLE-------------------------------//
  adminRoutes.route('/sort/title').get(function (req, res) {
    adminProduct.find(function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      res.json(merchants);
    }
  }).sort({title:1});
});

adminRoutes.route('/sort/title/des').get(function (req, res) {
  adminProduct.find(function(err, merchants){
  if(err){
    console.log(err);
  }
  else {
    res.json(merchants);
  }
}).sort({title:-1});
});

  // Defined edit route
  adminRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    adminProduct.findById(id, function (err, admin){
        res.json(admin);
    });
  });
  
  //  Defined update route
  adminRoutes.route('/update/:id').post(function (req, res) {
      adminProduct.findById(req.params.id, function(err, admin) {
      if (!admin)
        res.status(404).send("data is not found");
      else {
          admin.title = req.body.title;
          admin.image = req.body.image;
          admin.category=req.body.category;
          admin.rating=req.body.rating;
          admin.oldprice=req.body.oldprice;
          admin.price = req.body.price;
          admin.company = req.body.company;
          admin.info = req.body.info;
          admin.inCart = req.body.inCart;
          admin.count = req.body.count;
          admin.total = req.body.total;
          admin.stock= req.body.stock
  
          admin.save().then(admin => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database");
        });
      }
    });
  });
  
  // Defined delete | remove | destroy route
  adminRoutes.route('/delete/:id').get(function (req, res) {
      adminProduct.findByIdAndRemove({_id: req.params.id}, function(err, admin){
          if(err) res.json(err);
          else res.json('Successfully removed');
      });
  });

  //--------Category Counter-----//
  adminRoutes.get('/CategoryCounter', async (req, res) => {
    
    const array =[];
    const ElectronicDevices = await adminProduct.find({"category":"Electronic Devices"}).countDocuments();
    const ElectronicAccessories = await adminProduct.find({"category":"Electronic Accessories"}).countDocuments();
    const TVHomeAppliances = await adminProduct.find({"category":"TV & Home Appliances"}).countDocuments();
    const HealthBeauty = await adminProduct.find({"category":"Health & Beauty"}).countDocuments();
    const BabiesToys= await adminProduct.find({"category":"Babies & Toys"}).countDocuments();
    const GroceriesPets = await adminProduct.find({"category":"Groceries & Pets"}).countDocuments();
    const HomeLifestyle= await adminProduct.find({"category":"Home & Lifestyle"}).countDocuments();
    const WomenFashion = await adminProduct.find({"category":"Women Fashion"}).countDocuments();
    const MenFashion= await adminProduct.find({"category":"Men Fashion"}).countDocuments();
    const WatchesBagsJewelery= await adminProduct.find({"category":"Watches, Bags & Jewelery"}).countDocuments();
    const SportsOutdoor= await adminProduct.find({"category":"Sports & Outdoor"}).countDocuments();
    const AutomotiveMotorbike = await adminProduct.find({"category":"Automotive & Motorbike"}).countDocuments();
  
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

        //  -------------------------CATEGORIZE BY CATEGORY---------------------------//
  adminRoutes.route("/category/electronic").get(function(req,res){
    adminProduct.find({"category":"Electronic Devices"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  
  adminRoutes.route("/category/electronic-accessories").get(function(req,res){
    adminProduct.find({"category":"Electronic Accessories"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/tv-home-appliances").get(function(req,res){
    adminProduct.find({"category":"TV & Home Appliances"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
adminRoutes.route("/category/health-beauty").get(function(req,res){
    adminProduct.find({"category":"Health & Beauty"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
adminRoutes.route("/category/babies-toys").get(function(req,res){
    adminProduct.find({"category":"Babies & Toys"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
adminRoutes.route("/category/groceries-pets").get(function(req,res){
    adminProduct.find({"category":"Groceries & Pets"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/home-life-style").get(function(req,res){
    adminProduct.find({"category":"Home & Lifestyle"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/women-fashion").get(function(req,res){
    adminProduct.find({"category":"Women Fashion"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/men-fashion").get(function(req,res){
    adminProduct.find({"category":"Men Fashion"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/watches-bags-jewelery").get(function(req,res){
    adminProduct.find({"category":"Watches, Bags & Jewelery"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/sports-outdoor").get(function(req,res){
    adminProduct.find({"category":"Sports & Outdoor"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/automotive-motorbike").get(function(req,res){
    adminProduct.find({"category":"Automotive & Motorbike"},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  adminRoutes.route("/category/rating").get(function(req,res){
    adminProduct.find({"rating":{$gt:"0"}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    })
  })
  //---------------------------CATEGORIZE BY PRICE----------------------------------------//



  //---------------------------CATEGORIZE BY PRICE >=2500
  adminRoutes.route("/category/price/greater-equal-to-2500").get(function(req,res){
    adminProduct.find({"price":{$gte:2500}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })
  //---------------------------CATEGORIZE BY PRICE <=2500
  adminRoutes.route("/category/price/less-equal-to-2500").get(function(req,res){
    adminProduct.find({"price":{$lte:2500}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })


//---------------------------CATEGORIZE BY PRICE >=5000
  adminRoutes.route("/category/price/greater-equal-to-5000").get(function(req,res){
    adminProduct.find({"price":{$gte:5000}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })
  //-----------------------CATEGORIZE BY PRICE <=5000
  adminRoutes.route("/category/price/less-equal-to-5000").get(function(req,res){
    adminProduct.find({"price":{$lte:5000}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })
  //-----------------------CATEGORIZE BY PRICE B/W 5000-10000--------------------//
  adminRoutes.route("/category/price/between/5000-10000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 5000,
          $lte: 10000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })

   //-----------------------CATEGORIZE BY PRICE B/W 10000-15000--------------------//
   adminRoutes.route("/category/price/between/10000-15000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 10000,
          $lte: 15000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })
    //-----------------------CATEGORIZE BY PRICE B/W 15000-20000--------------------//
    adminRoutes.route("/category/price/between/15000-20000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 15000,
            $lte: 20000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:1})
    })
      //-----------------------CATEGORIZE BY PRICE B/W 20000-25000--------------------//
   adminRoutes.route("/category/price/between/20000-25000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 20000,
          $lte: 25000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:1})
  })
    //-----------------------CATEGORIZE BY PRICE B/W 25000-30000--------------------//
    adminRoutes.route("/category/price/between/25000-30000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 25000,
            $lte: 30000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:1})
    })

       //-----------------------CATEGORIZE BY PRICE B/W 30000-35000--------------------//
       adminRoutes.route("/category/price/between/30000-35000").get(function(req,res){
        adminProduct.find({
          price: {
              $gte: 30000,
              $lte: 35000
          }
      },function(err, merchants){
          if(err){
            console.log(err);
          }
          else {
            if(merchants.length>0){
              res.json(merchants);
            }
            else{
              res.json("Empty")
            }
           
          }
        }).sort({price:1})
      })
         //-----------------------CATEGORIZE BY PRICE B/W 35000-40000--------------------//
    adminRoutes.route("/category/price/between/35000-40000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 35000,
            $lte: 40000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:1})
    })
         //-----------------------CATEGORIZE BY PRICE B/W 40000-45000--------------------//
         adminRoutes.route("/category/price/between/40000-45000").get(function(req,res){
          adminProduct.find({
            price: {
                $gte: 40000,
                $lte: 45000
            }
        },function(err, merchants){
            if(err){
              console.log(err);
            }
            else {
              if(merchants.length>0){
                res.json(merchants);
              }
              else{
                res.json("Empty")
              }
             
            }
          }).sort({price:1})
        })
             //-----------------------CATEGORIZE BY PRICE B/W 45000-50000--------------------//
    adminRoutes.route("/category/price/between/45000-50000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 45000,
            $lte: 50000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:1})
    })
    //-------------------CATEGORIZE BY PRICE >50000-----------------------//
    adminRoutes.route("/category/price/greater-than-50000").get(function(req,res){
      adminProduct.find({"price":{$gte:50000}},function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:1})
    })
      //-------------------CATEGORIZE BY PRICE <50000-----------------------//
      adminRoutes.route("/category/price/less-than-50000").get(function(req,res){
        adminProduct.find({"price":{$lte:50000}},function(err, merchants){
          if(err){
            console.log(err);
          }
          else {
            if(merchants.length>0){
              res.json(merchants);
            }
            else{
              res.json("Empty")
            }
           
          }
        }).sort({price:1})
      })

    //-----------------------------END-----------------------------//
    //---------------------------CATEGORIZE BY PRICE----------------------------------------//



  //---------------------------CATEGORIZE BY PRICE >=2500
  adminRoutes.route("/category/price/dec/greater-equal-to-2500").get(function(req,res){
    adminProduct.find({"price":{$gte:2500}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })
  //---------------------------CATEGORIZE BY PRICE <=2500
  adminRoutes.route("/category/price/dec/less-equal-to-2500").get(function(req,res){
    adminProduct.find({"price":{$lte:2500}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })


//---------------------------CATEGORIZE BY PRICE >=5000
  adminRoutes.route("/category/price/dec/greater-equal-to-5000").get(function(req,res){
    adminProduct.find({"price":{$gte:5000}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })
  //-----------------------CATEGORIZE BY PRICE <=5000
  adminRoutes.route("/category/price/dec/less-equal-to-5000").get(function(req,res){
    adminProduct.find({"price":{$lte:5000}},function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })
  //-----------------------CATEGORIZE BY PRICE B/W 5000-10000--------------------//
  adminRoutes.route("/category/price/dec/between/5000-10000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 5000,
          $lte: 10000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })

   //-----------------------CATEGORIZE BY PRICE B/W 10000-15000--------------------//
   adminRoutes.route("/category/price/dec/between/10000-15000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 10000,
          $lte: 15000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })
    //-----------------------CATEGORIZE BY PRICE B/W 15000-20000--------------------//
    adminRoutes.route("/category/price/dec/between/15000-20000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 15000,
            $lte: 20000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:-1})
    })
      //-----------------------CATEGORIZE BY PRICE B/W 20000-25000--------------------//
   adminRoutes.route("/category/price/dec/between/20000-25000").get(function(req,res){
    adminProduct.find({
      price: {
          $gte: 20000,
          $lte: 25000
      }
  },function(err, merchants){
      if(err){
        console.log(err);
      }
      else {
        if(merchants.length>0){
          res.json(merchants);
        }
        else{
          res.json("Empty")
        }
       
      }
    }).sort({price:-1})
  })
    //-----------------------CATEGORIZE BY PRICE B/W 25000-30000--------------------//
    adminRoutes.route("/category/price/dec/between/25000-30000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 25000,
            $lte: 30000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:-1})
    })

       //-----------------------CATEGORIZE BY PRICE B/W 30000-35000--------------------//
       adminRoutes.route("/category/price/dec/between/30000-35000").get(function(req,res){
        adminProduct.find({
          price: {
              $gte: 30000,
              $lte: 35000
          }
      },function(err, merchants){
          if(err){
            console.log(err);
          }
          else {
            if(merchants.length>0){
              res.json(merchants);
            }
            else{
              res.json("Empty")
            }
           
          }
        }).sort({price:-1})
      })
         //-----------------------CATEGORIZE BY PRICE B/W 35000-40000--------------------//
    adminRoutes.route("/category/price/dec/between/35000-40000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 35000,
            $lte: 40000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:-1})
    })
         //-----------------------CATEGORIZE BY PRICE B/W 40000-45000--------------------//
         adminRoutes.route("/category/price/dec/between/40000-45000").get(function(req,res){
          adminProduct.find({
            price: {
                $gte: 40000,
                $lte: 45000
            }
        },function(err, merchants){
            if(err){
              console.log(err);
            }
            else {
              if(merchants.length>0){
                res.json(merchants);
              }
              else{
                res.json("Empty")
              }
             
            }
          }).sort({price:-1})
        })
             //-----------------------CATEGORIZE BY PRICE B/W 45000-50000--------------------//
    adminRoutes.route("/category/price/dec/between/45000-50000").get(function(req,res){
      adminProduct.find({
        price: {
            $gte: 45000,
            $lte: 50000
        }
    },function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:-1})
    })
    //-------------------CATEGORIZE BY PRICE >50000-----------------------//
    adminRoutes.route("/category/price/dec/greater-than-50000").get(function(req,res){
      adminProduct.find({"price":{$gte:50000}},function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      }).sort({price:-1})
    })
      //-------------------CATEGORIZE BY PRICE <50000-----------------------//
      adminRoutes.route("/category/price/dec/less-than-50000").get(function(req,res){
        adminProduct.find({"price":{$lte:50000}},function(err, merchants){
          if(err){
            console.log(err);
          }
          else {
            if(merchants.length>0){
              res.json(merchants);
            }
            else{
              res.json("Empty")
            }
           
          }
        }).sort({price:-1})
      })

    //-----------------------------END-----------------------------//


     //-------------------RANDOM 4 ITEMS-----------------------//
                          //Electronic Devices//
     adminRoutes.route("/category/relatedproduct/electronicdevice").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Electronic Devices" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    //Electronic Accesories//
    adminRoutes.route("/category/relatedproduct/electronicaccessories").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Electronic Accessories" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

     //TV & Home Appliances//
     adminRoutes.route("/category/relatedproduct/tv&homeappliances").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"TV & Home Appliances" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    //MEN FASHION
    adminRoutes.route("/category/relatedproduct/menfashion").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Men Fashion" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    //WOMEN FASHION
    adminRoutes.route("/category/relatedproduct/womenfashion").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Women Fashion" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    // TOYS
    adminRoutes.route("/category/relatedproduct/babytoys").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Babies & Toys" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })

    //BAG

    adminRoutes.route("/category/relatedproduct/watchbags&jewelery").get(function(req,res){
      adminProduct.aggregate( [ [
        { $match: { "category":"Watches, Bags & Jewelery" } },
        { $sample: { size: 6 } }
    ] ],function(err, merchants){
        if(err){
          console.log(err);
        }
        else {
          if(merchants.length>0){
            res.json(merchants);
          }
          else{
            res.json("Empty")
          }
         
        }
      })
    })
                  //Health & Beauty

adminRoutes.route("/category/relatedproduct/home&lifestyle").get(function(req,res){
  adminProduct.aggregate( [ [
    { $match: { "category":"Home & Lifestyle" } },
    { $sample: { size: 6 } }
] ],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

//PET & GROCESSORIES

adminRoutes.route("/category/relatedproduct/groceries&pets").get(function(req,res){
  adminProduct.aggregate( [ [
    { $match: { "category":"Groceries & Pets" } },
    { $sample: { size: 6 } }
] ],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

//PET & GROCESSORIES

adminRoutes.route("/category/relatedproduct/sports&outdoor").get(function(req,res){
  adminProduct.aggregate( [ [
    { $match: { "category":"Sports & Outdoor" } },
    { $sample: { size: 6 } }
] ],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})
//AUTO BIKES

adminRoutes.route("/category/relatedproduct/autobikes").get(function(req,res){
  adminProduct.aggregate( [ [
    { $match: { "category":"Automotive & Motorbike" } },
    { $sample: { size: 6 } }
] ],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

//Health & Beauty

adminRoutes.route("/category/relatedproduct/health&beauty").get(function(req,res){
  adminProduct.aggregate( [ [
    { $match: { "category":"Health & Beauty" } },
    { $sample: { size: 6 } }
] ],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})

adminRoutes.route("/leastprice").get(function(req,res){
  adminProduct.aggregate(
    [ { $limit:10 },
      {$sort : { price : -1 } }  ]
,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})



adminRoutes.route("/toprandomproduct").get(function(req,res){
  adminProduct.aggregate(
    [  { $sample:{size:10} },
      {$sort : { rating : -1 } }  ]
,function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})


adminRoutes.route("/toprecentproduct").get(function(req,res){
  adminProduct.find({},function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  }).sort({currentDate:-1}).limit(10)
})



adminRoutes.route("/total").get(function(req,res){
  adminProduct.aggregate([
{ $group: {_id : null, sum : { $sum: "$price" } } }],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})


adminRoutes.route("/totalbycategory").get(function(req,res){
  adminProduct.aggregate([{ $group:
    { _id : '$category', sum : { $sum: "$price" }, count:{$sum:1}}
  }],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})



adminRoutes.route("/month").get(function(req,res){
  adminProduct.aggregate([{$group: {
    _id: { month: { $month: "$createdAt" } }, 
    total: {$sum: "$price"},
    count: { $sum: 1 }
}}],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})


adminRoutes.route("/d").get(function(req,res){
  adminProduct.aggregate([{ $group:
    { _id : '$title', sum : { $sum: "$price" }, count:{$sum:1}}
  }],function(err, merchants){
    if(err){
      console.log(err);
    }
    else {
      if(merchants.length>0){
        res.json(merchants);
      }
      else{
        res.json("Empty")
      }
     
    }
  })
})
  module.exports = adminRoutes;