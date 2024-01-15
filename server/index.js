const express = require("express");
const dbConnect = require("./config/database.js");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const authRouter = require('./routes/authRoute.js');
const bodyParser = require("body-parser");

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});