var express = require('express');
var router = express.Router();

const ObjectiveData = require('../Models/objectiveSchema');

router.post('/ObjectiveData',async function (req,res,next) {
    try {
       const objectiveData = await ObjectiveData.create(req.body);
  
       res.status(201).json({
        "status" : "Sucess",
        data : objectiveData
       })
    } catch (error) {
      res.json({
        error
      })
    }
  });

  router.delete('/deleteObjective/:id',async function (req,res,next) {
    try {
        const data = await ObjectiveData.findByIdAndDelete(req.params.id);
        console.log("your ObjectiveData is deleted");
    } catch (error) {
        console.log(error);
    }
  })

  router.patch('/editObjective/:id',async function (req,res,next) {
    try {
        const  data = await ObjectiveData.findByIdAndUpdate(req.params.id,req.body);

        res.status(201).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
  })


module.exports = router;