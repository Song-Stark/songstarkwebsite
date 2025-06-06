"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { VacancyType, vacancies } from '@/data/vacancies';
import Link from 'next/link';

type VacancyProps = VacancyType;

const VacancyCard: React.FC<VacancyProps> = ({ title, location, type, description, formLink, deadline, flyer }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-lg mb-4 border border-gray-200 hover:border-primary transition-colors overflow-hidden"
  >
    <div className="flex sm:flex-row flex-col">
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <Image src={flyer} alt={title} width={300} height={300} className="w-[400px] h-full object-cover" />
      </div>
      <div className=" flex flex-col p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="font-medium text-secondary mb-1">Application Period</p>
        <div className="flex gap-2">
          <p className="text-sm">{new Date(deadline.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
          <p>-</p>
          <p className="text-sm font-semibold">{new Date(deadline.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
        </div>
          <div className="flex text-sm text-gray-600 mb-3 mt-2 gap-4">
            <div className="flex items-center">
              <FaMapMarkerAlt className="mr-2 text-secondary" />
              {location}
            </div>
            <div className="flex items-center text-sm">
              <FaClock className="mr-2 text-secondary" />
              {type}
            </div>
          </div>
        <p className="text-gray-600 whitespace-pre-line text-sm">{description}</p>

        <Link
          href={formLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm w-40 inline-flex items-center mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors"
        >
          Apply Now <FaExternalLinkAlt className="ml-2 text-xs w-4 h-4" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Vacancies: React.FC = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="mb-12 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2">
          <span className="text-primary">Open</span>
          <span className="text-secondary"> Positions</span>
        </h2>
        <p className="text-gray-600">
          Join our team and be part of something extraordinary
        </p>
      </div>
      <div className="space-y-6 max-w-4xl mx-auto">
        {vacancies.length > 0 ? (
          vacancies.map((vacancy, index) => (
            <VacancyCard key={index} {...vacancy} />
          ))
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16 bg-white rounded-lg border border-gray-100"
          >
            <div className="text-primary text-6xl mb-6">🔍</div>
            <h3 className="text-xl sm:text-3xl font-bold mb-3">
              <span className="text-primary">No Open</span>
              <span className="text-secondary"> Positions</span>
            </h3>
            <p className="text-gray-600 max-w-md mx-auto">
              We currently don&apos;t have any open positions. Please check back later or
              follow us on social media for updates.
            </p>
            <button className="mt-6 bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Subscribe for Updates
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Vacancies;
