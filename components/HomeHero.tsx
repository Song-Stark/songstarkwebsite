import { FC } from 'react';
import Link from 'next/link';

interface HomeHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const HomeHero: FC<HomeHeroProps> = ({
  title = <>Connecting <span className="text-secondary">Rwanda</span> to the <span className="text-secondary">World</span>, Strengthening Global Ties for a <span className="text-secondary">Prosperous Future</span></>,
  description = "By building strong human and material exchange channels from Rwanda. We aim to contribute to the continued revitalization of solid mutual trust and broader and deeper economic exchanges.",
  backgroundImage = "/images/hero-1.jpg"
}) => {
  return (
    <div className="relative w-full h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-800/60 to-slate-900/80" />
      </div>
      {/* Content */}
      <div className="relative flex h-full items-center max-w-6xl mx-auto justify-start sm:justify-start text-left sm:text-left px-4 sm:px-6">
        <div className="text-white py-8 max-w-4xl text-center sm:text-left">
          <h1 className="mb-6 sm:mb-6 text-white text-[29.7px]  text-center  lg:text-left xl:text-left md:text-left  sm:text-3xl md:text-4xl lg:text-5xl leading-tight sm:leading-normal font-semibold xl:text-5xl xl:leading-normal opacity-0 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            {title}
          </h1>
          <p className="text-base sm:text-base leading-relaxed font-light lg:text-lg xl:leading-8 mb-8 sm:mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 opacity-0 animate-fade-in-up w-1/2 mx-auto sm:w-auto sm:mx-0" style={{ animationDelay: '700ms' }}>
            <Link 
              href="/services" 
              className="w-full sm:w-auto bg-secondary hover:bg-secondary/80 text-white px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-102 font-medium text-sm text-center"
            >
              Our Services
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-5 sm:px-6 py-2.5 rounded-full transition-all duration-300 transform hover:scale-102 font-medium text-sm text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeHero;
