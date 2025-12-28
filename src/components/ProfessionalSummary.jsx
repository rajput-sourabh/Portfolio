import React from 'react';
import { Card } from './ui/card';
import { Briefcase, Target, TrendingUp } from 'lucide-react';
import { professionalSummary } from '../data/mock';

const ProfessionalSummary = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "Specialized Expertise",
      description: "Deep knowledge in Shopify custom theme development and multi-platform CMS solutions"
    },
    {
      icon: Target,
      title: "Client-Focused Approach",
      description: "Delivering scalable, high-performing solutions that enhance user experience and maximize engagement"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of improving site performance, SEO rankings, and conversion rates for clients"
    }
  ];

  return (
    <section id="summary" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Professional Summary
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          {/* Main Summary */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-lg border-0 bg-gradient-to-br from-gray-50 to-white">
              <p className="text-lg text-gray-700 leading-relaxed">
                {professionalSummary}
              </p>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 border-0 bg-white group"
                >
                  <div className="space-y-4">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center group-hover:bg-blue-900 transition-colors duration-300">
                      <Icon className="w-7 h-7 text-blue-900 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSummary;
