var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'liverpoolsajal@gmail.com',
    pass: 'arjun12345'
  }
});

var mailOptions = {
  from: 'liverpoolsajal@gmail.com',
  to: 'scousersajal@gmail.com',
  subject: 'Sending my first Email using Node.js',
  text: 'Its coming home its coming home'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent:  ${info.response}`);
  }
}); 