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
      className="text-primary hover:text-secondary  transition-colors" 
      aria-label={ariaLabel}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );

  return (
    <footer className="bg-tertiary text-primary mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <Image
              src="/images/logodark.png"
              alt="Song&Stark"
              width={180}
              height={60}
              className="mb-4"
            />
            <div className="space-y-2 text-sm text-gray-600">
              <p><strong className="text-primary">CEO:</strong> Wan Song</p>
              <p><strong className="text-primary">Phone:</strong> 0782-892-433</p>
              <p><strong className="text-primary">E-mail:</strong> eric@songstark.com</p>
            </div>
          </div>

          {/* Navigation Sections */}
          {Object.values(footerLinks).map((section: FooterSection) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link: FooterLink) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                    className="text-gray-600 hover:text-secondary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#d2dbe2] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © Copyright {currentYear} Song & Stark Cooperation Rwanda Ltd. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-6 mt-4 md:mt-0">
            <SocialIcon 
              href="https://facebook.com"
              ariaLabel="Visit our Facebook page"
              icon={<FaFacebook size={20} />}
            />
            <SocialIcon 
              href="https://twitter.com"
              ariaLabel="Visit our Twitter page"
              icon={<FaTwitter size={20} />}
            />
            <SocialIcon 
              href="https://youtube.com"
              ariaLabel="Visit our YouTube channel"
              icon={<FaYoutube size={20} />}
            />
            <SocialIcon 
              href="https://instagram.com"
              ariaLabel="Visit our Instagram page"
              icon={<FaInstagram size={20} />}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;