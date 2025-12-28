import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Globe, Wrench, BarChart } from 'lucide-react';
import { skills } from '../data/mock';

const Skills = () => {
  const skillCategories = [
    {
      title: "Shopify & eCommerce",
      icon: Code,
      color: "bg-blue-50 text-blue-900",
      skills: skills.shopifyEcommerce
    },
    {
      title: "CMS Platforms",
      icon: Globe,
      color: "bg-purple-50 text-purple-900",
      skills: skills.cmsPlatforms
    },
    {
      title: "Web Technologies",
      icon: Wrench,
      color: "bg-green-50 text-green-900",
      skills: skills.webTechnologies
    },
    {
      title: "Tools & Analytics",
      icon: BarChart,
      color: "bg-orange-50 text-orange-900",
      skills: skills.tools
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Skills & Tech Stack
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive technical expertise across modern eCommerce platforms and web technologies
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <Card
                  key={index}
                  className="p-8 hover:shadow-xl transition-all duration-300 border-0 bg-white"
                >
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-2xl font-semibold text-gray-900">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skills List */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-800 transition-colors"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
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

export default Skills;
