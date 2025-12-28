import React from 'react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/mock';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">
              Selected Work
            </h2>
            <div className="w-24 h-1 bg-blue-900 mx-auto"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contributed to 30+ Shopify stores across customization, optimization, and maintenance.
              <br />
              Here are some highlighted projects:
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-blue-900 text-white hover:bg-blue-800">
                      {project.platform}
                    </Badge>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-900">
                      {project.role}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-gray-100 text-gray-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <Button
                    variant="outline"
                    className="w-full border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white"
                    onClick={() => window.open(project.liveLink, '_blank')}
                  >
                    <Code2 className="w-4 h-4 mr-2" />
                    View Details
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
