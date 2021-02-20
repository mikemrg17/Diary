const mongoose = require('mongoose');
const { Schema } = mongoose;

const Reminder = new Schema({
    title: String,
    date: Date,
    priority: Boolean,
    description: String,
}, {collection : 'reminder'});

module.exports = mongoose.model('Reminder', Reminder);
