var express = require('express');
var router = express.Router();

const Reference = require('../Models/referenceSchema');

router.post('/Reference',async function (req,res,next) {
    try {
      const referenceData = await Reference.create(req.body);
  
      res.status(201).json({
        "status" : "Sucess",
        data : referenceData
      })
    } catch (error) {
      res.json({
        error
      })
    }
  });

  router.delete('/deleteReference/:id',async function (req,res,next) {
    try {
        const data = await Reference.findByIdAndDelete(req.params.id);
        console.log("your Reference is deleted");
    } catch (error) {
        console.log(error);
    }
  })

  router.patch('/editReference/:id',async function (req,res,next) {
    try {
        const  data = await Reference.findByIdAndUpdate(req.params.id,req.body);

        res.status(201).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
  })
  
  
  module.exports = router;