import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      period: '2025 – Present',
      title: 'Founder & Product Lead',
      company: 'ClientIn — Dublin, Ireland',
      icon: Briefcase,
      description: 'Building a loyalty and CRM platform designed for service-based businesses. Working directly with businesses to understand retention challenges and translate them into product features.',
      achievements: [
        'Product direction & roadmap',
        'Feature prioritisation',
        'UX design & user research',
        'Early business adoption',
        'Pre-launch validation',
      ],
    },
    {
      period: '2024 – Present',
      title: 'Founder & Technical Strategist',
      company: 'MediaConnectStudios (MCS) — Ireland',
      icon: Briefcase,
      description: 'Founded a content and strategy company working with multiple Irish brands. Worked directly with business owners to identify growth and retention challenges. The insights gained inspired the product problems now solved through ClientIn.',
      achievements: [
        '300+ pieces of content produced',
        '200,000+ organic views from a single client',
        'Strategy → filming → editing → posting',
        'Built strong entrepreneurial network',
        'Inspired ClientIn product concept',
      ],
      brands: [
        'Paul Sheeran Jewellers',
        'Louis Copeland',
        'Stable of Ireland',
        'Rock Salt Café',
        '& more',
      ],
    },
    {
      period: '2021 – 2026',
      title: 'BSc Computer Science (On track for First-Class Honours)',
      company: 'Technological University Dublin — Dublin, Ireland',
      icon: GraduationCap,
      description: 'Studying Computer Science with a focus on practical software development. Relevant modules include Data Analytics, UX Design, and Business Strategy. Expected graduation: 2026.',
      achievements: [
        'Data Analytics',
        'UX Design',
        'Business Strategy',
        'Web Developer Bootcamp 2025',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
            Experience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500 via-purple-500 to-transparent transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-950 transform md:-translate-x-1/2 z-10" />

                {/* Content Card */}
                <div className={`flex-1 ml-8 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="glass-effect rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-4">
                      <exp.icon className="text-primary-400" size={24} />
                    </div>
                    <p className="text-primary-400 text-sm font-semibold mb-2">{exp.period}</p>
                    <h3 className="text-white font-bold text-xl mb-1">{exp.title}</h3>
                    <p className="text-primary-300 font-medium mb-4">{exp.company}</p>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-xs"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                    {exp.brands && (
                      <div className="mt-4">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Brands worked with</p>
                        <div className="flex flex-wrap gap-2">
                          {exp.brands.map((brand, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-xs"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
