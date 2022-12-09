const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
resource_name:{
    type:String,
    unique:true,
    required:true,
}
});



module.exports = mongoose.model('Resource', ResourceSchema);