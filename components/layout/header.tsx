"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isButton?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "S&S Korea", href: "/korea", isButton: true },
];

export default function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderNavItem = ({ label, href, isButton }: NavItem): React.ReactElement => (
    <Link
      key={label}
      href={href}
      className={`hover:opacity-80 ${
        isButton ? "bg-secondary px-4 py-2 rounded-3xl hover:opacity-90" : ""
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header className="bg-primary text-white relative">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Song&Stark"
              width={180}
              height={60}
              priority
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10 items-center font-light">
            {navItems.map(renderNavItem)}
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              // Close icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute left-0 right-0 bg-primary transition-all duration-300 ease-in-out z-50 ${
            isOpen ? 'opacity-100 visible top-full' : 'opacity-0 invisible -translate-y-4'
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <div key={item.label} onClick={() => setIsOpen(false)}>
                  {renderNavItem(item)}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
