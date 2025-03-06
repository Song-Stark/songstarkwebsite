"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CTAProps {
  serviceTitle: string;
}

export default function CTA({ serviceTitle }: CTAProps) {
  return (
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
            Let's discuss how our {serviceTitle} can help you achieve your goals.
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
  );
}