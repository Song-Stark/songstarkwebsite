"use client";

import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface HeroProps {
  title: string;
  heroTitle: string;
  description: string;
  visual: string;
  visuals?: string[];
  website?: string;
  statistics?: {
    label: string;
    value: string;
  }[];
}

export default function Hero({ title, heroTitle, description, visual, visuals, website, statistics }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!visuals?.length) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % visuals.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [visuals]);

  console.log('Statistics:', statistics);
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center pt-6  md:py-12 ">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium  ">
              {title}
            </span>
          </motion.div>
          
          <h1 className="text-4xl lg:text-5xl font-semibold leading-[1.2] lg:leading-[1.2] tracking-tight mb-6">
            {(() => {
              const words = heroTitle.split(' ');
              const lastTwoWords = words.slice(-2).join(' ');
              const remainingWords = words.slice(0, -2).join(' ');
              return (
                <>
                  {remainingWords && <span className="text-primary">{remainingWords} </span>}
                  <span className="text-secondary">{lastTwoWords}</span>
                </>
              );
            })()}
          </h1>
          
          <p className="text-lg text-gray-600 leading-[1.8] lg:leading-[1.8] max-w-2xl">
            {description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            {website && (
              <Link
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg text-sm md:text-base md:font-semibold hover:bg-primary/90 transition-all hover:translate-y-[-2px] hover:shadow-lg group"
              >
                Visit Website
                <FaExternalLinkAlt className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            )}
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-lg text-sm md:text-base md:font-semibold hover:bg-gray-900 hover:text-white transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="relative"
        >
          <div className="aspect-square rounded-xl overflow-hidden relative">
            {visuals && visuals.length > 0 ? (
              <>
                {visuals.map((img, index) => (
                  <Image
                    key={img}
                    src={img}
                    alt={`${title} ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-500 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                    priority={index === 0}
                  />
                ))}
                <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {visuals.map((_, index) => (
                    <button
                      key={index}
                      className={`w-1.5 h-1.5 rounded-full transition-all ${
                        index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </>
            ) : (
              <Image
                src={visual}
                alt={title}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
          </div>

          {statistics && statistics.length > 0 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-16 pb-6 px-6 rounded-b-xl"
            >
              <div className="flex justify-center gap-8 sm:gap-12">
                {statistics.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-xl sm:text-2xl font-bold text-white mb-0.5">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-gray-200 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}