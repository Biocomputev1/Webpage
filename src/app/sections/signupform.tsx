"use client"
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

export type FormData = {
  name: string;
  email: string;
  linkedin: string;
  cname: string;
  message: string;
};

const SignupForm: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        linkedin: '',
        cname: '',
        message: ''
    });

    const [errors, setErrors] = useState<{[key: string]: string}>({});
    const [success, setSuccess] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validate = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const errors: any = {};
        if(!formData.name) errors.name = 'Name is required';
        if(!formData.email) errors.email = 'Email is required';
        if(!formData.linkedin) errors.linkedin = 'Linkedin URL is required'
        if(!formData.cname) errors.cname = 'Company name is required';
        if(!formData.message) errors.message = 'Message is required';
        return errors
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        const validationErrors = validate();
        if(Object.keys(validationErrors).length > 0){
            setLoading(false);
            return setErrors(validationErrors);
        }
        setErrors({});
        const formData = new FormData(e.target as HTMLFormElement);
        try{
            const response = await fetch('/apis/signuptest', {
                method: 'post',
                body: formData,
            });
           if(response.ok){
                const responseData = await response.json();
                console.log(responseData['message']);
                setSuccess(true);
                setErrors({});
                setFormData({
                  name: '',
                  email: '',
                  cname: '',
                  linkedin: '',
                  message: ''
                });
              setTimeout(() => setSuccess(false), 5000);
            } else {
                const errorText = await response.text(); // HTML or plain error
                //throw new Error(`HTTP ${response.status}: ${errorText.slice(0, 100)}`);
                console.error(`Server Error: ${errorText}`);
                setErrors({ submit: 'Submission failed. Please try again later.' });
            }
          //  const responseData = await response.json();
        }
        catch(error) {
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form. Please try again later.');
        }finally{
          setLoading(false);
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
                            autoComplete='name'
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
                            autoComplete='email'
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="url"
                            name="linkedin"
                            placeholder="Linkedin"
                            autoComplete='url'
                            value={formData.linkedin}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.linkedin && <p className="text-red-500 text-sm">{errors.linkedin}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            name="cname"
                            placeholder="Company name"
                            autoComplete='organization'
                            value={formData.cname}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300"
                        />
                        {errors.cname && <p className="text-red-500 text-sm">{errors.cname}</p>}
                    </div>

                    <div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            autoComplete='off'
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-purple-300 h-24"
                        />
                        {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                    </div>
                    {errors.submit && (<div className="text-red-600 text-sm font-medium">{errors.submit}</div>)}
                    <button type='submit'
                        className="flex items-center justify-center gap-2 text-white bg-purple-400 hover:bg-purple-500 transition duration-300 ease-in-out rounded-md text-sm px-4 py-2.5 w-full mt-6"
                        disabled={loading}>
                        {loading && (
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                            </svg>
                        )}
                        {loading ? 'Sending...' : 'Send'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupForm;
