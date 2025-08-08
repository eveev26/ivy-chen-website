'use client';

import Link from 'next/link';
import { useState } from 'react';

import { DevpostLogo } from './devpost-logo.component';
import { GithubLogo } from './github-logo.component';
import { LinkedInLogo } from './linked-in-logo.component';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row w-full min-h-20 p-8 justify-between bg-white">
        <div className="flex flex-row gap-4 md:gap-12">
          <GithubLogo />
          <LinkedInLogo />
          <DevpostLogo />
        </div>

        <div className="hidden md:flex flex-row gap-12">
          <Link
            href="#landing"
            className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
          >
            home
          </Link>
          <Link
            href="#projects"
            className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
          >
            projects
          </Link>
          <Link
            href="#experience"
            className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
          >
            experience
          </Link>
          <Link
            href="#about-me"
            className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
          >
            about me
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 cursor-pointer"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span
            className={`w-6 h-0.5 bg-dark-brown mb-1 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-dark-brown mb-1 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}
          ></span>
          <span
            className={`w-6 h-0.5 bg-dark-brown transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
          ></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 right-0 z-40 bg-white border-t border-gray-200 transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex flex-col p-8 gap-6">
          <Link
            href="#landing"
            className="text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
            onClick={closeMobileMenu}
          >
            home
          </Link>
          <Link
            href="#projects"
            className="text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
            onClick={closeMobileMenu}
          >
            projects
          </Link>
          <Link
            href="#experience"
            className="text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
            onClick={closeMobileMenu}
          >
            experience
          </Link>
          <Link
            href="#about-me"
            className="text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
            onClick={closeMobileMenu}
          >
            about me
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}
    </>
  );
};
