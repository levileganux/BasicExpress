const mongoose = require('mongoose');
const moment = require('moment')
const {Schema} = mongoose;


const users = new Schema({
    name:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    },
    createAt:{
        type:Date,
        require: true,
        default: moment 
    }
})

module.exports = mongoose.model('users', users);