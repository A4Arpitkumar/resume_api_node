var express = require('express');
var router = express.Router();

const SkillsData = require('../Models/skillSchema');

router.post('/Skills', async function (req,res,next) {
    try {
      const skillData = await SkillsData.create(req.body);
  
      res.status(201).json({
        "status" : "Sucess",
        data : skillData
      })
    } catch (error) {
      res.json({
        error
      })
    }
  });

  router.delete('/deleteSkills/:id',async function (req,res,next) {
    try {
        const data = await SkillsData.findByIdAndDelete(req.params.id);
        console.log("your SkillsData is deleted");
    } catch (error) {
        console.log(error);
    }
  })

  router.patch('/editSkills/:id',async function (req,res,next) {
    try {
        const  data = await SkillsData.findByIdAndUpdate(req.params.id,req.body);

        res.status(201).json({
            data
        })
    } catch (error) {
        console.log(error);
    }
  })


module.exports = router;


