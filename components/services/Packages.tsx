import React from 'react';
import Link from 'next/link';

interface PackageProps {
  packages: {
    name: string;
    price: string;
    description: string;
    features: string[];
    isRecommended?: boolean;
  }[];
}

const Packages: React.FC<PackageProps> = ({ packages }) => {
  // Helper function to check if a feature exists
  const hasFeature = (features: string[], keyword: string) => {
    return features.some(feature => 
      feature.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  // Helper function to get feature value
  const getFeatureValue = (features: string[], keyword: string) => {
    const feature = features.find(f => 
      f.toLowerCase().includes(keyword.toLowerCase())
    );
    return feature ? feature.split(' ')[0] : '✓';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-primary mb-3">
          We&apos;ve Got A Plan That&apos;s Perfect For You
        </h2>
      </div>
      
      <div className="overflow-visible pt-8">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="w-1/6"></th>
              {packages.map((pkg, index) => (
                <th 
                  key={index}
                  className={`w-1/4 px-6 py-4 relative ${
                    pkg.isRecommended 
                      ? 'bg-white text-primary border-t-2 border-secondary'
                      : 'bg-primary text-white'
                  }`}
                >
                  {pkg.isRecommended && (
                    <div className="absolute -top-8 left-0 right-0 flex justify-center">
                      <span className="bg-secondary text-white px-8 py-2 rounded-full text-sm font-medium inline-block">
                        Recommended
                      </span>
                    </div>
                  )}
                  <div className="text-xl font-bold">{pkg.name}</div>
                </th>
              ))}
            </tr>
          </thead>
          
          <tbody>
            <tr className="bg-tertiary/10">
              <td className="py-4 px-4 font-bold text-primary">Price (RWF)</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-center font-bold ${
                    pkg.isRecommended ? 'bg-white' : ''
                  }`}
                >
                  {pkg.price}
                </td>
              ))}
            </tr>
            
            <tr>
              <td className="py-4 px-4 font-bold text-primary">Description</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-sm ${
                    pkg.isRecommended ? 'bg-white' : 'bg-gray-100'
                  }`}
                >
                  {pkg.description}
                </td>
              ))}
            </tr>
            
            <tr className="bg-tertiary/10">
              <td className="py-4 px-4 font-bold text-primary">Custom Design</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-center ${
                    pkg.isRecommended ? 'bg-white' : ''
                  }`}
                >
                  {hasFeature(pkg.features, 'Custom Design') ? '✓' : '−'}
                </td>
              ))}
            </tr>
            <tr className="bg-tertiary/10">
              <td className="py-4 px-4 font-bold text-primary">Responsive Design</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-center ${
                    pkg.isRecommended ? 'bg-white' : ''
                  }`}
                >
                  {hasFeature(pkg.features, 'Responsive') ? '✓' : '−'}
                </td>
              ))}
            </tr>
            <tr className="bg-tertiary/10">   
                <td className="py-4 px-4 font-bold text-primary">Number of Pages</td>
                {packages.map((pkg, index) => (
                    <td 
                        key={index}
                        className={`py-4 px-4 text-center ${
                            pkg.isRecommended ? 'bg-white' : ''
                        }`}
                    >   
                        {getFeatureValue(pkg.features, 'Pages')}
                    </td>
                ))}
            </tr>
            <tr>
              <td className="py-4 px-4 font-bold text-primary">Working Days</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-center ${
                    pkg.isRecommended ? 'bg-white' : 'bg-gray-100'
                  }`}
                >
                  {getFeatureValue(pkg.features, 'Delivery')} Days
                </td>
              ))}
            </tr>

            <tr className="bg-tertiary/10">
              <td className="py-4 px-4 font-bold text-primary">Revision Limit</td>
              {packages.map((pkg, index) => (
                <td 
                  key={index} 
                  className={`py-4 px-4 text-center ${
                    pkg.isRecommended ? 'bg-white' : ''
                  }`}
                >
                  {getFeatureValue(pkg.features, 'Revision')} Month
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <div className="text-center mt-10">
          <Link href="/contact" className="inline-block">
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors duration-200">
              Get Quote
            </button>
          </Link>
          <p className="text-gray-600 mt-3 text-sm">
            Need a custom plan? <Link href="/contact" className="text-primary font-semibold hover:underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Packages;
