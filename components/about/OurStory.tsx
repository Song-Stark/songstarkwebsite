"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const OurStory: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            About <span className="text-primary">Us</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative h-[400px] flex items-center justify-center">
              {/* Subtle background circle */}
              <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-blue-50/40 to-gray-50/40 rounded-full"></div>
              
              {/* Outer rotating circle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute w-[380px] h-[380px] rounded-full border border-blue-100/30"
              />

              {/* Inner shadow circles */}
              <div className="absolute w-[360px] h-[360px] rounded-full bg-white/50 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]"></div>
              <div className="absolute w-[340px] h-[340px] rounded-full bg-white/80 shadow-[0_0_30px_rgba(59,130,246,0.08)]"></div>

              {/* Floating dots */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute w-full h-full"
              >
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 rounded-full bg-primary/20"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 60}deg) translateY(-160px)`
                    }}
                  />
                ))}
              </motion.div>

              {/* Main image container */}
              <div className="relative w-[200px] h-[200px]">
                {/* Soft glow behind image */}
                <div className="absolute inset-0 rounded-full bg-white shadow-[0_0_40px_rgba(59,130,246,0.15)]"></div>
                
                {/* Main image */}
                <div className="relative w-full h-full p-4">
                  <Image
                    src="/images/about-bg.png"
                    alt="Song & Stark Story"
                    fill
                    className="object-contain z-10 drop-shadow-lg"
                    quality={95}
                  />
                </div>
              </div>

              {/* Small floating circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    y: [-10, 10, -10],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 3,
                    delay: i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className={`absolute w-3 h-3 rounded-full bg-primary/20
                    ${i === 0 ? 'top-20 right-32' : 
                      i === 1 ? 'bottom-24 right-40' : 
                      'bottom-32 left-36'}`}
                />
              ))}

              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent rounded-full"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-800">
            <p className="text-xs uppercase tracking-wider text-primary mb-2">OVERVIEW</p>
              Building Bridges Between Rwanda and the World
            </h3>
            <p className="text-gray-600">
            At Song & Stark, we build meaningful bridges between Rwanda and the world. Our mission is to showcase Rwanda's potential by fostering business partnerships, cultural exchanges, and economic collaborations. With in-depth knowledge of local markets and global practices, we create opportunities that drive mutual growth and long-term connections.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl font-bold">2+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Years of Experience</h4>
                  <p className="text-sm text-gray-600">Dedicated to fostering international relationships</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary text-xl font-bold">50+</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Successful Projects</h4>
                  <p className="text-sm text-gray-600">Connecting businesses across continents</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* CTA Section */}
        <div className="text-center">
          <Link 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg
              hover:bg-secondary hover:border-secondary hover:text-white transition-all duration-300 group"
          >
            Connect With Us
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
