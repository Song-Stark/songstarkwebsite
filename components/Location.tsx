"use client";

import React from 'react';
import { FaMapMarkerAlt, FaArrowRight, FaRegClock, FaEnvelope } from 'react-icons/fa';

const Location: React.FC = () => {
  return (
    <section className="w-full bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row items-start gap-16">
          {/* Main content */}
          <div className="lg:w-7/12 relative z-10">
            <h2 className="text-2xl lg:text-4xl font-bold mb-8 leading-tight text-center lg:text-left">
              Let&apos;s Create
              <span className="block text-primary">Something Exceptional</span>
            </h2>

            <p className="text-gray-600 text-base mb-6 max-w-lg text-center lg:text-left mx-auto lg:mx-0">
              Whether online or in person, we&apos;re ready to transform your ideas into reality. Visit us in the heart of Kigali.
            </p>

            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mb-8">
              <a 
                href="/contact"
                className="group flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 hover:gap-3 text-sm"
              >
                <span className="font-medium">Get in Touch</span>
                <FaArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a 
                href="https://www.google.com/maps/place/Song+%26+Stark+Cooperation+Rwanda/@-1.9587183,30.1080907,1127m/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center gap-2 px-6 py-3 text-primary group text-sm hidden sm:flex"
              >
                <span className="font-medium relative z-10">View on Map</span>
                <FaMapMarkerAlt className="w-3.5 h-3.5 relative z-10" />
                <div className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:w-5/12 relative">
            <div className="relative p-6 rounded-3xl bg-white/30 backdrop-blur-[2px]">
              {/* Subtle decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-3xl" />

              {/* Contact info grid */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaMapMarkerAlt className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Visit Us</h3>
                    <p className="text-sm text-gray-600">IKAZE HOUSE, F5-506, KG 11 Ave, Kisimenti, Kigali</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaRegClock className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Working Hours</h3>
                    <p className="text-sm text-gray-600">Monday - Friday, 9:00 AM - 5:00 PM (CAT)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 rounded-2xl hover:bg-white/50 transition-colors duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center">
                    <FaEnvelope className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-900">Email Us</h3>
                    <a href="mailto:eric@songstark.com" className="text-sm text-primary hover:text-primary/80">eric@songstark.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
