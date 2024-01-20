const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;

  // Replace these values with your own email and SMTP server details
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.email,
      pass: config.password,
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@example.com",
    subject: "New Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Internal Server Error");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("OK");
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
