const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    message: {type: String, required: true},
    social_media: {type: String, required: true},
    viewers: {type: Number, default: null},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', messageSchema);
