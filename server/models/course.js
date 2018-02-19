const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    title:{
        type: String
    },
    pic: {
        type: String
    },
    content:{
        type: String
    },
    category:{
        type: String
    },
    likes:{
        type: Number
    },
    comments:[{
        userId: String,
        data: String,
        date: String
    }],
    view:{
        type: Number
    }
});

module.exports = mongose.model('Course', CourseSchema);
