import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

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
      image: '/images/k-realty.png',
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
        <div className="relative flex flex-col md:flex-row items-start justify-center gap-0 mb-0 md:mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`
                w-full md:w-1/3 px-4 mb-8 md:mb-0 relative
                ${index === 1 ? 'md:z-20 md:w-2/5' : 'md:z-10'} 
                ${index === 0 ? 'md:transform md:translate-x-16' : ''}
                ${index === 2 ? 'md:transform md:-translate-x-16' : ''}
                transition-all duration-300 ease-in-out
              `}
            >
              <div className={`
                ${index === 1 ? 'md:scale-110' : ''}
                transform transition-all duration-300 ease-in-out relative
              `}>
                <Link 
                  href={project.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block bg-white shadow-md overflow-hidden group relative"
                >
                  <div className={`relative w-full
                    ${index === 1 ? 'h-[220px] sm:h-[450px]' : 'h-[220px] sm:h-[400px]'}`}
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
                      className="transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20 md:bg-black/50 lg:bg-black/50 xl:bg-black/50  flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300">
                      <div className="text-white text-center transform translate-y-0 sm:translate-y-4 sm:group-hover:translate-y-0 transition-transform duration-300">
                        <p className="text-xl font-semibold mb-2">Visit Website</p>
                        <span className="text-sm bg-white/40 px-4 py-2 rounded-full font-bold">
                          Click to Open <FontAwesomeIcon icon={faExternalLinkAlt} className="ml-1 " />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>

                <div className={`mt-6 text-center relative z-30 p-2 md:p-4
                  ${index === 1 ? 'md:scale-100 md:mt-4' : ''}
                `}>
                  <h3 className={`font-bold mb-3 text-gray-900 text-center max-w-sm mx-auto
                    ${index === 1 ? 'text-lg' : 'text-lg'}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm max-w-sm mx-auto md:mx-12">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="/services" className="text-white hover:bg-secondary bg-primary px-6 py-3 rounded-md">
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;

