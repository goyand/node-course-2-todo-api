var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // Promise
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
