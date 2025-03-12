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
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 hidden md:block">
        <AnimatePresence>
          {isExpanded ? (
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="relative bg-white/95 backdrop-blur-md rounded-[30px] shadow-md px-8 py-2 border border-gray-100"
            >
              <button
                onClick={() => setIsExpanded(false)}
                className="absolute -right-3 -top-3 w-7 h-7 bg-primary text-white rounded-full flex items-center justify-center shadow-md hover:bg-primary/90 transition-colors"
              >
                <FaTimes size={12} />
              </button>
              <div className="flex items-center gap-2">
                {Object.values(services).map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className={`relative px-4 py-2 rounded-[20px] transition-all group hover:scale-105 ${
                      s.id === serviceId 
                        ? 'text-primary font-medium bg-primary/10' 
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    <span className="relative z-10">{s.title}</span>
                    {s.id === serviceId && (
                      <motion.div
                        layoutId="activeService"
                        className="absolute inset-0 bg-primary/10 rounded-[20px]"
                      />
                    )}
                  </Link>
                ))}

                {/* Back Button */}
                <div className="h-full border-l border-gray-200 mx-2" />
                <Link 
                  href="/services"
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors px-3 py-2 rounded-[20px] hover:bg-gray-50"
                >
                  <FaArrowLeft className="text-primary text-sm" />
                  <span className="font-medium text-sm">Back</span>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.button
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              onClick={() => setIsExpanded(true)}
              className="bg-primary text-white px-4 py-2 rounded-[30px] shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <FaBars size={14} />
              <span className="font-medium">Show Navigation</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Navigation */}
      <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40 md:hidden w-[95%] max-w-md">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-full bg-white/95 backdrop-blur-md rounded-[20px] shadow-md px-4 py-3 border border-gray-100 flex items-center justify-between"
        >
          <div className="flex items-center gap-2">
            <span className="text-primary font-medium">{currentService.title}</span>
            <FaChevronDown
              className={`text-gray-500 transition-transform ${
                isMobileMenuOpen ? "rotate-180" : ""
              }`}
            />
          </div>
          <Link 
            href="/services"
            className="flex items-center gap-2 text-gray-600 text-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FaArrowLeft className="text-primary text-sm" />
            <span>Back</span>
          </Link>
        </button>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md rounded-[20px] shadow-md border border-gray-100 py-2"
            >
              {Object.values(services)
                .filter(s => s.id !== serviceId)
                .map((s) => (
                  <Link
                    key={s.id}
                    href={`/services/${s.id}`}
                    className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
