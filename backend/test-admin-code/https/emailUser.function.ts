// exports.sendMail = (req, res) => {}

// if (!req.body.subject || !req.body.text) {
//     res.status(422).send({
//       error: {
//         code: 422,
//         message: "Missing arguments"
//       }
//     });
//     return;
//   }

// const nodeMailer = require("nodemailer");

// const transporter = nodeMailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 465,
//   secure: true,
//   auth: {
//     type: "OAuth2",
//     user: process.env.GMAIL_ADDRESS,
//     serviceClient: process.env.CLIENT_ID,
//     privateKey: process.env.PRIVATE_KEY.replace(/\n/g, "\\n")
//   }
// });

// const mailOptions = {
//     from: req.body.from || process.env.MAIL_FROM,
//     to: req.body.to || process.env.MAIL_TO,
//     bcc: req.body.bcc || process.env.MAIL_BCC,
//     subject: req.body.subject,
//     text: req.body.text
//   };

//   transporter
//     .sendMail(mailOptions)
//     .then(() => {
//       res.status(200).send({
//         data: {
//           code: 200,
//           message: "Mail sent"
//         }
//       });
//     })
//     .catch(e => {
//       res.status(500).send({
//         error: {
//           code: 500,
//           message: e.toString()
//         }
//       });
//     });
