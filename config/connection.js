const { connect, connection, set } = require('mongoose');

// For ease of eyes this will ignore the deprications.
const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/usersPosts';
  
connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;