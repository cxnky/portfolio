"use client";

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BiCodeAlt } from 'react-icons/bi';
import { HiChevronDown } from 'react-icons/hi';

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/cxnky",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com/in/connorswright",
    label: "LinkedIn",
  },
  {
    icon: HiMail,
    href: "mailto:connor@connorwright.uk",
    label: "Email",
  },
];

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#experience');
    projectsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <div className="flex-1 flex items-center">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-transparent 
            dark:from-gray-900 dark:via-gray-900 dark:to-transparent opacity-90" />
        </div>

        <div className="max-w-4xl mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Code Icon Placeholder */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 
                animate-gradient blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
              <div className="relative h-full rounded-3xl overflow-hidden border-2 border-white/20 
                dark:border-gray-800/50 backdrop-blur-sm bg-white/10 dark:bg-gray-800/10
                flex items-center justify-center">
                <BiCodeAlt className="w-32 h-32 text-gray-800/80 dark:text-white/80 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 
                  animate-gradient" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent 
                bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 animate-gradient">
                Connor Wright
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700 dark:text-gray-300">
                Software Developer
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Passionate about building projects that have a measurable impact on people's lives
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center md:justify-start">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-600 hover:text-blue-500 dark:text-gray-400 
                      dark:hover:text-blue-400 transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToProjects}
          className="group flex items-center justify-center w-12 h-12 rounded-full 
            border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 
            dark:hover:border-blue-400 transition-colors duration-300"
          aria-label="Scroll to projects"
        >
          <HiChevronDown className="w-6 h-6 text-gray-600 dark:text-gray-300 
            group-hover:text-blue-500 dark:group-hover:text-blue-400 
            transition-colors duration-300" />
        </button>
      </div>
    </div>
  );
} 