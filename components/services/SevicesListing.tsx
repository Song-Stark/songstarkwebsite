"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/servicedetails';
import Image from 'next/image';

const ServicesListing: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const slideWidth = clientWidth;
      const totalSlides = Math.ceil(scrollWidth / slideWidth);
      const progress = scrollLeft / (scrollWidth - clientWidth);
      const newActiveSlide = Math.min(
        Math.floor((progress * (totalSlides - 1)) + 0.5),
        totalSlides - 1
      );
      setActiveSlide(newActiveSlide);
    }
  };

  const scrollToSlide = (index: number) => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: itemWidth * index,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        <p className="text-lg text-gray-700 text-center mx-auto mb-10">
          Explore our comprehensive range of services designed to meet your needs and exceed your expectations.
        </p>
        <div className="relative mb-14">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Object.values(services).map((service) => (
              <div 
                key={service.id}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-3 snap-center"
              >
                <div className="relative h-[400px] rounded-lg overflow-hidden group">
                  <motion.div 
                    className="h-full w-full"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <Image
                      src={service.visual}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={90}
                    />
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <div className="absolute bottom-0 left-0 p-6 w-full">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        {service.website && (
                          <Link 
                            href={service.website}
                            className="inline-flex items-center px-4 py-2 bg-white text-primary rounded-lg
                              hover:bg-secondary transition-all duration-300 group text-sm"
                          >
                            Learn More
                            <FontAwesomeIcon 
                              icon={faExternalLinkAlt}
                              className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" 
                            />
                          </Link>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            {Object.values(services).map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={`h-1 transition-all duration-300 rounded-full
                  ${activeSlide === index 
                    ? 'w-8 bg-primary' 
                    : 'w-4 bg-gray-300 hover:bg-primary/50'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;