"use client";

import { motion } from "framer-motion";
import { HiChip, HiLightningBolt, HiSupport, HiClock, HiCurrencyDollar } from 'react-icons/hi';
import { FaCheck } from "react-icons/fa";

interface WhyChooseUsProps {
  items: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
}

export default function WhyChooseUs({ items }: WhyChooseUsProps) {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="text-center mb-16 relative">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
            Key Benefits for your <span className="text-secondary">Business</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-2xl p-8 overflow-hidden"
            >
              {/* background */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-bl-[100%] transition-all duration-300 group-hover:scale-150"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-tr-[100%] transition-all duration-300 group-hover:scale-150"></div>

              {/* Icons */}
              <div className="relative mb-6 w-16 h-16">
                <div className="absolute inset-0 bg-secondary rounded-xl rotate-6 group-hover:rotate-12 transition-transform"></div>
                <div className="absolute inset-0.5 bg-white rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                  {item.icon === 'expertise' && <HiChip className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                  {item.icon === 'innovation' && <HiLightningBolt className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                  {item.icon === 'support' && <HiSupport className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                  {item.icon === 'quality' && <FaCheck className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                  {item.icon === 'time' && <HiClock className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                  {item.icon === 'cost' && <HiCurrencyDollar className="text-primary text-2xl group-hover:scale-110 transition-transform" />}
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover line effect */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute -z-10 top-20 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </motion.div>
    </div>
  );
}