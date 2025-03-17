"use client"
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';


const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        const errors: any = {};
        if(!formData.name) errors.name = 'Name is required';
        if(!formData.email) errors.email = 'Email is required';
        if(!formData.subject) errors.subject = 'Subject is required';
        if(!formData.message) errors.message = 'Message is required';
        return errors
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            return setErrors(validationErrors);
        }
        setErrors({});
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: "3a5649f6-b025-413b-9d54-fd2029961e6a",
              ...formData,
            }),
          });
          const result = await response.json();
          if (result.success) {
            setSuccess(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
          }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-purple-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Sign up for early access</h2>
                <p className="text-gray-500 text-center mb-6">We would love to have you on board</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {success && 
                        <Alert severity="success">
                            <AlertTitle>Success</AlertTitle>
                            Thank you for signing up! We will get back to you soon.
                        </Alert>
                    }
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 h-24"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>

                    <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded-lg hover:bg-purple-600">
                        Send
                    </button>
                </form>

                {/* Social Icons */}
                <div className="flex justify-center mt-6 space-x-4">
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-facebook-f text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-blue-500">
                        <i className="fab fa-linkedin-in text-xl"></i>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-pink-500">
                        <i className="fab fa-instagram text-xl"></i>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SignupForm;
