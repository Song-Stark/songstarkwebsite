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
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold">
            About <span className="text-primary">Us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center mb-16">
          {/* Image section - visible on all screens */}
          <div className="w-full">
            <div className="relative h-[300px] md:h-[500px] flex items-center justify-center">
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/images/team.jpg"
                  alt="Song & Stark Team"
                  fill
                  className="object-cover rounded-lg"
                  quality={95}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">OVERVIEW</p>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Building Bridges Between Rwanda and the World
              </h3>
              <p className="text-gray-600 leading-relaxed">
                At Song & Stark, we build meaningful bridges between Rwanda and the world. Our mission is to showcase Rwanda&apos;s potential by fostering business partnerships, cultural exchanges, and economic collaborations. With in-depth knowledge of local markets and global practices, we create opportunities that drive mutual growth and long-term connections.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <span className="text-primary text-xl md:text-2xl font-bold">2+</span>
                <p className="text-sm text-gray-600">Years of Experience</p>
                <p className="text-xs text-gray-500">Dedicated to fostering international relationships</p>
              </div>
              <div className="space-y-2">
                <span className="text-primary text-xl md:text-2xl font-bold">10+</span>
                <p className="text-sm text-gray-600">Successful Projects</p>
                <p className="text-xs text-gray-500">Connecting businness, individuals and organizations</p>
              </div>
            </div>

            <Link 
              href="/contact" 
              className="inline-flex items-center px-4 md:px-6 py-2 md:py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all"
            >
              Connect With Us
              <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;


