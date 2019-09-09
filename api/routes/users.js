const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = require('../models/user');

router.get('/', async(req, res, next) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.get('/:userId', async(req, res, next) => {
    const id = req.params.userId;
    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.post('/', async(req, res, next) => {
    const ip = req.body.ip_address;
    const user = new User({
        _id: mongoose.Types.ObjectId(),
        ip_address: ip
    });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

router.delete('/:userId', async(req, res, next) => {
    const id = req.params.userId;
    try {
        const deletedUser = await User.deleteOne({_id: id});
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json({error: err});
    }
});

module.exports = router;
