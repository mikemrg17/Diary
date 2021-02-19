const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    id: Number,
    name: String,
    password: String
});

module.exports = mongoose.model('User', User);
