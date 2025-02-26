import { FC } from 'react';

interface HomeHeroProps {
  title?: string;
  description?: string;
  backgroundImage?: string;
}

const HomeHero: FC<HomeHeroProps> = ({
  title = "Connecting Rwanda to the World",
  description = "By building strong human and material exchange channels from Rwanda. We aim to contribute to the continued revitalization of solid mutual trust and broader and deeper economic exchanges.",
  backgroundImage = "/images/hero.jpg"
}) => {
  return (
    <div className="relative w-full h-[70vh]">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative  flex h-full items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            {title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
