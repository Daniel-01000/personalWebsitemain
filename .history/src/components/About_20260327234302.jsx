import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Users, Code2, TrendingUp } from 'lucide-react';
import Skills from './Skills';

const About = () => {
  const features = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'React, React Native, Node.js, Express — shipping features end-to-end',
    },
    {
      icon: Rocket,
      title: 'Product Builder',
      description: 'Founder of ClientIn — a loyalty & CRM platform for service businesses',
    },
    {
      icon: TrendingUp,
      title: 'Content & Growth',
      description: '300+ pieces of content, 200,000+ organic views from a single client',
    },
    {
      icon: Users,
      title: 'User-First Mindset',
      description: 'Validated by real users and specialists, including Dr. Róisín Doogue',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4">
            ABOUT ME
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Turning ideas into <span className="gradient-text">real products</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl p-8 bg-dark-900/60 border border-white/10 backdrop-blur-sm"
            style={{ boxShadow: '0 0 40px rgba(88, 101, 242, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.05)' }}
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-base leading-relaxed">
                I'm <span className="text-white font-semibold">Daniel Sofola</span>, a final-year BSc Computer Science student at <span className="text-primary-400 font-semibold">Technological University Dublin</span>, on track for First-Class Honours (Graduation: 2026).
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I'm the founder of <span className="text-primary-400 font-semibold">ClientIn</span> — a loyalty and CRM platform built for service-based businesses. I'm working directly with businesses to understand retention challenges, managing product direction, feature prioritisation, and securing early adoption pre-launch.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                I also founded <span className="text-primary-400 font-semibold">MediaConnectStudios (MCS)</span>, a content and strategy company working with Irish brands. Through MCS, I produced 300+ pieces of content generating 200,000+ organic views from a single client and built strong networks across Irish entrepreneurship — which directly inspired the product problems I now solve through software.
              </p>
              {/* Features Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="rounded-xl p-5 bg-dark-800/40 hover:bg-dark-800/60 transition-all duration-300 group border border-white/5"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center mb-3 group-hover:bg-primary-500/20 transition-colors duration-300">
                      <feature.icon className="text-primary-400" size={20} />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <div>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
