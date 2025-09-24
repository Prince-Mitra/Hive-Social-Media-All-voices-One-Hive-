import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();
const transporter = nodemailer.createTransport({
  service: "Gmail",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = async (to, otp) => {
  await transporter.sendMail({
    from: `${process.env.EMAIL}`,
    to,
    subject: "Hive: Your OTP Inside 🐝",

    html: `
<p>Your OTP for Hive password reset is <b>${otp}</b>. It expires in 5 minutes, so use it wisely! ⏰</p>
<p>If you didn’t request this, maybe someone typed your number by mistake… or maybe you just like collecting random OTPs for fun! 😎</p>
<p><b>All voices, one Hive</b></p>
`,
  });
};

export default sendMail;
