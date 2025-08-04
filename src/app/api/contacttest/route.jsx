import {NextResponse, NextRequest} from 'next/server';
const nodemailer = require('nodemailer');

export async function POST(request){
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
    const mymail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

    console.log("dealing with request");
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const linkedin = formData.get('linkedin');
    const message = formData.get('message');

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        tls: {
            ciphers: 'SSLv3',
            rejectUnauthorized: false
        },
        auth: {
            user: username,
            pass: password
        }
    });

    try{
        const mail = await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: mymail,
            replyTo: email,
            subject: `Response from Website Contact form`,
            text: message,
            html: 
            `<div style = "background-color: #EFE4F4; padding: 40px 0; font-family: Arial, sans-serif; line-height: 1.6; color: #333;border-radius: 8px;">
                <div style="
                        max-width: 600px;
                        margin: auto;
                        background-color: #fff;
                        border-radius: 8px;
                        padding: 30px;
                        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                        border: 1px solid #e0d0ea;
                    ">
                    <div style=
                        "text-align: center; margin-bottom: 20px; background-color: white; 
                        padding: 20px;
                        border-top-left-radius: 8px;
                        border-top-right-radius: 8px;
                        text-align: center;"
                        >
                        <img 
                            src="https://cdn.prod.website-files.com/64a285c0af324ae978642ccd/664c7b766adb6a6b69e18925_biocompute.png" 
                            alt="BioCompute Logo" 
                            style="height: 100px; margin-bottom: 20px;" 
                        />
                    </div>
                    <h2 style="text-align: center; color: #5C2D91; margin-bottom: 30px;">
                        New Form Submission
                    </h2>
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 8px 0;"><strong>Name:</strong></td>
                            <td style="padding: 8px 0;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Email:</strong></td>
                            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #5C2D91;">${email}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>LinkedIn:</strong></td>
                            <td style="padding: 8px 0;"><a href="${linkedin}" style="color: #5C2D91;" target="_blank">${linkedin}</a></td>
                        </tr>
                        <tr>
                            <td style="padding: 8px 0;"><strong>Subject:</strong></td>
                            <td style="padding: 8px 0;">${subject}</td>
                        </tr>
                    </table>
                    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;" />
                    <div>
                        <p style="margin: 0 0 8px;"><strong>Message:</strong></p>
                        <p style="background: white; padding: 15px; border-radius: 6px; white-space: pre-line; border: 1px solid #e2d6f2;">
                        ${message}
                        </p>
                    </div>

                    <p style="font-size: 12px; color: #888; text-align: center; margin-top: 40px;">
                        This message was sent from your website's contact form.
                    </p>
                </div>
            </div>`
        })
        return NextResponse.json({message: 'Email sent successfully!'}, {status: 200});
    }
    catch(error){
        console.error('Error sending email:', error);
        return NextResponse.json({message: 'Failed to send email'}, {status: 500});
    }
} 