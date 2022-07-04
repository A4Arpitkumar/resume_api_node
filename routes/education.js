var express = require('express');
var router = express.Router();

const Education = require('../Models/educationSchema');

router.post('/Education',async function (req,res,next) {
    try {
      const educationData = await Education.create(req.body);
  
      res.status(201).json({
        "status" : "Sucess",
        data : educationData
      })
    } catch (error) {
      res.json({
        error
      })
    }
  });
  

  router.delete('/deleteEducation/:id',async function (req,res,next) {
    try {
        const data = await Education.findByIdAndDelete(req.params.id);
        console.log("your Education is deleted");
    } catch (error) {
        console.log(error);
    }
  })

  router.patch('/editEducation/:id',async function (req,res,next) {
    try {
        const  data = await Education.findByIdAndUpdate(req.params.id,req.body);

        res.status(201).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
  })



  module.exports = router;

