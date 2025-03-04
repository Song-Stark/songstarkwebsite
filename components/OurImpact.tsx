import React from 'react';

interface Impact {
  title: string;
  label: string;
  description: string;
}

const OurImpact: React.FC = () => {
  const impactStats: Impact[] = [
    {
      title: "100K+",
      label: "Lives Impacted",
      description: "Individuals reached through our initiatives"
    },
    {
      title: "50+",
      label: "Global Partners",
      description: "Organizations working together for change"
    },
    {
      title: "25",
      label: "Countries",
      description: "Regions where we make a difference"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-tertiary to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Global Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Making a meaningful difference in communities around the world through sustainable initiatives and partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{index + 1}</span>
                </div>
              </div>

              <div className="text-center pt-4">
                <h3 className="text-4xl font-bold text-secondary mb-2">
                  {stat.title}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {stat.label}
                </h4>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
