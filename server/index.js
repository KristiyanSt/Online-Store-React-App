const express = require("express");
const dbConnect = require("./config/database.js");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 4000;
const app = express();
const authRouter = require('./routes/authRoute.js');
const productRouter = require('./routes/productRoute.js');
const bodyParser = require("body-parser");
const { errorHandler, notFound } = require("./middlewares/errorHandler.js");
const cookieParser = require("cookie-parser");
const morgan = require('morgan');

dbConnect();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev')); 

app.use("/api/user",authRouter);
app.use("/api/product", productRouter);
app.use(notFound);
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});