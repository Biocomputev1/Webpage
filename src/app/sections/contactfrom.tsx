'use client'
import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import { AlertTitle } from '@mui/material';

export type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm (){
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const errors: any = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.subject) errors.subject = 'Subject is required';
    if (!formData.message) errors.message = 'Message is required';
    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
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
  }

  return (
    <main className="bg-[#EFE4F4] min-h-screen flex items-center justify-center">
      <div className="mt-6">
        <div className="grid sm:grid-cols-2 items-start gap-12 p-8 mx-auto max-w-4xl bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          <div>
            <h1 className="text-gray-800 text-3xl font-bold">Let us Talk</h1>
            <p className="text-sm text-gray-500 mt-4">We do love to hear about your opinion</p>
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Email</h2>
              <ul className="mt-4">
                <li className="flex items-center">
                  <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 479.058 479.058">
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000" />
                    </svg>
                  </div>
                  <a href="mailto:recipient@example.com" className="text-[#007bff] text-sm ml-4">
                    <small className="block">Mail</small>
                    <strong>chief@biocomputeinc.com</strong>
                  </a>
                </li>
              </ul>
            </div>
  
            <div className="mt-12">
              <h2 className="text-gray-800 text-base font-bold">Socials</h2>
              <ul className="flex mt-4 space-x-4">
                <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://www.linkedin.com/company/biocompute-inc/about/">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='#007bff'
                      viewBox="0 0 511 512">
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="ml-auo space-y-4">
            {success && 
              <Alert severity="success">
                <AlertTitle>Success</AlertTitle>
              We&apos;ve received your message! We&apos;ll get back to you soon.
              </Alert>}
            <div className="relative">
              <input 
                type='text' 
                placeholder='Name'
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full text-gray-800 rounded-md py-2.5 px-4 pl-10 border text-sm outline-none focus:border-blue-500" 
              />
              {errors.name && <div className="text-red-500 text-sm">{errors.name}</div>}
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
              </svg>
            </div>
            <div className="relative">
              <input 
                type='email' 
                placeholder='Email'
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full text-gray-800 rounded-md py-2.5 px-4 pl-10 border text-sm outline-none focus:border-blue-500"
              />
              {errors.email && <div className="text-red-500 text-sm">{errors.email}</div>}
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
              </svg>
            </div>
            <input 
              type='text' 
              placeholder='Subject'
              name='subject'  
              value={formData.subject}
              onChange={handleChange}
              className="w-full text-gray-800 rounded-md py-2.5 px-4 border text-sm outline-none focus:border-blue-500" 
            />
            {errors.subject && <div className="text-red-500 text-sm">{errors.subject}</div>}
            <textarea 
              placeholder='Message'
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-none focus:border-blue-500"
            />
            {errors.message && <div className="text-red-500 text-sm">{errors.message}</div>}
            <button type='submit'
              className="text-white bg-purple-400 hover:bg-blue-400 rounded-md text-sm px-4 py-2.5 w-full !mt-6">Send</button>
          </form>
        </div>
      </div>
    </main>
  );
};