require("dotenv").config({ path: "./.env" });
const express = require("express")
const app = new express();
const path = require("path");
const sequelize = require("./Utils/database");
const authRoute = require("./Router/auth");
const adminRoute = require("./Router/admin");
const userRoute = require("./Router/user");
const isAuth = require("./Controller/is_auth");


app.use(express.json());



app.use("/auth", authRoute);


app.use((error, req, res, next) => {
    console.log("error", error); //display error for identification
    if (error.code === "EBADCSRFTOKEN") {
        error.statusCode = 403;
        error.message = "Access Denied";
    }
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    console.log("massage", message);
    // console.log("data", data);
    res.status(status).json({ message: message, data: data });
});

let port = process.env.PORT;

if (port == "" || port == null) {
    port = 5000;
}

sequelize
    .authenticate()
    .then(() => {
        const server = app.listen(port, () => {
            console.log(`Server started successfully`);
        });
    })
    .catch((err) => {
        console.log(err);
    });