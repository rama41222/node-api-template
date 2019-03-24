const {
  APP_NAME,
  PORT,
  HOST,
  NODE_ENV,
  MONGODB_URI,
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_DIALECT,
  DB_LOGGING,
  DB_POOL_MAX,
  DB_POOL_MIN,
  DB_CONNECTION_IDLE,
  PASS_HASH_ROUNDS,
  TOKEN_SECRET,
  ACCESS_TOKEN_ALGO,
  ACCESS_TOKEN_EXPIRY,
  REFRESH_TOKEN_ALGO,
  REFRESH_TOKEN_EXPIRY,
  
} = process.env;

const BasicConfiguration = {
  App:{
    NAME: APP_NAME || 'sample-service',
    PORT: PORT || 3001,
    HOST: HOST || 'localhost',
    ENV: NODE_ENV || 'development'
  },
  JwtSettings: {
    Algorithm: ACCESS_TOKEN_ALGO || 'HS256',
    ExpiresIn: ACCESS_TOKEN_EXPIRY || '1d',
  },
  MongoDBSettings: {
    url: MONGODB_URI || 'mongodb://localhost/bbd-auth-bak',
  },
  HashSettings: {
    SaltRounds: 3,
  }
};

module.exports = Object.freeze(BasicConfiguration);
