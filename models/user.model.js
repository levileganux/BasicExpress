const mongoose = require('mongoose');
const {Schema} = mongoose;


const users = new Schema({
    name:{
        type:String,
        require: true
    },
    age:{
        type:Number,
        require: true
    }
})

module.exports = mongoose.model('users', users);