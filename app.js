const express = require('express');
const cors = require('cors');
const body_parser = require('body-parser');
const userRouter = require('./routers/user.router');
const drugRouter = require('./routers/drug.router');

const app=express();
app.use(cors());
app.use(body_parser.json());
app.use('/',userRouter);
app.use('/',drugRouter);

module.exports =app;