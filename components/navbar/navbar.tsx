import Link from 'next/link';

import { DevpostLogo } from './devpost-logo.component';
import { GithubLogo } from './github-logo.component';
import { LinkedInLogo } from './linked-in-logo.component';

export const Navbar = () => {
  return (
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

      <button className="md:hidden flex flex-col justify-center items-center w-8 h-8">
        <span className="w-6 h-0.5 bg-dark-brown mb-1"></span>
        <span className="w-6 h-0.5 bg-dark-brown mb-1"></span>
        <span className="w-6 h-0.5 bg-dark-brown"></span>
      </button>
    </nav>
  );
};
