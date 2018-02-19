const router = require('express').Router();

router.get('/', (req, res)=>{
    res.send('Courses API work !')
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
