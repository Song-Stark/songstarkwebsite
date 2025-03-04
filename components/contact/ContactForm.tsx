"use client";

import React, { useState } from 'react';
import { FaClock, FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission 
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            <span className="text-primary">Just say</span>
            <span className="text-secondary"> HELLO!</span>
          </h2>
          <p className="text-gray-600 mb-8">
          We'd love to hear from you!  Whether you want one of our services, it's a fresh project, an exciting idea, or a chance to collaborate, we're here and eager to be a part of your vision. Reach out anytime!
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Rwanda Office</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaMapMarkerAlt className="text-secondary text-lg" />
                    <h4 className="font-medium">Office</h4>
                  </div>
                  <p className="text-gray-600">KG 11 Ave, IKAZE HOUSE (Kisimenti), F5- 506, Kigali - RWANDA</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaClock className="text-secondary text-lg" />
                    <h4 className="font-medium">Working Hours</h4>
                  </div>
                  <p className="text-gray-600">We are available from 9am to 6pm CAT</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaEnvelope className="text-secondary text-lg" />
                    <h4 className="font-medium">E-mail</h4>
                  </div>
                  <a href="mailto:eric@songstark.com" className="text-secondary">eric@songstark.com</a>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <FaPhone className="text-secondary text-lg" />
                    <h4 className="font-medium">Phone</h4>
                  </div>
                  <a href="tel:0782892433" className="text-secondary">0782-892-433</a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 text-2xl">
              <a href="#" className="text-primary hover:text-secondary">
                <span className="sr-only">LinkedIn</span>
                <FaLinkedin />
              </a>
              <a href="#" className="text-primary hover:text-secondary">
                <span className="sr-only">Twitter</span>
                <FaTwitter />
              </a>
              <a href="#" className="text-primary hover:text-secondary">    
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary "
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary "
                required
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary "
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-32 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 shadow-lg"
              >
                Send now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
