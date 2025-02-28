"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronRight, faGlobe, faHome, faPaintBrush, faPlane, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const OurStory: React.FC = () => {
  const services = [
    { name: "IT Solutions", icon: faGlobe, description: "Providing exceptional IT solutions services between Korea and Rwanda." },
    { name: "Tours and Travel", icon: faPlane, description: "Providing exceptional tours and travel services between Korea and Rwanda." },
    { name: "Real Estate", icon: faHome, description: "Providing exceptional real estate services between Korea and Rwanda." },
    { name: "Korean Cosmetics online shopping", icon: faShoppingBag, description: "Providing exceptional Korean cosmetics online shopping services between Korea and Rwanda." },
    { name: "Art Gallery", icon: faPaintBrush, description: "Providing exceptional art gallery services between Korea and Rwanda." }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold mb-3">
            About <span className="text-primary">Song & Stark</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        {/* Mission Statement - Full width at top */}
        <div className=" p-6 rounded-lg ">
          <p className="text-lg leading-relaxed mb-6">
            By building strong human and material exchange channels between Korea and Rwanda, we aim to contribute to the continued revitalization of solid mutual trust and broader and deeper economic exchanges.
          </p>
          <Link href="/about" className="inline-flex items-center text-white font-medium group">
            Learn more about our story
            <FontAwesomeIcon 
              icon={faChevronRight}
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Link>
        </div>

        {/* Services Section - Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-start">
              <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mr-4 flex-shrink-0">
                <FontAwesomeIcon 
                  icon={service.icon} 
                  className="w-5 h-5 text-primary" 
                />
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-base text-gray-600">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Link 
            href="/services" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-md shadow-sm hover:bg-opacity-90 transition duration-300 inline-flex items-center group"
          >
            Explore Our Services
            <FontAwesomeIcon 
              icon={faChevronRight}
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
