const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const crypto = require("crypto");
const mongoose = require("mongoose");


const User = require("./Models/Usermodel");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());

// ==========================
// MONGODB CONNECTION
// ==========================
mongoose
  .connect(
    "mongodb+srv://resumeanalyser:resumeanalyser@cluster0.eb466vs.mongodb.net/resumeDB"
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

// ==========================
// NODEMAILER CONFIG
// ==========================
require("dotenv").config();
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false,

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
transporter.verify((error, success) => {
  if (error) {
    console.log("VERIFY ERROR:", error);
  } else {
    console.log("Email Server Ready");
  }
});

// ==========================
// SEND OTP API
// ==========================

app.post("/send-otp", async (req, res) => {
  try {
    const { email } = req.body;

    // GENERATE OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    console.log("Generated OTP:", otp);

    // SEND EMAIL
    const info = await transporter.sendMail({
      from: "gowrishankar7729@gmail.com", // VERIFIED SENDER EMAIL
      to: email,
      subject: "OTP Verification",
      html: `<div><h2>Your OTP Code</h2><h1>${otp}</h1></div>`,
    });

    console.log("EMAIL SENT:", info.response);

    res.json({
      success: true,
      message: "OTP Sent Successfully",
    });

  } catch (error) {

  console.log("FULL BACKEND ERROR:");
  console.log("EMAIL ERROR:", error.message);

  res.status(500).json({
    success: false,
    message: error.message,
  });
}
});

// TEST ROUTE
app.get("/", (req, res) => {
  res.send("Server Running");
});

// SERVER
app.listen(5000, () => {
  console.log("Server Running On Port 5000");
});