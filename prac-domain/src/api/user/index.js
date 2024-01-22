"use strict";

const { Router } = require('express');
const { getUser, postUser } = require('./user.controller');

const users = Router();

users.post('/', postUser);
users.get('/:userId', getUser);

module.exports = users;