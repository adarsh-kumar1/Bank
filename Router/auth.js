require("dotenv").config({ path: "../.env" });
const jwt = require("jsonwebtoken");

const express = require("express");
const router = express.Router();

const authController = require("../Controller/auth")

router.post("/login", authController.Login);


router.post("/user/register", authController.userRegister);

module.exports = router;