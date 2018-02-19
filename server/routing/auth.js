const router = require('express').Router();
const User = require('../models/user');

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
  };
  

router.post('/register', (req, res) => {
  //  console.log(req.body);
    let newUser = new User({
        email: req.body.email,
        lastname: req.body.lastname,
        name: req.body.name,
        pass: req.body.pass,
        pic: req.body.pic,
        userType: req.body.userType
    });
    
 //   console.log('newUser', newUser);

    newUser.save((err, user) => {
        if(err)
            sendError(err,user,500);
        else {
            response.data = user;
            response.message = "OK";
            res.json(response);    
        }

    })
});

module.exports = router;
