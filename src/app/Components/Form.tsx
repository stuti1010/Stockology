"use client"; // Ensure this is at the top for client-side rendering

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
    phoneNumber: '', 
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch('https://adminbackend-iypc.onrender.com/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData), 
    });

    if (!response.ok) {
      throw new Error('Failed to submit the form');
    }

    const result = await response.json();
    alert(`Form submitted successfully: ${result.message}`);
    setFormData({
    name: '',
    email: '',
    comment: '',
    phoneNumber: '', 
    });
    
  };

  return (
    <div className=" mx-auto p-6 bg-green-600 rounded-lg shadow-md border-2 border-green-800 border-x-destructive-foreground scale-60 w-[440px]"> {/* scale-90 reduces the size by 10% */}
      <h1 className="md:text-4xl text-2xl font-bold text-white mb-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-white">Your phone number</label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            min="1000000000" 
            max="9999999999" 
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none" // Added appearance-none to remove the spinner
          />
        </div>
        <div>
          <label htmlFor="comment" className="block text-sm font-medium text-white">Your message</label>
          <textarea
            id="comment"
            name="comment"
            value={formData.comment}
            onChange={handleInputChange}
            required
            rows={4}
            className="mt-2 w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>
        </div >
        <div className="text-center">
          <button
            type="submit"
            className="px-10 py-2 bg-white text-green-500  font-semibold rounded-xl border-8 border-green-800 hover:border-white hover:bg-red-500 hover:text-white transition duration-200"
          >
            Submit
          </button>
        </div>
      </form>
</div>
);
}
