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
  const hasFeature = (features: string[], keyword: string) => {
    return features.some(feature => 
      feature.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const getFeatureValue = (features: string[], keyword: string) => {
    const feature = features.find(f => 
      f.toLowerCase().includes(keyword.toLowerCase())
    );
    return feature ? feature.split(' ')[0] : '✓';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 md:mb-3">
          <span className="text-primary">We&apos;ve Got A Plan</span>{" "}
          <span className="text-secondary">That&apos;s Perfect For You</span>
        </h2>
      </div>
      
      {/* Mobile view - stack cards vertically */}
      <div className="md:hidden space-y-8 pt-6">
        {packages.map((pkg, index) => (
          <div 
            key={index}
            className={`rounded-lg overflow-visible shadow-lg ${
              pkg.isRecommended ? 'border-2 border-secondary relative pt-4' : ''
            }`}
          >
            {pkg.isRecommended && (
              <div className="absolute -top-5 left-0 right-0 flex justify-center">
                <span className="bg-secondary text-white px-8 py-2 rounded-full text-sm font-medium inline-block">
                  Recommended
                </span>
              </div>
            )}
            <div className={`p-6 ${pkg.isRecommended ? 'bg-white' : 'bg-primary rounded-lg text-white'}`}>
              <h3 className="text-xl font-bold mb-4">{pkg.name}</h3>
              <p className="font-bold text-lg mb-2">{pkg.price} RWF</p>
              <p className="text-sm mb-4">{pkg.description}</p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Custom Design</span>
                  <span>{hasFeature(pkg.features, 'Custom Design') ? '✓' : '−'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Responsive Design</span>
                  <span>{hasFeature(pkg.features, 'Responsive') ? '✓' : '−'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Number of Pages</span>
                  <span>{getFeatureValue(pkg.features, 'Pages')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Working Days</span>
                  <span>{getFeatureValue(pkg.features, 'Delivery')} Days</span>
                </div>
                <div className="flex justify-between">
                  <span>Revision Limit</span>
                  <span>{getFeatureValue(pkg.features, 'Revision')} Month</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view - table layout */}
      <div className="hidden md:block overflow-visible pt-8">
        <table className="w-full border-separate border-spacing-x-4 border-spacing-y-0">
          <thead>
            <tr>
              <th className="w-1/6 rounded-lg pb-5"></th>
              {packages.map((pkg, index) => {
                return (
                  <th 
                    key={index}
                    className={`w-1/4 py-3 pb-5 relative rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white' 
                        : 'bg-primary text-white'
                    }`}
                  >
                    {pkg.isRecommended && (
                      <div className="absolute -top-7 left-0 right-0">
                        <div className="bg-primary text-white py-2 mx-auto w-36 text-center font-medium rounded-full">
                          Recommended
                        </div>
                      </div>
                    )}
                    <div className="text-xl font-bold">{pkg.name}</div>
                  </th>
                );
              })}
            </tr>
          </thead>
          
          <tbody className="[&>tr]:mb-2">
            <tr className="h-6"><td></td></tr>
            
            <tr className="[&>td]:border-b-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Price (RWF)</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-center font-bold text-xl text-secondary rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {pkg.price}
                  </td>
                );
              })}
            </tr>
            
            <tr className="h-2"><td></td></tr>
            
            <tr className="[&>td]:border-b-0 [&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Description</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-sm rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {pkg.description}
                  </td>
                );
              })}
            </tr>
            
            <tr className="h-2"><td></td></tr>
            
            <tr className="[&>td]:border-b-0 [&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Custom Design</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-center rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {hasFeature(pkg.features, 'Custom Design') ? '✓' : '−'}
                  </td>
                );
              })}
            </tr>

            <tr className="h-2"><td></td></tr>

            <tr className="[&>td]:border-b-0 [&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Responsive Design</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-center rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {hasFeature(pkg.features, 'Responsive') ? '✓' : '−'}
                  </td>
                );
              })}
            </tr>

            <tr className="h-2"><td></td></tr>

            <tr className="[&>td]:border-b-0 [&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Number of Pages</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index}
                    className={`py-4 px-6 text-center rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >   
                    {getFeatureValue(pkg.features, 'Pages')}
                  </td>
                );
              })}
            </tr>

            <tr className="h-2"><td></td></tr>

            <tr className="[&>td]:border-b-0 [&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Working Days</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-center rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {getFeatureValue(pkg.features, 'Delivery')} Days
                  </td>
                );
              })}
            </tr>

            <tr className="h-2"><td></td></tr>

            <tr className="[&>td]:border-t-0">
              <td className="py-4 px-6 bg-primary text-white font-bold rounded-lg">Revision Limit</td>
              {packages.map((pkg, index) => {
                return (
                  <td 
                    key={index} 
                    className={`py-4 px-6 text-center rounded-lg ${
                      pkg.isRecommended 
                        ? 'bg-white border border-primary' 
                        : 'bg-gray-200 border border-gray-300'
                    }`}
                  >
                    {getFeatureValue(pkg.features, 'Revision')} Month
                  </td>
                );
              })}
            </tr>
          </tbody>
        </table>
      </div>

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
  );
};

export default Packages;
