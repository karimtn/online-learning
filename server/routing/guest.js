const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

const url='mongodb://localhost:27017/';
const dbn='coursesDb';

const con=((closure)=>{
    return MongoClient.connect(url+dbn,(err,client)=>{
        if (err) throw err;
        let db=client.db(dbn);
        closure(db);
    })
});

router.get('/:id',(req,res)=>{ //guest courses
    let N={_id:ObjectID(req.params.id)};
    con((db)=>{
        db.collection(dbn).findOne(N).then((rslt)=>{
            response.data=rslt;
            response.message="ok";
            res.json(response);
        }).catch((err)=>{
            sendError(err,res,501);
        })
            console.log('course selected');
        })
    });
module.exports=router;