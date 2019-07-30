const config = {
  mongoUrl: process.env.MONGO_URL || 'mongodb://localhost/myproducts',
  serverPort: process.env.SERVER_PORT || 4000,
};

module.exports = config;
