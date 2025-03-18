"use client";  

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheck, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react';

type PortfolioItem = {
  image: string;
  title: string;
  year: string | number;
  description: string;
  purpose: string;
  beneficiaries: string;
  functionality: string[];
  link: string;
}

interface PortfolioProps {
  items: PortfolioItem[];
}

export default function Portfolio({ items }: PortfolioProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-gray-50/50 py-10 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 block">
            Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Some of <span className="text-primary">Our Work</span>
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid lg:grid-cols-2 gap-12 items-start"
          >
            <motion.div 
              className="relative group rounded-xl overflow-hidden shadow-lg"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSlide(prev => Math.max(0, prev - 1))}
                  className={`w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center
                    transition-all
                    ${activeSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:bg-white'}`}
                  disabled={activeSlide === 0}
                >
                  <FaChevronLeft className="text-primary w-4 h-4" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveSlide(prev => Math.min(items.length - 1, prev + 1))}
                  className={`w-10 h-10 rounded-full bg-white/80 shadow-md flex items-center justify-center
                    transition-all
                    ${activeSlide === items.length - 1 ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg hover:bg-white'}`}
                  disabled={activeSlide === items.length - 1}
                >
                  <FaChevronRight className="text-primary w-4 h-4" />
                </motion.button>
              </div>
              <div className="aspect-[4/3] relative">
                <Image
                  src={items[activeSlide].image}
                  alt={items[activeSlide].title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="bg-primary px-3 py-1 rounded-md text-sm font-medium inline-block mb-3">
                    {items[activeSlide].year}
                  </span>
                  <h3 className="text-2xl font-bold mb-2">{items[activeSlide].title}</h3>
                </div>
              </div>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  {items[activeSlide].description}
                </p>
              </motion.div>

              <div className="flex gap-8 mt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex-1"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">Purpose</h4>
                  <p className="text-gray-600">{items[activeSlide].purpose}</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="flex-1"
                >
                  <h4 className="text-lg font-semibold text-primary mb-2">Beneficiaries</h4>
                  <p className="text-gray-600">{items[activeSlide].beneficiaries}</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-2 gap-3">
                  {items[activeSlide].functionality.map((func, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="flex items-center gap-2 bg-white/50 p-3 rounded-lg hover:bg-white transition-colors"
                    >
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary w-4 h-4" />
                      </div>
                      <span className="text-gray-700 text-sm">{func}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-4"
              >
                <Link
                  href={items[activeSlide].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg
                    hover:shadow-md transition-all transform hover:-translate-y-0.5 group"
                >
                  Explore Project
                  <FaExternalLinkAlt className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <div className="flex justify-center items-center gap-2 mt-12">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 transition-all duration-300 ${
                  activeSlide === index 
                    ? 'w-8 bg-primary' 
                    : 'w-2 bg-gray-300 hover:bg-primary/50'
                } rounded-full`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}