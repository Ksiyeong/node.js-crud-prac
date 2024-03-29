"use strict";

const CustomError = require('../utils/CustomError');
const { verifyAccessToken } = require('../utils/jwtUtils');

module.exports = {
    matchAccessTokenAndEmailByParams: (req, res, next) => {
        try {
            const { email } = verifyAccessToken(req.headers['authorization']);
            if (email === req.params.email) next();
            else throw new CustomError('Unauthorized', 403, "TC403", 'ID에 대한 접근 권한이 없습니다.');
        } catch (error) {
            next(error);
        }
    },

    matchAccessTokenAndEmailByBody: (req, res, next) => {
        try {
            const { email } = verifyAccessToken(req.headers['authorization']);
            if (email === req.body.email) next();
            else throw new CustomError('Unauthorized', 403, "TC403", 'ID에 대한 접근 권한이 없습니다.');
        } catch (error) {
            next(error);
        }
    },
};
