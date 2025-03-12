"use client";

import React from 'react';
import Image from 'next/image';

interface TeamLeader {
  name: string;
  position: string;
  image: string;
}

const TeamOverview: React.FC = () => {
  const generalManager = {
    name: "Wan Song",
    position: "Co-Founder & CEO",
    image: "/images/team/ceo.jpeg",
    description: "With over 10 years of experience in international business development, Wan leads our organization with a vision to bridge Korean and Rwandan markets. His expertise in strategic planning and cross-cultural business practices has been instrumental in establishing Song & Stark as a trusted name in both countries."
  };

  const teamLeaders: TeamLeader[] = [
    {
      name: "Eric Muhire MUDASAYA",
      position: "General Manager",
      image: "/images/team/gm-person.jpeg"
    },  
    {
      name: "Leonard TUMUSHIME",
      position: "Team Lead - IT Solutions",
      image: "/images/team/it-person.jpeg"
    },
    {
      name: "Jessica MUKANSANGA",
      position: "Team Lead - Tour Services",
      image: "/images/team/tour-person.jpeg"
    },
    {
      name: "Caissy Christine NAKURE",
      position: "Marketing Manager",
      image: "/images/team/marketing.jpg"
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Main Title - More concise */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight max-w-3xl mx-auto">
            We are a <span className="text-primary">diverse team</span> of professionals working with partners to define <span className="text-primary">digital strategies</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto"></div>
        </div>
        {/* Our Leader Section - More compact */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Our Leader</h3>
          
          <div className="flex flex-col md:flex-row items-center gap-8 max-w-3xl mx-auto">
            {/* Circular Image - Smaller */}
            <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0 border-2 border-primary shadow-md">
              <Image
                src={generalManager.image}
                alt={generalManager.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Description - More concise */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{generalManager.name}</h3>
              <p className="text-primary font-medium mb-3 text-sm">{generalManager.position}</p>
              <div className="w-12 h-0.5 bg-primary mb-3"></div>
              <p className="text-gray-700 text-sm leading-relaxed">{generalManager.description}</p>
            </div>
          </div>
        </div>

        {/* Our Team Section - More compact */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Our Leadership Team</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {teamLeaders.map((leader, index) => (
              <div key={index} className="group text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 shadow-sm border-2 border-primary/20 hover:border-primary transition-colors duration-300">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-0.5">{leader.name}</h3>
                <p className="text-primary text-sm">{leader.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;
