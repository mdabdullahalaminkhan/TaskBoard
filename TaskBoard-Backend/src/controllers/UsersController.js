const UsersModel = require("../models/UsersModel");
const jwt = require("jsonwebtoken");
const OTPModel = require("../models/OTPModel");
const SendEmailUtility = require("../utility/SendEmailUtility");

exports.registration = async (req, res) => {
  try {
    let data = await UsersModel.create(req.body);
    res.status(200).json({ status: "Registration is Successful", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.login = async (req, res) => {
  try {
    let data = await UsersModel.aggregate([
      { $match: req.body },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
        },
      },
    ]);

    if (data.length > 0) {
      let token = jwt.sign(
        { exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, data: data[0].email },
        process.env.AUTHENTICATION_KEY
      );
      res.status(200).json({ status: "success", token: token, data: data[0] });
    } else {
      res.status(401).json({ status: "unauthorized" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.profileUpdate = async (req, res) => {
  try {
    let data = await UsersModel.updateOne({ email: req.headers["email"] }, req.body);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.profileDetails = async (req, res) => {
  try {
    let data = await UsersModel.aggregate([
      { $match: { email: req.headers["email"] } },
      {
        $project: {
          _id: 1,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
          password: 1,
        },
      },
    ]);
    res.status(200).json({ status: "success", data: data });
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.RecoverVerifyEmail = async (req, res) => {
  let email = req.params.email;
  let OTPCode = Math.floor(100000 + Math.random() * 900000);

  try {
    let UserCount = await UsersModel.aggregate([
      { $match: { email: email } },
      { $count: "total" },
    ]);

    if (UserCount.length > 0) {
      await OTPModel.create({ email: email, otp: OTPCode });
      let SendEmail = await SendEmailUtility(
        email,
        `Your PIN Code is= ${OTPCode}`,
        "Task Manager PIN Verification"
      );
      res.status(200).json({ status: "success", data: SendEmail });
    } else {
      res.status(200).json({ status: "fail", data: "No User Found" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.RecoverVerifyOTP = async (req, res) => {
  let { email, otp } = req.params;
  let status = 0;
  let statusUpdate = 1;

  try {
    let OTPCount = await OTPModel.aggregate([
      { $match: { email: email, otp: otp, status: status } },
      { $count: "total" },
    ]);

    if (OTPCount.length > 0) {
      let OTPUpdate = await OTPModel.updateOne(
        { email: email, otp: otp, status: status },
        { status: statusUpdate }
      );
      res.status(200).json({ status: "success", data: OTPUpdate });
    } else {
      res.status(200).json({ status: "fail", data: "Invalid OTP Code" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};

exports.RecoverResetPass = async (req, res) => {
  let { email, OTP, password } = req.body;
  let statusUpdate = 1;

  try {
    let OTPUsedCount = await OTPModel.aggregate([
      { $match: { email: email, otp: OTP, status: statusUpdate } },
      { $count: "total" },
    ]);

    if (OTPUsedCount.length > 0) {
      let PassUpdate = await UsersModel.updateOne({ email: email }, { password: password });
      res.status(200).json({ status: "success", data: PassUpdate });
    } else {
      res.status(200).json({ status: "fail", data: "Invalid Request" });
    }
  } catch (err) {
    res.status(400).json({ status: "fail", data: err });
  }
};
