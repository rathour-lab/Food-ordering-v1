const nodemailer = require("nodemailer");

const GmailSMTP = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

module.exports = GmailSMTP;