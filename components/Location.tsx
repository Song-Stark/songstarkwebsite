import React from 'react';
import 'leaflet/dist/leaflet.css';
import Image from 'next/image';

const Location: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-primary mb-8">
          Our Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Image Section */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/hero.jpg"
              alt="Office"
              className="w-full h-72 object-cover"
              width={450}
              height={300}
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-primary to-transparent p-4 w-full">
              <h3 className="text-xl font-bold text-white">
                S&S Office in Rwanda
              </h3>
              <p className="text-sm text-white">
                KG 11 Ave, IKAZE HOUSE (Kisimenti), F5-506, Kigali - RWANDA
              </p>
            </div>
          </div>

          {/* Google Map Embed Using Embed API */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <iframe
              width="100%"
              height="400"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCMwEJJqZQ1haIxNy0Wd6B1tzqtJAsG-SU&q=K-realty+Rwanda+Kigali,+KG+11+Ave,+IKAZE+HOUSE"
              frameBorder="0"
              allowFullScreen
              aria-hidden="false"
              tabIndex={0} 
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
