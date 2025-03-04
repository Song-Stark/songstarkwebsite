"use client";

import React from 'react';
import Image from 'next/image';

const Location: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold text-primary mb-8">
          Our Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Image Section */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Office"
              className="w-full h-full object-cover"
              width={600}
              height={400}
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-primary to-transparent p-4 w-full">
              <h3 className="text-xl font-bold text-white">
                S&S Office in Rwanda
              </h3>
              <p className="text-sm text-white">
                KG 11 Ave, IKAZE HOUSE (Kisimenti), F5-506, Kigali - RWANDA
              </p>
            </div>
          </div>

          {/* Google Maps with iframe */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d255386.59055887378!2d30.028263599999998!3d-1.9587217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d-1.9587237!2d30.1106656!4m5!1s0x19dca7cf5c8d3433%3A0x15102b39f6678700!2sIKAZE%20HOUSE%2C%20F5-%20506%2C%20KG%2011%20Ave%2C%20Kigali!3m2!1d-1.9587237!2d30.1106656!5e0!3m2!1sen!2sus!4v1708963606299!5m2!1sen!2sus" 
              width="100%" 
              height="400" 
              style={{ border: "none" }} 
              title="S&S Office Location in Rwanda"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
