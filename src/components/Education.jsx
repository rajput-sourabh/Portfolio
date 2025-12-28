import React from 'react';
import { Card } from './ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { education } from '../data/mock';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Education
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
          </div>

          {/* Education Cards */}
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((edu) => (
              <Card
                key={edu.id}
                className="p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-900 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left Content */}
                  <div className="space-y-4 flex-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-900" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-lg text-gray-700 font-medium">
                          {edu.field}
                        </p>
                        <p className="text-gray-600">
                          {edu.institution}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right Content */}
                  <div className="flex flex-col items-start md:items-end space-y-3">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Calendar className="w-5 h-5 text-blue-900" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Award className="w-5 h-5 text-blue-900" />
                      <span className="text-lg font-bold text-blue-900">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
