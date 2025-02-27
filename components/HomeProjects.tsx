import Image from 'next/image';
import Link from 'next/link';

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
      description: 'We offer a full range of real estate brokerage services, from connecting buyers and sellers to property management that boosts value and returns.',
      image: '/images/krealty.png',
      link: 'https://www.k-realtyrwanda.com/'
    },
    {
      title: 'Tour Services',
      description: 'Song & Stark Tours offers private, tailor-made tours in Rwanda with top service, luxury stays, and unforgettable adventures.',
      image: '/images/tours-site.png',
      link: 'https://songstarktours.com/'
    },
    {
      title: 'Korean Cosmetic Shop',
      description: 'K-Mart is a platform selling Korean cosmetic products in Rwanda, fostering trade, trust, and economic ties between the Korea and Rwanda.',
      image: '/images/kmart.png',
      link: 'https://k-martrwanda.com/'
    }
  ];

  return (
    <section className="w-full -mt-16">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col md:flex-row items-stretch justify-center gap-0">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`
                w-full md:w-1/4 px-4 mb-8 md:mb-0
                ${index === 1 ? 'md:z-20 md:-mt-4' : 'md:z-10'} 
                ${index === 0 ? 'md:transform md:translate-x-12' : ''}
                ${index === 2 ? 'md:transform md:-translate-x-12' : ''}
                transition-all duration-300 ease-in-out
              `}
            >
              {/* Image Container */}
              <Link 
                href={project.link}
                target="_blank" 
                rel="noopener noreferrer"
                className={`
                  block bg-white rounded-xl shadow-xl overflow-hidden mb-6
                  ${index === 1 ? 'md:scale-110 hover:scale-[1.15]' : 'hover:scale-105'}
                  transform transition-all duration-300 ease-in-out
                `}
              >
                <div className={`relative w-full overflow-hidden
                  ${index === 1 ? 'h-[400px]' : 'h-[200px]'} md:h-[400px]`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </Link>

              {/* Text Container */}
              <div className={`text-center px-4 mt-4
                ${index === 1 ? 'md:scale-110' : ''}
                transform transition-all duration-300 ease-in-out
              `}>
                <h3 className={`font-bold mb-2 text-gray-900
                  ${index === 1 ? 'text-base md:text-base' : 'text-base md:text-lg'}`}
                >
                  {project.title}
                </h3>
                <p className={`text-gray-600 leading-relaxed
                  ${index === 1 ? 'text-xs md:text-xs' : 'text-xs md:text-xs'}`}
                >
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
            <Link href="/projects" className="text-white hover:bg-secondary bg-primary px-4 py-2 rounded-md mb-10">
                View All Projects
            </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
