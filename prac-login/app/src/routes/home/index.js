"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require("./home.ctrl");
const { verifyAccessTokenAndMatchId } = require("../../middlewares/jwt/jwtUtils");

// 프론트엔드
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);

// 백엔드
router.post("/login", ctrl.process.login);

router.post("/users", ctrl.process.register);
router.delete("/users", verifyAccessTokenAndMatchId, ctrl.process.deleteUser);
router.patch("/users", verifyAccessTokenAndMatchId, ctrl.process.patchUser);

module.exports = router;