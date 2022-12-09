const mongoose = require('mongoose');

const TcsSchema = new mongoose.Schema({
      website: {
        type: String,
        match: [
          /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
          'Please use a valid URL with HTTP or HTTPS'
        ]
      },
      phone: {
        type: String,
        maxlength: [20, 'Phone number can not be longer than 20 characters']
      },
      email: {
        type: String,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          'Please add a valid email'
        ]
      },
      address: {
        type: String,
        required: [true, 'Please add an address']
      },
      founding_year:{
        type:Number,
        required:true
      },
      no_of_employees:{
        type:Number,
        required:true
      },
      company: {
        type: mongoose.Schema.ObjectId,
        ref: 'Company',
        required: true
      }
  
})
module.exports = mongoose.model('TCS', TcsSchema);