
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async (to, subject, text) => {
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  };

  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error('Error sending email', error);
    if (error.response) {
      console.error(error.response.body);
    }
  }
};

export default sendEmail;


// // backend/config/sendgrid.js
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// const sendEmail = async (to, subject, html) => {
//   const msg = {
//     to,
//     from: 'your_verified_sender_email@example.com', // Use the email address or domain you verified with SendGrid
//     subject,
//     html,
//   };

//   try {
//     await sgMail.send(msg);
//     console.log('Email sent to', to);
//   } catch (error) {
//     console.error('Error sending email', error);
//     if (error.response) {
//       console.error(error.response.body);
//     }
//   }
// };

// export default sendEmail;
