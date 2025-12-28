import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{personalInfo.name}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {personalInfo.title} with {personalInfo.yearsOfExperience} years of experience specializing in Shopify and CMS development.
            </p>
            <div className="pt-4">
              <span className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-900 text-white text-sm font-medium">
                Open to Full-Time Opportunities
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection('summary')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('education')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Education
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-400 hover:text-white transition-colors text-left text-sm"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <div className="space-y-3">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
              >
                <Phone className="w-5 h-5 text-blue-400 group-hover:text-blue-300" />
                <span className="text-sm">{personalInfo.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
