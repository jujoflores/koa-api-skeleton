const uuid = require('node-uuid');
const Product = require('../models/product');

const excludedFields = '-_id -__v';

const productController = {

  create: async (ctx) => {
    const { name } = ctx.request.body;
    if (!name) ctx.throw(422, 'Name required.');

    try {

      const product = new Product({
        uuid: uuid.v4(),
        name: name,
      });
  
      const newProduct = await product.save();
      ctx.body = newProduct;  
    } catch (error) {
      throw error;
    }
  },

  findAll: async (ctx) => {
    try {
      const products = await Product.find().select(excludedFields);
      ctx.body = products;
    } catch (error) {
      throw error;
    }
  },

  findOne: async (ctx) => {
    const { id } = ctx.params;
    const condition = { uuid: id };

    try {
      const product = await Product.findOne(condition).select(excludedFields);
      if (!product) ctx.throw(404, 'Product not found.');

      ctx.body = product;
    } catch (error) {
      throw error;
    }
  },

  update: async (ctx) => {
    const { id } = ctx.params;
    const { name } = ctx.request.body;
    if (!name) ctx.throw(422, 'Name required.');

    const condition = { uuid: id };
    const options = { new: true };

    try {
      const product = {
        name: name,
      };
      const updatedProduct = await Product.findOneAndUpdate(condition, product, options);
      if (!updatedProduct) ctx.throw(404, 'Product not found.');

      ctx.body = updatedProduct;
    } catch (error) {
      throw error;
    }
  },

  delete: async (ctx) => {
    try {
      const body = ctx.request.body;
      const condition = { uuid: ctx.params.id };
      const product = await Product.findOneAndDelete(condition);
      if (!product) ctx.throw(404, 'Product not found.');

      ctx.body = product;
    } catch (error) {
      throw error;
    }
  }

};

module.exports =  productController;
