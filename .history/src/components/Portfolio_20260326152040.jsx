import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'BP Vital',
      category: 'Mobile App',
      description: 'A health monitoring mobile app for tracking blood pressure with visual trends, history logging, and an AI assistant that generates GP-ready summaries. Validated by blood pressure specialist Dr. Róisín Doogue.',
      tags: ['React Native', 'Expo', 'OpenAI API', 'Node.js', 'MongoDB'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
      links: { live: null },
    },
    {
      id: 2,
      title: 'ClientIn',
      category: 'SaaS Platform',
      description: 'A loyalty and CRM platform designed for service-based businesses. Helps businesses manage retention challenges, customer relationships, and feature-driven growth — currently in pre-launch with early business adoption secured.',
      tags: ['React', 'Node.js', 'Supabase', 'Stripe', 'TypeScript'],
      featured: true,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      links: { live: null },
    },
    {
      id: 3,
      title: 'O-Ring Inspection System',
      category: 'Computer Vision',
      description: 'An image processing system built with Python and OpenCV to detect defects in industrial O-rings. Applied thresholding, histogram analysis, morphological operations, and connected component analysis to classify pass/fail outcomes based on thickness variation.',
      tags: ['Python', 'OpenCV', 'NumPy', 'Image Processing'],
      featured: false,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop',
      links: { live: null },
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real projects — built to solve real problems, used by real people
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative glass-effect rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                  Featured
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/50 to-transparent opacity-60" />

                {/* Hover Live Link */}
                {project.links.live && (
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-300"
                      aria-label="View live"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-primary-400 text-sm font-semibold mb-2">{project.category}</p>
                <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
