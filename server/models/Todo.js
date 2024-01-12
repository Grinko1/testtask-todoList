const { Schema, model } = require('mongoose');

const schema = new Schema({
  title: { type: String },
  text: { type: String },
  completed: { type: Boolean },
  status: { type: String },
});

module.exports = model('Todo', schema);
