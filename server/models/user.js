const mongoose = require('mongoose');
const { Schema } = mongoose;

const User = new Schema({
    id: Number,
    name: String,
    password: String
}, {collection : 'users'});

module.exports = mongoose.model('User', User);
