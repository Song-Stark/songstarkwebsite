"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { services } from "@/data/servicedetails";
import { motion } from "framer-motion";

interface ServiceClientProps {
  serviceId: string;
}

export default function ServiceClient({ serviceId }: ServiceClientProps) {
  const service = services[serviceId];
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-800">Service not found</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative h-[80vh] min-h-[500px] translate-y-[-10px]"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src={service.visual}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/40" />
        </div>
        
        <div className="relative z-10 h-full container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-4xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Link 
                href="/services"
                className="inline-flex items-center text-white/90 hover:text-white mb-8 transition-all hover:gap-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaArrowLeft className="mr-2" />
                Back to Services
              </Link>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed backdrop-blur-sm bg-black/20 p-6 rounded-xl">
                {service.description}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Content Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <motion.div 
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-8 bg-white p-8 rounded-2xl shadow-sm"
            >
              <div className=" pb-6">
                <h2 className="text-4xl font-bold text-gray-900 mb-2">
                  About This Service
                </h2>
                <div className="w-20 h-1 bg-primary rounded-full"></div>
              </div>
              
              {service.longDescription.map((paragraph, idx) => (
                <motion.p 
                  key={idx}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-600 leading-relaxed text-lg"
                >
                  {paragraph}
                </motion.p>
              ))}
              
              {service.website && (
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  className="pt-8"
                >
                  <Link
                    href={service.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:translate-y-[-2px] hover:shadow-lg group"
                  >
                    Visit Website
                    <FaExternalLinkAlt className="ml-2 transition-transform group-hover:translate-x-1" />
                  </Link>
                </motion.div>
              )}
            </motion.div>

            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-8"
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className=" pb-6 mb-8">
                  <h2 className="text-4xl font-bold text-gray-900 mb-2">What We Offer</h2>
                  <div className="w-20 h-1 bg-primary rounded-full"></div>
                </div>
                <ul className="space-y-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start group"
                    >
                      <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <FaCheck className="text-primary text-sm" />
                      </span>
                      <span className="text-gray-700 text-lg leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
} 