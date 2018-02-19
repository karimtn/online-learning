const router = require('express').Router();
const MongoClient=require('mongodb').MongoClient;
const ObjectID=require('mongodb').ObjectId;
const bodyParser=require('body-parser');

router.use(bodyParser.json());
// router.get('/', (req, res)=>{
//     res.send('Courses API work !')
// });


//conection to db

const connection=(closure)=>{
  return MongoClient.connect('mongodb://localhost:27017',(err,client)=>{

  if(err) console.log(err);
  let db=client.db('mooc');
  closure(db);
  })
}

//get courses from db

  router.get('/cours/listcours', (req, res)=>{
    connection((db) => {
        db.collection('cours')
            .find({})
            .toArray(function(err, data){
                if (err) throw err;
                res.json(data);
            });
    });
});
//get courses by id

router.get ('/cours/listcours/:id',(req,res)=>{


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
