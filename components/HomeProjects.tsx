import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const HomeProjects: React.FC = () => {
  const projects: Project[] = [
    {
      title: 'Real Estate Agency',
      description: 'K-realty is a Real Estate company that provides a wide range of real estate services..',
      image: '/images/krealty.png',
      link: 'https://www.k-realtyrwanda.com/'
    },
    {
      title: 'Tour Services',
      description: 'Song & Stark tours is a reputable Tour agency operating in Rwanda offering private and tailor-made tours to tourists. ',
      image: '/images/tours-site.png',
      link: 'https://songstarktours.com/'
    },
    {
      title: 'Korean Cosmetic Shop',
      description: 'K-Mart is a platform that sells Korean products in Rwanda focusing on the cosmetics products.',
      image: '/images/kmart.png',
      link: 'https://k-martrwanda.com/'
    }
  ];

  return (
    <section className="w-full mt-[-6rem] py-10">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-4 md:gap-0 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                w-full md:w-1/3 mb-6 md:mb-0 relative
                ${index === 1 ? 'md:z-20 md:w-2/5' : 'md:z-10'} 
                ${index === 0 ? 'md:transform md:translate-x-16' : ''}
                ${index === 2 ? 'md:transform md:-translate-x-16' : ''}
                transition-all duration-300 ease-in-out
              `}
            >
              <div className={`
                ${index === 1 ? 'md:scale-110' : ''}
                transform transition-all duration-300 ease-in-out relative
                w-full rounded-lg overflow-hidden
                md:hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)]
                md:group
              `}>
                <div className="p-3">
                  <div className={`relative w-full rounded-md overflow-hidden
                    ${index === 1 ? 'h-[180px] md:h-[260px]' : 'h-[180px] md:h-[240px]'}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center top'
                      }}
                      className="md:transition-transform md:duration-500 md:group-hover:scale-105"
                    />
                  </div>
                  
                  <div className="pt-3 pb-2 px-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-gray-800">
                        {project.title}
                      </h3>
                      <Link 
                        href={project.link}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full
                          bg-primary/10 text-primary
                          md:hover:bg-primary md:hover:text-white
                          transition-colors duration-300"
                      >
                        <FontAwesomeIcon 
                          icon={faArrowRight} 
                          className="w-4 h-4"
                        />
                      </Link>
                    </div>
                    <p className="text-sm text-gray-500 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 rounded-md bg-gray-50/50 text-gray-600">
                        {index === 0 ? 'Real Estate' : index === 1 ? 'Tourism' : 'E-commerce'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link 
            href="/services" 
            className="group flex items-center gap-2 px-6 py-3 bg-tertiary text-primary rounded-full hover:bg-primary/90  hover:text-white transition-all duration-300 hover:gap-3 text-sm">
            View All Projects
            <FontAwesomeIcon 
              icon={faChevronRight} 
              className="w-4 h-4"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;

