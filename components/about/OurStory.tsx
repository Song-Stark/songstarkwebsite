"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const OurStory: React.FC = () => {
  return (
    <section className="py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            About <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          {/* Image section - hidden on mobile */}
          <motion.div
            className="hidden md:block"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[500px] flex items-center justify-center">
              {/* Background circle */}
              <div className="absolute left-0 top-10 w-[400px] h-[400px] rounded-full bg-tertiary/30"></div> 
              {/* Main image */}
              <div className="relative z-10 w-[350px] h-[350px]">
                <Image
                  src="/images/about-bg.png"
                  alt="Song & Stark Story"
                  fill
                  className="object-contain"
                  quality={95}
                />
              </div>

              {/* Accent dots */}
              <div className="absolute right-20 bottom-20 w-3 h-2 rounded-full bg-primary"></div>
              <div className="absolute left-40 top-20 w-3 h-2 rounded-full bg-secondary"></div>
              
              {/* Small accent circle */}
              <div className="absolute right-10 top-40 w-[100px] h-[100px] rounded-full bg-blue-50"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-wider text-primary">OVERVIEW</p>
              <h3 className="text-3xl font-bold text-gray-900">
                Building Bridges Between Rwanda and the World
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Song & Stark, we build meaningful bridges between Rwanda and the world. Our mission is to showcase Rwanda&apos;s potential by fostering business partnerships, cultural exchanges, and economic collaborations. With in-depth knowledge of local markets and global practices, we create opportunities that drive mutual growth and long-term connections.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="text-primary text-2xl font-bold">2+</span>
                <p className="text-sm text-gray-600">Years of Experience</p>
                <p className="text-xs text-gray-500">Dedicated to fostering international relationships</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary text-2xl font-bold">50+</span>
                <p className="text-sm text-gray-600">Successful Projects</p>
                <p className="text-xs text-gray-500">Connecting businesses across continents</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Connect With Us
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;


