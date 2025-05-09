"use client";

import { motion } from "framer-motion";
import { 
  FaCheck, FaLaptopCode, FaMobileAlt, FaChartBar, 
  FaSuitcase, FaRoute, FaCalendarAlt, FaUserTie, FaHotel, 
  FaCar, FaHome, FaBuilding, FaChartLine, FaSearchDollar, 
  FaCalculator, FaGavel, FaPaintBrush, FaUserAlt, FaGlobe, 
  FaRegComments, FaImage, FaShippingFast, FaBook,
  FaPumpSoap,
  FaSmile,
  FaMapMarkedAlt
} from "react-icons/fa";
import { MdDesignServices, MdOutlineBusinessCenter } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { BsBoxSeam } from "react-icons/bs";

const IconMap: Record<string, React.ElementType> = {
  FaCheck,
  MdDesignServices,
  FaLaptopCode,
  FaMobileAlt,
  MdOutlineBusinessCenter,
  FaChartBar,
  BiSupport,
  FaSuitcase,
  FaRoute,
  FaCalendarAlt,
  FaUserTie,
  FaHotel,
  FaCar,
  FaMapMarkedAlt,
  GiLotion: FaPumpSoap,
  BsBoxSeam,
  FaRegComments,
  FaShippingFast,
  FaBook,
  GiMakeup: FaSmile,
  FaHome,
  FaBuilding,
  FaChartLine,
  FaSearchDollar,
  FaCalculator,
  FaGavel,
  FaPaintBrush,
  FaUserAlt,
  FaGlobe,
  FaImage
};

// Adding color backgrounds that match the servicedetails.ts data
const bgColorMap: Record<string, string> = {
  "bg-blue-50": "bg-blue-50",
  "bg-green-50": "bg-green-50",
  "bg-purple-50": "bg-purple-50", 
  "bg-yellow-50": "bg-yellow-50",
  "bg-red-50": "bg-red-50",
  "bg-indigo-50": "bg-indigo-50",
  "bg-pink-50": "bg-pink-50"
};

interface FeatureItem {
  title: string;
  icon: string;
  bg?: string;
  description?: string;
}

interface FeaturesProps {
  features: FeatureItem[];
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
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 md:mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Comprehensive solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const iconKey = feature.icon as keyof typeof IconMap;
            const Icon = IconMap[iconKey] || FaCheck;
            
            // Get the appropriate background color or use a default
            const bgColor = feature.bg && bgColorMap[feature.bg] 
              ? bgColorMap[feature.bg] 
              : 'bg-blue-50';
            
            // Log for debugging
            console.log(`Feature ${idx}: ${feature.title}, bg: ${feature.bg}, mapped bg: ${bgColor}`);
            
            return (
              <motion.div
                key={idx}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white shadow p-6 rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="flex items-center mb-3">
                  <div className={`w-14 h-14 shrink-0 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all ${bgColor}`}>
                    <Icon className="text-primary group-hover:text-white" size={22} />
                  </div>
                  <div className="h-12 mx-4 w-px bg-gray-200 group-hover:bg-primary/20 transition-colors"></div>
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                </div>
                {feature.description && (
                  <p className="text-gray-600 mt-2 pl-20">
                    {feature.description}
                  </p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


