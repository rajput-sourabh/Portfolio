import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Mock download - will be replaced with actual file in backend
    window.open(personalInfo.resumeUrl, '_blank');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-gray-900 hover:text-blue-900 transition-colors"
          >
            {personalInfo.name}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('summary')}
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </button>
            <Button
              onClick={handleDownloadResume}
              className="bg-blue-900 hover:bg-blue-800 text-white"
              size="sm"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-900"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('summary')}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
              >
                Contact
              </button>
              <Button
                onClick={handleDownloadResume}
                className="bg-blue-900 hover:bg-blue-800 text-white w-full"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
