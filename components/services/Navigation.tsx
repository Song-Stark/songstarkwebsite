"use client";

import Link from "next/link";
import { FaArrowLeft, FaTimes, FaBars } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/data/servicedetails";
import { useState } from "react";

interface NavigationProps {
  serviceId: string;
}

export default function Navigation({ serviceId }: NavigationProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-40">
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
  );
}
