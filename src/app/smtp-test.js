import nodemailer from 'nodemailer';

(async () => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    await transporter.verify();
    console.log('SMTP Connection Successful!');
  } catch (error) {
    console.error('SMTP Connection Failed:', error);
  }
})();
