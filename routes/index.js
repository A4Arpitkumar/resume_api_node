var express = require('express');
var router = express.Router();
const PersonalDetail = require('../Models/personalDetails_Schema');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/personalDetails',async function (req,res,next) {
  try {
    const dataUser = await PersonalDetail.create(req.body);

    res.status(201).json({
      "status" : "Sucess",
      data : dataUser
    })
  } catch (error) {
    res.json({
      error
    })
  }
});

router.delete('/deletePersonalData/:id',async function (req,res,next) {
  try {
      const data = await PersonalDetail.findByIdAndDelete(req.params.id);
      console.log("your PersonalDetail is deleted");
  } catch (error) {
      console.log(error);
  }
})

router.patch('/editPersonalData/:id',async function (req,res,next) {
  try {
      const  data = await PersonalDetail.findByIdAndUpdate(req.params.id,req.body);

      res.status(201).json({
          data
      })
  } catch (error) {
      console.log(error);
  }
})

module.exports = router;
