const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   firstName: {
      type: Number
   },
   lastName: {
      type: Number
   },
   email: {
      type: Number
   }
}, {
   collection: 'users'
})
module.exports = mongoose.model('User', User);