"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faChevronDown } from '@fortawesome/free-solid-svg-icons';

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
  target?: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Services", 
    href: "/services",
    hasDropdown: true,
    dropdownItems: [
      { name: "IT Solutions", href: "/services/it-solutions" },
      { name: "Tours and Travel", href: "/services/tours-and-travel" },
      { name: "Real Estate", href: "/services/real-estate" },
      { name: "Korean Cosmetics online shopping", href: "/services/korean-cosmetics" },
      { name: "Art Gallery", href: "/services/art-gallery" }
    ]
  },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "S&S Korea", href: "https://www.songstark.com/", target: "_blank", isButton: true },
];

export default function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasScrolled, setHasScrolled] = useState<boolean>(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    setOpenDropdowns(prev => 
      prev.includes(label) 
        ? prev.filter(item => item !== label)
        : [...prev, label]
    );
  };

  const renderNavItem = ({ label, href, isButton, hasDropdown, dropdownItems }: NavItem): React.ReactElement => {
    const isActive = pathname === href;
    const isDropdownOpen = openDropdowns.includes(label);
     
    if (isMobile) {
      // Button items (like S&S Korea)
      if (isButton) {
        return (
          <div className="w-full">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-secondary px-4 py-2 rounded-3xl hover:opacity-80"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          </div>
        );
      }

      // Services item with dropdown
      if (label === "Services") {
        return (
          <div className="w-full">
            <div 
              className="flex items-center justify-between w-full cursor-pointer"
              onClick={() => window.location.href = href}
            >
              <span className={`relative ${
                isActive ? 'after:w-[20px]' : 'after:w-0'
              } after:content-[''] after:absolute after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px]`}>
                {label}
              </span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleDropdown("Services", e);
                }}
                className="p-2"
              >
                <FontAwesomeIcon 
                  icon={faChevronDown}
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="pl-4 space-y-3 mt-2">
                {dropdownItems?.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`relative ${
                      pathname === item.href ? 'after:w-[20px]' : 'after:w-0'
                    } after:content-[''] after:absolute after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px]`}>
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        );
      }

      // Regular navigation items
      return (
        <Link
          href={href}
          className="block w-full"
          onClick={() => setIsOpen(false)}
        >
          <span className={`relative ${
            isActive ? 'after:w-[20px]' : 'after:w-0'
          } after:content-[''] after:absolute after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px]`}>
            {label}
          </span>
        </Link>
      );
    }
    return (
      <div
        key={href}
        className="relative"
        onMouseEnter={() => hasDropdown && handleMouseEnter(label)}
        onMouseLeave={handleMouseLeave}
      >
        {isButton ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`relative bg-secondary px-4 py-2 rounded-3xl hover:opacity-80`}
          >
            {label}
          </a>
        ) : (
          <Link
            href={href}
            className={`relative ${
              `after:content-[''] after:absolute after:h-[2px] after:bg-white after:left-0 after:bottom-[-4px] after:transition-all after:duration-500 
               ${isActive ? 'after:w-[20px] ' : 'after:w-0 hover:after:w-[20px] '}` 
            }`}
          >
            {label}
          </Link>
        )}
        {hasDropdown && activeDropdown === label && (
          <div 
            className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-lg py-2 text-gray-800 
            before:content-[''] before:absolute before:top-[-15px] before:left-0 before:right-0 before:h-[15px] before:transparent
            transition-all duration-300 ease-in-out transform origin-top
            opacity-100 scale-100"
            style={{
              transformOrigin: 'top center',
              animation: 'dropdownFade 0.3s ease-in-out'
            }}
          >
            {dropdownItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 pb-4 relative hover:bg-gray-50 transition-colors duration-200"
              >
                <span className={`relative after:content-[''] after:absolute after:h-[2px] after:bg-primary after:left-0 after:bottom-[-4px] after:transition-all after:duration-500 ${
                  pathname === item.href ? 'after:w-[20px]' : 'after:w-0 hover:after:w-[20px]'
                }`}>
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  const globalStyles = `
    @keyframes dropdownFade {
      from {
        opacity: 0;
        transform: translateY(-10px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }
  `;

  return (
    <>
      <style jsx global>{globalStyles}</style>
      <header className={`fixed w-full z-[1000] transition-all duration-500 ease-out ${
        isHomePage && !hasScrolled ? 'bg-transparent' : 'bg-primary shadow-xl'
      } text-white py-3`}>  
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center"> 
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Song&Stark"
                  width={140}
                  height={46}
                  className="w-[140px] md:w-[180px]"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-10 items-center font-light">
              {navItems.map((item) => (
                <div key={item.href}>
                  {renderNavItem(item)}
                </div>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden p-1 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon 
                icon={faBars}
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Drawer Style */}
        {isMobile && (
          <div
            className={`fixed top-0 left-0 h-full w-[280px] bg-primary transition-all duration-300 ease-in-out transform ${
              isOpen ? 'translate-x-0' : '-translate-x-full'
            } z-[1001]`}
          >
            {/* Close button at top */}
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsOpen(false)}
                className="text-white"
              >
                <FontAwesomeIcon 
                  icon={faXmark}
                  className="w-5 h-5"
                />
              </button>
            </div>

            {/* Navigation items */}
            <div className="px-4">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <div key={item.href} className="w-full">
                    {renderNavItem(item)}
                  </div>
                ))}
              </nav>
            </div>
          </div>
        )}

        {/* Overlay when drawer is open */}
        {isMobile && isOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[1000]"
            onClick={() => setIsOpen(false)}
          />
        )}
      </header>
      {!isHomePage && <div className="h-[64px]" />}
    </>
  );
}
