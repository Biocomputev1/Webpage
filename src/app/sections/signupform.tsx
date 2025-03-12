"use client"
import React, { useState } from 'react';

const SignupForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        const errors = { name: '', email: '', subject: '', message: '' };

        if (!formData.name.trim()) {
            errors.name = 'Name is required';
            valid = false;
        }
        if (!formData.email.trim()) {
            errors.email = 'Email is required';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Invalid email address';
            valid = false;
        }
        if (!formData.subject.trim()) {
            errors.subject = 'Subject is required';
            valid = false;
        }
        if (!formData.message.trim()) {
            errors.message = 'Message is required';
            valid = false;
        }

        setErrors(errors);
        return valid;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch('https://api.example.com/send-email', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        to: 'chief@biocomputeinc.com',
                        subject: `New Message from ${formData.name}`,
                        text: JSON.stringify(formData, null, 2)
                    })
                });

                if (response.ok) {
                    console.log('Form submitted successfully');
                    alert('Your message has been sent!');
                    setFormData({ name: '', email: '', subject: '', message: '' });
                } else {
                    console.error('Form submission failed');
                }
            } catch (error) {
                console.error('Error submitting form', error);
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-purple-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-semibold text-gray-700 text-center mb-4">Sign up for early access</h2>
                <p className="text-gray-500 text-center mb-6">We would love to have you on board</p>

                <form onSubmit={handleSubmit} className="space-y-4">
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
