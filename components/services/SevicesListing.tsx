"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/servicedetails';
import Image from 'next/image';

const ServicesListing: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 md:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Specialized solutions designed to elevate your business
          </p>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {Object.values(services).map((service) => (
            <motion.div 
              key={service.id}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col group"
            >
              <div className="relative h-[220px] overflow-hidden">
                <Image
                  src={service.visual}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  quality={85}
                />
              </div>
              
              <div className="p-5 flex-grow flex flex-col">
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-md"
                    >
                      {feature.title.length > 15 
                        ? feature.title.substring(0, 15) + '...' 
                        : feature.title}
                    </span>
                  ))}
                  {service.features.length > 3 && (
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md">
                      +{service.features.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href={`/services/${service.id}`}
                    className="text-primary text-sm font-medium inline-flex items-center hover:text-secondary transition-colors"
                  >
                    View details
                    <FontAwesomeIcon 
                      icon={faArrowRight}
                      className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-0.5" 
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;