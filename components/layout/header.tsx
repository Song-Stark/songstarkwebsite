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
          <div className="absolute left-0 mt-1 w-72 bg-white rounded-lg shadow-lg py-2 text-gray-800 before:content-[''] before:absolute before:top-[-15px] before:left-0 before:right-0 before:h-[15px] before:transparent">
            {dropdownItems?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 pb-4 relative hover:bg-gray-50"
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

  return (
    <>
      <header className={`fixed w-full z-[1000] transition-all duration-500 ease-out ${
        isHomePage && !hasScrolled ? 'bg-transparent' : 'bg-primary'
      } text-white  py-3`}>
        <div className="container mx-auto px-4">
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
                icon={isOpen ? faXmark : faBars}
                className="w-5 h-5 md:w-6 md:h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-primary transition-all duration-500 ease-out z-[1000] ${
            isOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="container mx-auto px-4 py-8">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.href}>
                  {renderNavItem(item)}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </header>
      {!isHomePage && <div className="h-16 md:h-24" />}
    </>
  );
}
