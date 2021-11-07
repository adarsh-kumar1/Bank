require("dotenv").config({ path: "../.env" });
// const { validationResult } = require("express-validator");
const model = require("../Model/init-models");
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const otp = require("../utils/otp");
// const speakeasy = require("speakeasy");
// const sms = require("../utils/sms");
const { Op } = require("sequelize");
// const nodemailer = require("nodemailer");

const id = require("../Utils/generate_random_id");


exports.userRegister = async (req, res, next) => {
    const user_id = id();
    if (!user_id) {
        const err = new Error("Technical issue !!")
        err.statusCode = 422;
        next(err);
    }
    const first_name = req.body.first_name,
        last_name = req.body.last_name,
        mobile_no = req.body.mobile_no,
        email = req.body.email,
        date_of_birth = req.body.date_of_birth;
    try {
        const password = await bcrypt.hash(req.body.password, 12);
        await model.tbl_user.create({
            user_id: user_id,
            first_name: first_name,
            last_name: last_name,
            mobile_no: mobile_no,
            email: email,
            date_of_birth: date_of_birth,
            date_of_join: new Date(),
            verification: 1,
            password: password,
        })
        res.status(201).json({ message: "Registered Successfully" });
    } catch (err) {
        const errcode = err.parent ? err.parent.errno : 0;
        if (errcode === 1062) {
            err.message = "Mobile no, email must be unique !! ";
            err.statusCode = 406;
            next(err);
        }
        else if (err.errors) {
            err.statusCode = 422;
            next(err);
        }
        else {
            err.message = "Technical issue, Please try again !!"
            next(err);
        }
    }
}

exports.Login = async (req, res, next) => {
    const user_name = req.body.user_name;
    const password = req.body.password;
    const user_type = req.body.user_type;
    let user = "";
    try {
        if (user_type == "USER") {
            user = await model.tbl_user.findOne({
                where: {
                    [Op.or]: [
                        { mobile_no: user_name },
                        { email: user_name }
                    ]
                }
            })
        }
        else{
            console.log("ADmin login");
        }
        if (user == null) {
            const err = new Error("You are not registered !!")
            err.statusCode = 422;
            throw err;
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            const error = new Error("Wrong password");
            error.statusCode = 401;
            throw error;
        }

        res.status(200).json({
            user: user,
            // token: token,
            message: "Login Sucessfull",
        });

    } catch (err) {
        if (!err.statusCode) {
            err.message = "Technical issue, Please try again !!"
        }
        next(err);
    }
}