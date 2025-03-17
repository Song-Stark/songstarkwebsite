"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

interface FeaturesProps {
  features: string[];
}

export default function Features({ features }: FeaturesProps) {
  return (
    <div className="bg-white py-20 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            What We Offer
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
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
  );
}