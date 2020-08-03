const mongoose=require('mongoose');
//  For Schema //
const Schema =mongoose.Schema;
let Deal = new Schema({
  
    imgCollection: {
      type:Array
    },
   
  },{
      collection: 'deal',
      timestamps:true
  });
  
  module.exports = mongoose.model('Deal', Deal);