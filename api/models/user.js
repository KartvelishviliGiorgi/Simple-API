const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    ip_address: {type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);
