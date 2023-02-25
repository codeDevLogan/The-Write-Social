const mongoose = require('mongoose');

// For ease of eyes this will ignore the deprications.
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/usersPosts', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;