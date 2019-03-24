const mongoose = require('mongoose');
const { logger } = require('../utils');
const { MongoDBSettings } = require('./../config');
mongoose.Promise = global.Promise;

// const MONGODB_URI = `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;

const options = {
  reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
  reconnectInterval: 500, // Reconnect every 500ms
  useNewUrlParser: true,
};

if (!MongoDBSettings.url) {
  logger.error('Please set MONGO_URI');
  process.exit(-1);
}

mongoose.connect(MongoDBSettings.url, options);

// mongoose.connect(MongoDBSettings.url, {
//   auth: {
//     user: username,
//     password: password
//   },
//   options,
// });

mongoose.connection.on('connected', () => {
  logger.info('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  logger.error('MongoDB connection error:', err);
  process.exit(-1);
});

mongoose.connection.on('disconnected', () => {
  logger.error('MongoDB disconnected');
});

module.exports = mongoose;
