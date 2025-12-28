import React from 'react';
import { Card } from './ui/card';
import { Building2, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { workExperience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional journey delivering high-impact eCommerce and CMS solutions
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-5xl mx-auto">
            {workExperience.map((job, index) => (
              <Card
                key={job.id}
                className="p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-900 bg-gradient-to-br from-white to-gray-50"
              >
                <div className="space-y-6">
                  {/* Job Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-3">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.role}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-gray-600">
                        <div className="flex items-center space-x-2">
                          <Building2 className="w-5 h-5 text-blue-900" />
                          <span className="font-semibold">{job.company}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-5 h-5 text-blue-900" />
                          <span>{job.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-5 h-5 text-blue-900" />
                          <span>{job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      Key Achievements & Responsibilities:
                    </h4>
                    <ul className="space-y-3">
                      {job.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="flex items-start space-x-3 text-gray-700"
                        >
                          <CheckCircle2 className="w-5 h-5 text-blue-900 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{resp}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;
