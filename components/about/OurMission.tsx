"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faBolt, faEye, faShield } from '@fortawesome/free-solid-svg-icons';

const OurMission: React.FC = () => {
  const coreValues = [
    "Excellence in service delivery",
    "Integrity and transparency",
    "Innovation and creativity",
    "Cultural exchange",
    "Sustainable partnerships"
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            Who we are is defined by
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center text-2xl sm:text-3xl font-bold">
            <span className="text-primary">our culture</span>
            <span className="mx-2">and</span>
            <span className="text-primary">values</span>
          </div>
        </div>

        {/* Mission, Vision, Values Grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Mission */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faBolt} className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To build strong human and material exchange channels between Korea and Rwanda, 
              contributing to the revitalization of mutual trust and deeper economic exchanges.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faEye} className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              To become the leading bridge between Korean and Rwandan markets, 
              fostering innovation, cultural exchange, and sustainable economic growth 
              through our diverse service offerings.
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
              <FontAwesomeIcon icon={faShield} className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">Core Values</h3>
            <ul className="space-y-1">
              {coreValues.map((value, index) => (
                <li key={index} className="flex items-start">
                  <FontAwesomeIcon 
                    icon={faCheck} 
                    className="w-3 h-3 text-primary mt-1 mr-2" 
                  />
                  <span className="text-gray-600 text-sm">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;