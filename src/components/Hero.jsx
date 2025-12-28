import React from 'react';
import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo, stats } from '../data/mock';

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(personalInfo.resumeUrl, '_blank');
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-900 text-sm font-medium">
                  Open to Full-Time Opportunities
                </span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700">
                {personalInfo.title}
              </h2>
              <p className="text-lg text-gray-600 max-w-xl">
                {personalInfo.yearsOfExperience} years of experience building high-performance eCommerce solutions and conversion-driven websites across multiple CMS platforms.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-6 text-base"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
               <a href="/sourabh-rajput.pdf"> Download Resume </a>
              </Button>
              <Button
                onClick={scrollToProjects}
                variant="outline"
                className="border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white px-8 py-6 text-base"
                size="lg"
              >
                View Projects
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-gray-200">
              {stats.map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-blue-900">{stat.value}</div>
                  <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-gray-100 rounded-3xl transform rotate-6"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                      SR
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Sourabh Rajput</div>
                      <div className="text-sm text-gray-600">Shopify Developer</div>
                    </div>
                  </div>
                  <div className="h-px bg-gray-200"></div>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      Available for hire
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                      {personalInfo.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                      {personalInfo.yearsOfExperience} years experience
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Expertise</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Shopify</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Liquid</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Squarespace</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">WordPress</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">Basic SEO</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">eCommerce</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
