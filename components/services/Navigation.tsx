"use client";

import Link from "next/link";
import { FaArrowLeft, FaTimes, FaBars, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/servicedetails";
import { useState } from "react";

interface NavigationProps {
  serviceId: string;
}

export default function Navigation({ serviceId }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const currentService = services[serviceId];

  return (
    <>
      {/* Desktop Navigation */}
      <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] hidden md:block">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative bg-white/95 backdrop-blur-md rounded-full shadow-md border border-gray-100"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -right-2 -top-2 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-all"
                aria-label="Close navigation"
              >
                <FaTimes size={10} />
              </button>
              <div className="flex items-center h-11 px-2">
                {Object.values(services).map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className={`relative px-4 py-1.5 rounded-full text-sm transition-all ${
                      s.id === serviceId 
                        ? 'text-white font-medium bg-primary' 
                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                    }`}
                  >
                    {s.title}
                  </Link>
                ))}
                <div className="h-5 border-l border-gray-200 mx-2" />
                <Link 
                  href="/services"
                  className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors px-3 py-1.5 rounded-full hover:bg-gray-50 text-sm"
                >
                  <FaArrowLeft size={10} className="text-primary" />
                  <span>Back</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={() => setIsExpanded(true)}
              className="bg-primary text-white px-4 py-2 rounded-full shadow-md hover:bg-primary/90 transition-all flex items-center gap-2 text-sm"
              aria-label="Show navigation"
            >
              <FaBars size={10} />
              <span>Services Menu</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-16 left-1/2 -translate-x-1/2 z-[100] md:hidden w-[95%] max-w-md">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full bg-white/95 backdrop-blur-md rounded-full shadow-md px-4 py-2 border border-gray-100 flex items-center justify-between"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-services-menu"
        >
          <div className="flex items-center gap-1.5">
            <span className="text-primary text-sm font-medium">{currentService.title}</span>
            <FaChevronDown
              className={`text-primary transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
              size={10}
            />
          </div>
          <Link 
            href="/services"
            className="flex items-center gap-1.5 text-gray-600 hover:text-primary transition-colors text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowLeft size={10} className="text-primary" />
            <span>Back</span>
          </Link>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-services-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-1.5 bg-white/95 backdrop-blur-md rounded-2xl shadow-md border border-gray-100 py-1 overflow-hidden"
            >
              {Object.values(services)
                .filter(s => s.id !== serviceId)
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="block px-4 py-2 text-gray-600 hover:text-primary hover:bg-gray-50 transition-colors text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
