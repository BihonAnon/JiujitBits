const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');

// Schema to create Student model
const userSchema = new Schema(
  {
    username: {
      type: {String, trim:true },
      required: true,
      max_length: 50,
    },
    email: {
      type: String,
      required: true,
      max_length: 50,
      validate: [isEmail, 'invalid email'] //Email Validation
    },
    friends: {
      type: String,
      required: true,
      max_length: 50,
    },
    thoughts: [thoughtsSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const User = model('user', userSchema);

module.exports = User;
