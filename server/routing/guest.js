const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser=require('body-parser');

router.use(bodyParser.json());

router.get('/:id', (req, res)=>{//search guest courses
    let N={_id:ObjectID(req.params.id)};
    coursesDb.findOne(N).then((rslt)=>{
            response.data=rslt;
            response.message="ok";
            res.json(response);
        }).catch((err)=>{
            sendError(err,res,501);
        })
            res.se('course selected');
});
    
router.get('/courses', (req, res)=>{//guest courses
    coursesDb.findOne(N).then((rslt)=>{
            response.data=rslt.title;
            response.message="ok";
            res.json(response);
        }).catch((err)=>{
            sendError(err,res,501);
        })
            res.se('course selected');
});


    // Error handling
const sendError = (err, res, code) => {
    response.status = code;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(code).json(response);
  };
  
  // Response handling
  let response = {
    status: 200,
    data: [],
    message: null
  };

module.exports=router;