const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  uuid: { type: String, required: true },
  name: { type: String, required: true, max: 100 },
});

module.exports = mongoose.model('Product', ProductSchema);
