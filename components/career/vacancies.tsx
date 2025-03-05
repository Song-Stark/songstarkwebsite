"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface VacancyProps {
  title: string;
  location: string;
  type: string;
  description: string;
  deadline: {
    from: string;
    to: string;
  };
}

const VacancyCard: React.FC<VacancyProps> = ({ title, location, type, description, deadline }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-lg p-6 mb-4 border border-gray-200 hover:border-primary transition-colors"
  >
    <div className="flex justify-between items-start mb-2">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <div className="text-sm text-gray-600">
        <p className="font-medium text-secondary mb-1">Application Period</p>
        <p className="text-right">{new Date(deadline.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - </p>
        <p className="text-right font-semibold">{new Date(deadline.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
      </div>
    </div>
    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
      <div className="flex items-center">
        <FaMapMarkerAlt className="mr-2 text-secondary" />
        {location}
      </div>
      <div className="flex items-center">
        <FaClock className="mr-2 text-secondary" />
        {type}
      </div>
    </div>
    <p className="text-gray-600">{description}</p>
    <button className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
      Apply Now
    </button>
  </motion.div>
);

const Vacancies: React.FC = () => {
  const vacancies = [
    {
      title: "Senior Software Engineer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced software engineer to join our team...",
      deadline: {
        from: "2024-03-01T00:00:00",
        to: "2024-03-31T23:59:59"
      }
    },
    {
      title: "Graphic Designer",
      location: "Remote",
      type: "Full-time",
      description: "We're looking for an experienced graphic designer to join our team...",
      deadline: {
        from: "2024-03-01T00:00:00",
        to: "2024-03-31T23:59:59"
      }
    },
    
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-primary">Open</span>
          <span className="text-secondary"> Positions</span>
        </h2>
        <p className="text-gray-600">
          Join our team and be part of something extraordinary
        </p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {vacancies.map((vacancy, index) => (
          <VacancyCard key={index} {...vacancy} />
        ))}
      </div>
    </div>
  );
};

export default Vacancies;
