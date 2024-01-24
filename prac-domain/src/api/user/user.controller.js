"use strict";

const userService = require('./user.service');

module.exports = {
    postUser: async (req, res, next) => {
        try {
            const { email, name, password } = req.body;
            const user = {
                email: email,
                name: name,
                password: password
            }
            await userService.createUser(user);
            res.status(201).json(user);
            next();
        } catch (error) {
            next(error);
        }
    },

    getUser: async (req, res, next) => {
        try {
            const user = await userService.findUser(req.params.email);
            res.status(200).json(user);
            next();
        } catch (error) {
            next(error);
        }
    },

    patchUser: async (req, res, next) => {
        try {
            req.body.email = req.params.email;
            const updatedUser = await userService.updateUser(req.body);
            res.status(200).json(updatedUser);
            next();
        } catch (error) {
            next(error);
        }
    },
};
