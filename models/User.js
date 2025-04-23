const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const UserSchema = Schema({
  name: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = model('User', UserSchema, 'users');