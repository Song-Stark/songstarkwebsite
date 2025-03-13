"use client";

import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services } from '@/data/servicedetails';
import Image from 'next/image';

const ServicesListing: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTotalSlides = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setTotalSlides(Math.ceil(Object.keys(services).length / 3));
      } else if (window.innerWidth >= 640) { // sm breakpoint
        setTotalSlides(Math.ceil(Object.keys(services).length / 2));
      } else {
        setTotalSlides(Object.keys(services).length);
      }
    };

    updateTotalSlides();
    window.addEventListener('resize', updateTotalSlides);
    return () => window.removeEventListener('resize', updateTotalSlides);
  }, []);

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

  const scrollToNext = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + itemWidth,
        behavior: 'smooth'
      });
    }
  };

  const scrollToPrevious = () => {
    if (scrollRef.current) {
      const itemWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - itemWidth,
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
    <section className="py-8 sm:py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our <span className="text-primary">Services</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-primary mx-auto mt-3 sm:mt-4"></div>
        </div>
        <p className="text-base sm:text-lg text-gray-700 text-center mx-auto mb-6 sm:mb-8 md:mb-10 max-w-2xl">
          Explore our comprehensive range of services designed to meet your needs and exceed your expectations.
        </p>
        <div className="relative mb-8 sm:mb-10 md:mb-14">
          {/* Navigation Buttons */}
          <button
            onClick={scrollToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-[50%] shadow-md sm:hidden"
            aria-label="Previous slide"
          >
            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4 text-primary" />
          </button>
          
          <button
            onClick={scrollToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/50 hover:bg-white p-2 rounded-[50%] shadow-md sm:hidden"
            aria-label="Next slide"
          >
            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 text-primary" />
          </button>

          <div 
            ref={scrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {Object.values(services).map((service) => (
              <div 
                key={service.id}
                className="flex-none w-full sm:w-1/2 lg:w-1/3 px-2 sm:px-3 snap-center"
              >
                <div className="relative h-[300px] sm:h-[350px] md:h-[400px] rounded-lg overflow-hidden group">
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
                      <div className="absolute bottom-0 left-0 p-4 sm:p-5 md:p-6 w-full">
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">
                          {service.description}
                        </p>
                        <Link 
                          href={`/services/${service.id}`}
                          className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-primary rounded-lg
                          hover:bg-secondary transition-all duration-300 group text-xs sm:text-sm"
                        >
                          Learn More
                          <FontAwesomeIcon 
                            icon={faExternalLinkAlt}
                            className="ml-2 w-2.5 sm:w-3 h-2.5 sm:h-3 group-hover:translate-x-1 transition-transform" 
                          />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-8">
            {[...Array(totalSlides)].map((_, index) => (
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