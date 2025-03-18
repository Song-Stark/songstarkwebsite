"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaLaptopCode, FaBuilding, FaPaintBrush, FaShoppingBag, FaChevronRight, FaCar } from 'react-icons/fa';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  visual: string;
  link: string;
}

const HomeServices: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  const services: ServiceItem[] = [
    {
      icon: FaLaptopCode,
      title: "IT Services",
      description: "Custom software development, web applications, and digital solutions tailored to your business needs.",
      visual: "/images/services/it.jpg",
      link: "/services/it-solutions"
    },
    {
      icon: FaCar,
      title: "Tour Services",
      description: "Providing exceptional tours and travel services between Korea and Rwanda.",
      visual: "/images/services/ktour.jpg",
      link: "/services/tours-and-travel"
    },
    {
      icon: FaShoppingBag,
      title: "Korean Cosmetics",
      description: "Providing exceptional Korean cosmetics online shopping services between Korea and Rwanda.",
      visual: "/images/services/cosmetics.jpg",
      link: "/services/korean-cosmetics"
    },
    {
      icon: FaBuilding,
      title: "Real Estate",
      description: "Comprehensive real estate services including property management and buyer-seller connections.",
      visual: "/images/services/real-estate.jpg",
      link: "/services/real-estate"
    },
    {
      icon: FaPaintBrush,
      title: "Art Gallery",
      description: "A Global Canvas Online. Paintings. Purchase and sell the best in contemporary art online.",
      visual: "/images/services/art.png",
      link: "/services/art-gallery"
    }
  ];

  const ServiceVisual: React.FC<{ service: ServiceItem }> = ({ service }) => (
    <div className="absolute inset-0 z-0">
      <Image
        src={service.visual}
        alt={service.title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={true}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 via-primary/30 to-primary/20 group-hover:bg-primary/40 transition-all duration-700" />
    </div>
  );

  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-md sm:text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive solutions to help businesses and individuals thrive in Rwanda and beyond
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="space-y-3.5 h-[600px] lg:h-[600px] flex flex-col justify-between py-1.5">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className={`group cursor-pointer p-3 rounded-lg transition-all duration-300 border-l-2 ${
                    activeService === index 
                      ? 'border-primary bg-gray-50 shadow-sm pl-3' 
                      : 'border-transparent hover:border-secondary hover:bg-gray-50/50 pl-3 hover:pl-3.5'
                  }`}
                  onMouseEnter={() => setActiveService(index)}
                >
                  <div className="flex items-center">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center transform transition-all duration-300 ${
                      activeService === index 
                        ? 'bg-primary text-white scale-105 shadow-sm shadow-primary/20' 
                        : 'bg-gray-100/80 text-gray-600 hover:scale-105 hover:bg-gray-100'
                    }`}
                    style={{ minWidth: '2.25rem' }}
                    >
                      {React.createElement(service.icon, { className: 'text-base transition-transform group-hover:scale-110' })}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-semibold mb-0.5">{service.title}</h3>
                      <p className="text-md text-gray-600 leading-relaxed line-clamp-2">{service.description}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/2">
            <div className="h-[600px] relative overflow-hidden group rounded-lg shadow-md">
              <ServiceVisual service={services[activeService]} />
              <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-bl-full z-10 backdrop-blur-sm" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-tr-full z-10 backdrop-blur-sm" />
              <div className="relative z-10 p-6 h-full flex flex-col text-white transition-all duration-500 transform">
                <div className="text-center mb-5 animate-fadeIn">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-primary/40 rounded-full transform rotate-45 animate-pulse" />
                    <div className="relative w-16 h-16 mx-auto rounded-full bg-white/95 shadow-md flex items-center justify-center mb-4 hover:shadow-primary/20">
                      {React.createElement(services[activeService].icon, { 
                        className: 'text-2xl text-primary transition-transform duration-300 group-hover:scale-110' 
                      })}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 hover:text-secondary transition-colors duration-300">
                    {services[activeService].title}
                  </h3>
                  <p className="text-gray-200 max-w-sm mx-auto leading-relaxed text-lg">
                    {services[activeService].description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="flex items-center space-x-4">
                    <Link 
                      href={services[activeService].link} 
                      className="flex-1 text-center px-4 py-2 bg-white/90 backdrop-blur-sm text-primary rounded-md hover:bg-secondary hover:text-white transition-all duration-300 hover:scale-105 flex items-center justify-center group text-sm font-medium"
                    >
                      Learn More
                      <FaChevronRight className="ml-1.5 text-xs transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link 
                      href="/contact" 
                      className="flex-1 text-center px-4 py-2 border border-white/90 backdrop-blur-sm text-white rounded-md hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 text-sm font-medium"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HomeServices; 
