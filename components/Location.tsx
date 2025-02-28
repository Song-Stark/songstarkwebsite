"use client";

import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Image from 'next/image';

const Location: React.FC = () => {
  useEffect(() => {
    let map: L.Map | undefined;

    if (!map) {
      map = L.map('map').setView([-1.9587237, 30.1106656], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      L.marker([-1.9587237, 30.1106656]).addTo(map)
        .bindPopup('S&S Office in Rwanda')
        .openPopup();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []);

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
              className="w-full h-full object-cover"
              width={600}
              height={400}
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

          {/* OpenStreetMap with Leaflet */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div id="map" style={{ width: '100%', height: '400px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
