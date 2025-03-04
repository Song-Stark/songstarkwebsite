"use client";

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faGlobe, faHome, faPaintBrush, faPlane, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const OurStory: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = React.useState<number | null>(null);

  const services = [
    { name: "IT Solutions", icon: faGlobe, description: "Providing exceptional IT solutions services between Korea and Rwanda." },
    { name: "Tours services", icon: faPlane, description: "Providing exceptional tours and travel services between Korea and Rwanda." },
    { name: "Real Estate", icon: faHome, description: "Providing exceptional real estate services between Korea and Rwanda." },
    { name: "Korean Cosmetics", icon: faShoppingBag, description: "Providing exceptional Korean cosmetics online shopping services between Korea and Rwanda." },
    { name: "Art Gallery", icon: faPaintBrush, description: "Providing exceptional art gallery services between Korea and Rwanda." }
  ];

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            About <span className="text-primary">Song & Stark</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <p className="text-lg text-gray-700 text-center mx-auto mb-10">
        By building strong human and material exchange channels from Rwanda. We aim to contribute to the continued revitalization of solid mutual trust and broader and deeper economic exchanges.
        </p>
        <p className="text-lg text-black  font-semibold text-center mx-auto mb-10"> 
          We provide a wide range of services that includes:
        </p>
        {/* Services Display */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group flex flex-col items-center relative pt-20"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              {/* Description Card  */}
              <AnimatePresence>
                {hoveredIdx === idx && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute -top-10 translate-x-1/2 w-64 z-10"
                  >
                    <div className="bg-white shadow-lg rounded-xl p-4 relative border border-secondary/10">
                      <p className="text-sm text-gray-600 text-center leading-relaxed">
                        {service.description}
                      </p>
                      {/* Arrow pointer */}
                      <div 
                        className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 w-5 h-5 bg-white transform rotate-45 border-r border-b border-secondary/10"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Icon Circle with hover effect */}
              <div 
                className={`w-24 h-24 rounded-full flex items-center justify-center mb-5 transition-all duration-300
                  ${hoveredIdx === idx ? 'bg-secondary' : 'bg-primary'}`}
              >
                <FontAwesomeIcon 
                  icon={service.icon}
                  className="w-10 h-10 text-white"
                />
              </div>

              {/* Service Name */}
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-xl
              hover:bg-secondary transition-all duration-300 group"
          >
            Explore Services
            <FontAwesomeIcon 
              icon={faChevronRight}
              className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" 
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
