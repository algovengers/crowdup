const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_PROVIDER,
  auth: {
    user: process.env.EMAIL_ID,
    pass: process.env.EMAIL_PASSWORD,
  },
  secure: false,
  tls: {
    rejectUnauthorized: false,
  },
});

async function sendMail({ otp, amount, startupid, email }) {
  try {
    const msgbody = `
    <div style="font-family: Arial, sans-serif; background-color: #f5f5f5; margin: 0; padding: 0;">

    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #ffffff; border-radius: 10px; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);">
      <h1 style="color: #333333;">One-Time Password (OTP) for CrowdUp <b>Payment Verification</b></h1>
        
      <p>Thank you for choosing CrowdUp to support startups!</p>
    
      <p>Your OTP for verification is: <strong style="color: #000000;">${otp}</strong></p>
      <p>Startup UID: <strong style="color: #000000;">${startupid}</strong></p>
      <p>Amount: <strong style="color: #000000;">${amount}</strong></p>
    
      <p>Please use the OTP provided above to complete your verification process. If you did not request this OTP, please ignore this email.</p>
    
      <p>Thank you,<br>
      CrowdUp Team</p>
    </div>
    
    </div>
`;
    const info = await transporter.sendMail({
      from: `"Crowdup" <${process.env.EMAIL_ID}>`, // sender address
      to: email.trim(), // list of receivers
      subject: "OTP for Crowdup Payment Verification", // Subject line
      //   text: "Rere woopds iif. ooop", // plain text body
      html: msgbody, // html body
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true };
  } catch (error) {
    console.log(error);
    return { success: false };
  }
}

module.exports = sendMail;
