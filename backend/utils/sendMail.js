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
<h1>At last configed nodemailer</h1>
<h3 style="color:green">La lalalalala!</h3>
<strong>It works! ${otp} ${amount} ${startupid}</strong>
`;
    const info = await transporter.sendMail({
      from: `"Crowdup" <${process.env.EMAIL_ID}>`, // sender address
      to: "subharthi76@gmail.com", //email.trim(), // list of receivers
      subject: "At lastt!", // Subject line
      text: "Rere woopds iif. ooop", // plain text body
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
