"use client";

import React, { useState } from 'react';
import { FaClock, FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema)
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Email sent successfully!");
        reset();
      } else {
        alert(`Failed to send email: ${result.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the email.");
    }
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
            We&apos;d love to hear from you! Whether you want one of our services, it&apos;s a fresh project, an exciting idea, or a chance to collaborate, we&apos;re here and eager to be a part of your vision. Reach out anytime!
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
              <a 
                href="#" 
                className="text-primary hover:text-secondary"
                aria-label="Follow us on LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="#" 
                className="text-primary hover:text-secondary"
                aria-label="Follow us on Twitter"
              >
                <FaTwitter />
              </a>
              <a 
                href="#" 
                className="text-primary hover:text-secondary"
                aria-label="Follow us on Instagram"
              >    
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <input
                {...register('name')}
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
              />
              {errors.name && <p className="text-red-500 mt-1">{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register('email')}
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
              />
              {errors.email && <p className="text-red-500 mt-1">{errors.email.message}</p>}
            </div>
            <div>
              <textarea
                {...register('message')}
                placeholder="Message"
                rows={6}
                className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
              />
              {errors.message && <p className="text-red-500 mt-1">{errors.message.message}</p>}
            </div>
            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-32 bg-secondary text-white px-6 py-3 rounded-lg hover:bg-secondary/90 transition-colors duration-200 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send now"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
