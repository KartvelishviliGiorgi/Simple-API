const express = require('express');
const router = express.Router();

const Message = require('../models/message');

router.get('/', async(req, res, next) => {
    try {
        const messages = await Message.find();
        res.status(200).json(messages); 
    } catch (err) {
        res.status(500).json({error: err})
    }
});

router.get('/:messageId', async(req, res, next) => {
    const id = req.params.messageId;
    try {
        const message = await Message.findById(id);
        res.status(200).json(message);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.post('/', async(req, res, next) => {
    const mess = req.body.message;
    const socialMedia = req.body.social_media;
    const message = new Message({
        message: mess,
        social_media: socialMedia
    });
    try {
        const savedMessage = await message.save();
        res.status(201).json(savedMessage);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.delete('/:messageId', async(req, res, next) => {
    const id = req.params.messageId;
    try {
        const deletedMessage = await Message.deleteOne({_id: id});
        res.status(200).json(deletedMessage);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.patch('/:messageId', async(req, res, next) => {
    const id = req.params.messageId;
    const mess = req.body.message;
    const viewers = req.body.viewers;
    try {
        const updatedMessage = await Message.updateOne(
            { _id: id }, 
            {$set: {message: mess, viewers: viewers, updated_at: new Date}}
        );
        res.status(200).json(updatedMessage);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = router;
