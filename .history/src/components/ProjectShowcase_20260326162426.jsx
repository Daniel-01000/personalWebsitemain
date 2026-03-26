import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, LayoutDashboard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const projects = [
  {
    slug: 'bp-vital',
    name: 'BP Vital',
    tagline: 'Health monitoring app validated by a blood pressure specialist.',
    description:
      'A React Native mobile app that lets users log blood pressure readings, visualise trends, and generate AI-powered GP-ready summaries. Built with privacy-first design and validated by Dr. Róisín Doogue.',
    stack: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'OpenAI API'],
    badge: 'Mobile App',
    icon: Smartphone,
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop',
    accent: 'from-cyan-500 to-blue-500',
    border: 'hover:border-cyan-500/50',
    tag: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
  },
  {
    slug: 'clientin',
    name: 'ClientIn',
    tagline: 'Loyalty & CRM platform for service businesses.',
    description:
      'A SaaS platform helping small service businesses manage customer loyalty, track retention, and automate re-engagement — built after two years of watching business owners struggle with tools that weren\'t made for them.',
    stack: ['React', 'TypeScript', 'Node.js', 'Supabase', 'Stripe'],
    badge: 'SaaS Platform',
    icon: LayoutDashboard,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
    accent: 'from-primary-500 to-purple-500',
    border: 'hover:border-primary-500/50',
    tag: 'bg-primary-500/10 border-primary-500/20 text-primary-300',
  },
];

const ProjectShowcase = () => {
  const navigate = useNavigate();

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4">PROJECTS</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real products — built to solve real problems, used by real people.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                onClick={() => navigate(`/projects/${project.slug}`)}
                className={`group glass-effect rounded-2xl overflow-hidden cursor-pointer border border-white/10 ${project.border} transition-all duration-300 hover:bg-white/5`}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/40 to-transparent" />
                  <span className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-xs font-medium ${project.tag}`}>
                    {project.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${project.accent} flex items-center justify-center`}>
                      <Icon size={18} className="text-white" />
                    </div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${project.accent} bg-clip-text text-transparent`}>
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-white font-medium mb-3">{project.tagline}</p>
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-gray-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                    Read the full story
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
