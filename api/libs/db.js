const mongoose = require('mongoose');

module.exports = {

  connect: (mongoUrl) => {
    mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false })
    .then(()=> {
      console.log('Database connected');
    })
    .catch((error)=> {
      console.log('Error connecting to database');
    });
  }

}
