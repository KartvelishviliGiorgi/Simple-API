const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const messageRoutes = require('./api/routes/messages');
const userRouter = require('./api/routes/users');

mongoose.connect('mongodb://localhost:27017/mybase', {useNewUrlParser: true, useUnifiedTopology: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/messages', messageRoutes);
app.use('/users', userRouter);

module.exports = app;
