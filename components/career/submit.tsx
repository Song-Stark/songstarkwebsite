"use client";

import React, { useState } from 'react';
import { FaUpload } from 'react-icons/fa';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  cvFile: File | null;
  coverLetter: string;
}

const SubmitCV: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    cvFile: null,
    coverLetter: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [fileName, setFileName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFileName(selectedFile.name);
      setFormData({
        ...formData,
        cvFile: selectedFile,
      });
      setFileName(selectedFile.name);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {  
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phone', formData.phone);
    data.append('position', formData.position);
    data.append('coverLetter', formData.coverLetter);
    
    if (formData.cvFile) {
      data.append('resume', formData.cvFile);
    }

    try {
      const response = await fetch('/api/carreers', {
        method: 'POST',
        body: data,
      });
      const result = await response.json();
      if (response.ok) {
        setSubmitMessage('Application submitted successfully');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          position: '',
          cvFile: null,
          coverLetter: '',
        });
        setFileName('');
      } else {
        setSubmitMessage('Application submission failed');
      }
    } catch (error) {
      setSubmitMessage('An error occurred while submitting the application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4 ">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">No role fits</span>
          <span className="text-secondary"> you?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Just share your CV with us. We are always looking for talented people to join our team.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                placeholder="Position Applied For"
                className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
                required
              />
            </div>
          </div>

          <div>
            <div className="mt-1 flex justify-center px-6 py-4 border-2 border-gray-200 border-dashed rounded-lg bg-tertiary/30">
              <div className="text-center">
                <FaUpload className="mx-auto h-10 w-10 text-primary" />
                <div className="mt-2">
                  <label className="cursor-pointer text-primary hover:text-primary/90">
                    <span>{fileName || 'Upload your CV'}</span>
                    <input
                      type="file"
                      name="cvFile"
                      onChange={handleFileChange}
                      className="sr-only"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </label>
                </div>
                <p className="text-xs text-gray-500 mt-1">PDF, DOC up to 10MB</p>
              </div>
            </div>
          </div>

          <div>
            <textarea
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleInputChange}
              placeholder="Cover Letter"
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-tertiary/30 border-transparent focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-32 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <div className="text-center text-sm text-gray-500">
        <p className='mt-4'>{submitMessage}</p>
      </div>
    </div>
  );
};

export default SubmitCV;
