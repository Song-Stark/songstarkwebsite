"use client";

import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaCheck } from "react-icons/fa";
import { services } from "@/data/servicedetails";
import { motion } from "framer-motion";
import { useState } from 'react';

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
      {/* Elegant Navigation Bar */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">


            <div className="flex items-center gap-2">
              {Object.values(services).map((s, idx) => (
                <Link
                  key={s.id}
                  href={`/services/${s.id}`}
                  className={`relative px-4 py-2 rounded-lg transition-all group ${
                    s.id === serviceId 
                      ? 'text-primary font-medium bg-primary/10' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <span className="relative z-10">{s.title}</span>
                  {s.id === serviceId && (
                    <motion.div
                      layoutId="activeService"
                      className="absolute inset-0 bg-primary/10 rounded-lg"
                    />
                  )}
                </Link>
              ))}
            </div>
            <Link 
              href="/services"
              className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all">
                <FaArrowLeft className="text-primary text-sm" />
              </div>
              <span className="font-medium">All Services</span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Modern Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12">
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
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                {service.title}
              </span>
            </motion.div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transform Your Business With Our {service.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              {service.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              {service.website && (
                <Link
                  href={service.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all hover:translate-y-[-2px] hover:shadow-lg group"
                >
                  Visit Website
                  <FaExternalLinkAlt className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 rounded-xl hover:bg-gray-900 hover:text-white transition-all hover:translate-y-[-2px] hover:shadow-lg"
              >
                Get Started
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden relative">
              <Image
                src={service.visual}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>
            {/* Floating Stats Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-8 bg-white p-6 rounded-2xl shadow-xl"
            >
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary">100+</div>
                  <div className="text-gray-600">Projects</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">95%</div>
                  <div className="text-gray-600">Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="bg-white py-20 mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions tailored to your needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all">
                  <FaCheck className="text-primary group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Expert solutions with proven results
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how our {service.title} can help you achieve your goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-xl hover:bg-gray-100 transition-all hover:translate-y-[-2px] hover:shadow-lg"
            >
              Schedule a Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
} 