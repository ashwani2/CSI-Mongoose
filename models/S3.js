const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const S3Schema = new mongoose.Schema({
    instance_id:{
    type:String,
    default:uuidv4()
    },
    ip_addr:{
        type:String,
    },
    cost:{
        type:String
    },
    Ram:{
        type:Number,
    },
    Capacity:{
        type:Number,
    },
    resource: {
        type: mongoose.Schema.ObjectId,
        ref: 'Resource',
        required: true
    },
    company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: true
    } 
  
})
module.exports = mongoose.model('S3', S3Schema);