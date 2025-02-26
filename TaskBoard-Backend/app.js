// Root package import.
const express = require('express');
// Middleware packages import.
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');
const multer = require('multer');
const cookieParser = require('cookie-parser');
// Global packages import.
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Local module import.
const router = require('./src/routes/api'); 
// Utility packages required to import in other files.
    // const bcrypt = require('bcrypt');
    // const jsonwebtoken = require('jsonwebtoken');
    // const validator = require('validator');


//********** PACKAGES AND MODULE IMPLEMENTATION **********


// Implement root package
const app = express();
// Implement security middleware packages.
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(hpp());
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 }));
// Implement others middleware packages.
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true}));
// app.use(multer());
app.use(cookieParser());
// Implement globally applied packages.
dotenv.config();
let url = process.env.DATABASE_CONNECTION_STRING;
let option = {
  user: process.env.DATABASE_USER_NAME,
  pass: process.env.DATABASE_PASSWORD,
  autoIndex: true,
};
mongoose.connect(url, option)
    .then(() => console.log('Database Connection is Successful'))
    .catch(error => console.error('Database connection failed: ', error));
// Implement routes
app.get('/', (req, res)=>{
    res.status(200).json({ status: "ok", data: "Every thing is working fine." });
})
app.use("/api/v1", router);
app.use("*", (req, res) => {
    res.status(404).json({ status: "fail", data: "Not Found" });
});


// Exporting Express Functionality to index.js file
module.exports = app;
