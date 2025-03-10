import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterLinks {
  [key: string]: FooterSection;
}

const Footer: FC = () => {
  const currentYear: number = new Date().getFullYear();

  const footerLinks: FooterLinks = {
    products: {
      title: 'services',
      links: [
        { label: 'IT services', href: '/It-services' },
        { label: 'Tours & Travel', href: '/Tours-Travel' },
        { label: 'Korean Cosmetics shop', href: '/Korean-Cosmetics' },
        { label: 'Real Estate Agency', href: '/Real-Estate' },
        { label: 'Art Gallery', href: '/Art-Gallery' }
      ]
    },
    resources: {
      title: 'Resources',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact', href: '/contact' }
      ]
    },
    support: {
      title: 'Support',
      links: [ 
        { label: 'Documentation', href: '/docs' },
        { label: 'Help Desk', href: '/help' },
        { label: 'Security', href: '/security' },
        { label: 'Terms of Service', href: '/terms' }
      ]
    }
  };

  const SocialIcon: FC<{ icon: React.ReactNode; href: string; ariaLabel: string }> = 
    ({ icon, href, ariaLabel }) => (
    <Link 
      href={href} 
      className="text-primary hover:text-secondary transition-colors duration-300" 
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );

  return (
    <footer className="bg-tertiary text-primary mt-auto">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="col-span-1">
            <Image
              src="/images/logodark.png"
              alt="Song&Stark"
              width={150}
              height={50}
              className="mb-6"
            />
            <div className="space-y-3">
              <p className="flex items-center">
                <strong className="text-primary min-w-[60px] text-base">CEO:</strong>
                <span className="text-gray-600 text-base">Wan Song</span>
              </p>
              <p className="flex items-center">
                <strong className="text-primary min-w-[60px] text-base">Phone:</strong>
                <span className="text-gray-600 text-base">0782-892-433</span>
              </p>
              <p className="flex items-center">
                <strong className="text-primary min-w-[60px] text-base">E-mail:</strong>
                <span className="text-gray-600 text-base">eric@songstark.com</span>
              </p>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.values(footerLinks).map((section: FooterSection) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-xl font-semibold mb-6 capitalize">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-gray-600 hover:text-secondary transition-colors duration-300 text-base"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Border line */}
        <div className="border-t border-[#d2dbe2] my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-base text-gray-600 text-center md:text-left">
            © Copyright {currentYear} Song & Stark Cooperation Rwanda Ltd. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-8">
            <SocialIcon 
              href="https://facebook.com"
              ariaLabel="Visit our Facebook page"
              icon={<FaFacebook size={24} />}
            />
            <SocialIcon 
              href="https://twitter.com"
              ariaLabel="Visit our Twitter page"
              icon={<FaTwitter size={24} />}
            />
            <SocialIcon 
              href="https://youtube.com"
              ariaLabel="Visit our YouTube channel"
              icon={<FaYoutube size={24} />}
            />
            <SocialIcon 
              href="https://instagram.com"
              ariaLabel="Visit our Instagram page"
              icon={<FaInstagram size={24} />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
