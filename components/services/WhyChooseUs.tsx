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
        className="bg-white rounded-2xl p-8 "
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-gray-900 rounded-full mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl hover:bg-gray-50 transition-all"
            >
              <div className="w-12 h-12 bg-secondary/10 rounded-[50%] flex items-center justify-center mb-4">
                {item.icon === 'expertise' && <HiChip className="text-secondary  text-2xl" />}
                {item.icon === 'innovation' && <HiLightningBolt className="text-secondary text-2xl" />}
                {item.icon === 'support' && <HiSupport className="text-secondary text-2xl" />}
                {item.icon === 'quality' && <FaCheck className="text-secondary text-2xl" />}
                {item.icon === 'time' && <HiClock className="text-secondary text-2xl" />}
                {item.icon === 'cost' && <HiCurrencyDollar className="text-secondary text-2xl" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}