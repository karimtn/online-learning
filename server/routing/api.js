const router = require('express').Router();
const nodemailer = require('nodemailer');
const ObjectID=require('mongodb').ObjectId;
const bodyParser=require('body-parser');

const Contact = require('../models/contact');

router.use(bodyParser.json());

// Response handling
let response = {
  status: 200,
  data: [],
  message: null
};

// Error handling
const sendError = (err, res, code) => {
  response.status = code;
  response.message = typeof err == 'object' ? err.message : err;
  res.status(code).json(response);
};


/*router.get('/', (req, res)=>{
    res.send('Courses API work !')
});*/

// Send contact us
router.post('/contact', (req, res)=>{
let newContact = Contact({
  name: req.body.name,
  email: req.body.email,
  subject: req.body.subject,
  message: req.body.message
  });

  console.log('newContact', newContact);

  newContact.save((err, user) => {
      if(err)
          sendError(err,res,500);
      else {
          response.data = user;
          response.message = "OK";
          res.json(response);
      }

  });

  // send email

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'youremail@gmail.com',
      pass: 'yourpassword'
    }
  });
  
  var mailOptions = {
    from: req.body.email,
    to: 'myfriend@yahoo.com',
    subject: req.body.subject,
    text: req.body.message
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

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
