// server/routes/email.js
import express from 'express';
import sendEmail from '../config/sendgrid.js'
const router = express.Router();

router.post('/send', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error sending email' });
  }
});

export default router;


// backend/routes/email.js
// import express from 'express';
// import sendEmail from '../config/sendgrid.js';
// import { getPets, getFostersEmails } from '../services/dataService.js'; // Assuming you have these functions

// const router = express.Router();

// router.post('/send-pet-list', async (req, res) => {
//   try {
//     const pets = await getPets();
//     const fostersEmails = await getFostersEmails();

//     if (!pets.length || !fostersEmails.length) {
//       return res.status(400).json({ error: 'No pets or fosters found' });
//     }

//     const petList = pets.map(pet => `
//       <li>
//         <strong>Name:</strong> ${pet.name}<br>
//         <strong>Type:</strong> ${pet.type}<br>
//         <strong>Age:</strong> ${pet.age_month} months<br>
//         <strong>Size:</strong> ${pet.size}<br>
//         <strong>Gender:</strong> ${pet.gender}
//       </li>
//     `).join('');

//     const emailContent = `
//       <h1>Available Pets for Fostering</h1>
//       <ul>${petList}</ul>
//     `;

//     const subject = 'List of Available Pets for Fostering';

//     const sendEmailPromises = fostersEmails.map(email => 
//       sendEmail(email, subject, emailContent)
//     );

//     await Promise.all(sendEmailPromises);

//     res.status(200).json({ message: 'Emails sent successfully' });
//   } catch (error) {
//     console.error('Error sending email', error);
//     res.status(500).json({ error: 'Error sending email' });
//   }
// });

// export default router;
