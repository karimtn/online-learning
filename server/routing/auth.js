const router = require('express').Router();
const jwt = require('jsonwebtoken');
const User = require('../models/user');

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

router.post('/register', (req, res) => {
    //console.log(req.body);
    let newUser = new User({
        email: req.body.email,
        lastname: req.body.lastname,
        name: req.body.name,
        pass: req.body.pass,
        pic: req.body.pic,
        userType: req.body.userType
    });

    console.log('newUser', newUser);

    newUser.save((err, user) => {
        if(err)
            sendError(err,res,500);
        else {
            response.data = user;
            response.message = "OK";
            res.json(response);
        }

    })
});
router.post('/login', (req, res) => {
  const password = req.body.pass;
  User.findOne({ email: req.body.email }, (err, user) => {
      if (err) {
          return res.send({
              success: false,
              message: 'Error, please try again'
          });
      }

      if (!user) {
          return res.send({
              success: false,
              message: 'Error, Account not found'
          });
      }

      user.isPasswordMatch(password, user.pass, (err, isMatch) => {
          console.log(password);
          if (!isMatch) {
              return res.send({
                  success: false,
                  message: 'Error, Invalid Password'
              });
          }
          const token = jwt.sign({ user }, "SECRET", { expiresIn: 604800 });

          let returnUser = {
              name: user.name,
              email: user.email,
              id: user._id
          }

          return res.send({
              success: true,
              message: 'You can login now',
              user: returnUser,
              token
          });

      });
  });
});

module.exports = router;
