const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let User = new Schema({
   name: {
      type: String
   },
   companyName: {
      type: String
   },
   email: {
      type: String
   }
}, {
   collection: 'users'
})
module.exports = mongoose.model('User', User);