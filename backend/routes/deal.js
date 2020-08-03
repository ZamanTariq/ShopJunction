const DealRoutes=require('express').Router();

//Model Require//
let Deal=require('../models/deal.model');
var multer  = require('multer')
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../public/deal/')
  },
  filename: function (req, file, cb) {
    let a = file.originalname.split('.')
    cb(null, `${file.fieldname}-${Date.now()}.${a[a.length-1]}`)
  }
})
 
var upload = multer({ storage: storage })

  // Defined edit route
  DealRoutes.route('/edit/:id').get(function (req, res) {
    let id = req.params.id;
    Deal.findById(id, function (err, merchant){
        res.json(merchant);
    });
  });
  
  //  Defined update route
  DealRoutes.route('/update/:id').post(function (req, res) {
      Deal.findById(req.params.id, function(err, merchant) {
      if (!merchant)
        res.status(404).send("data is not found");
      else {
         
          merchant.img1 = req.body.img1;
        
  
          merchant.save().then(merchant => {
            res.json('Update complete');
        })
        .catch(err => {
              res.status(400).send("unable to update the database"+err);
        });
      }
    });
  });
  
 
//-------------------------------------GET---------------------------------//
DealRoutes.get("/", (req, res, next) => {
    Deal.find().then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(400).send("unable to get from database"+err);
  });
});


  //-----------------------------------NEW POST-----------------------//
  DealRoutes.post('/add', upload.array('imgCollection', 3), (req, res, next) => {
    const reqFiles = [];
    
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(req.files[i].filename)
    }

    const user = new Deal({
       
        imgCollection: reqFiles
    });

    user.save().then(result => {
        res.status(200).json({
            message: "Done upload!",
            userCreated: {
                
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})
  // Defined delete | remove | destroy route
DealRoutes.route('/delete/:id').get(function (req, res) {
    Deal.findByIdAndRemove({_id: req.params.id}, function(err, admin){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

  module.exports = DealRoutes;