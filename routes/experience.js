var express = require('express');
var router = express.Router();

const Experience = require('../Models/experienceSchema');


router.post('/Experience',async function (req,res,next) {
    try {
      const experienceData = await Experience.create(req.body);
  
      res.status(201).json({
        "status" : "Sucess",
        data :experienceData
      })
    } catch (error) {
      res.json({
        error
      })
    }
  });

  router.delete('/deleteExperience/:id',async function (req,res,next) {
    try {
        const data = await Experience.findByIdAndDelete(req.params.id);
        console.log("your Experience is deleted");
    } catch (error) {
        console.log(error);
    }
  })

  router.patch('/editExperience/:id',async function (req,res,next) {
    try {
        const  data = await Experience.findByIdAndUpdate(req.params.id,req.body);

        res.status(201).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
  })

  module.exports = router;
