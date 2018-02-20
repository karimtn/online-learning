const router = require('express').Router();

const ObjectID=require('mongodb').ObjectId;
const bodyParser=require('body-parser');

router.use(bodyParser.json());

router.get('/', (req, res)=>{
    res.send('Courses API work !')
});

// Send contact us
router.post('/contact', (req, res)=>{

});

// show contact us
router.get('/contact', (req, res)=>{

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


module.exports = router;
