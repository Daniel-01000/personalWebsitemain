import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const coreSkills = [
    { name: 'Full-Stack Development', description: 'Building features end-to-end' },
    { name: 'Mobile App Development', description: 'React Native (Expo) — iOS & Android' },
    { name: 'REST API Design & Integration', description: 'Connecting frontend ↔ backend' },
    { name: 'Database Design', description: 'MongoDB, Supabase — CRUD flows, schema design' },
    { name: 'AI Feature Implementation', description: 'OpenAI API for chat, insights & summaries' },
    { name: 'UX & Product Thinking', description: 'Simple flows, validated with real users' },
    { name: 'Computer Vision', description: 'Python, OpenCV — defect detection & image processing' },
    { name: 'Payment Integration', description: 'Stripe — subscriptions & one-time payments' },
  ];

  const techStack = {
    'Languages': ['JavaScript', 'TypeScript', 'Python', 'Java'],
    'Frontend / Mobile': ['React', 'React Native (Expo)', 'Next.js', 'HTML', 'CSS'],
    'Backend': ['Node.js', 'Express'],
    'Databases': ['MongoDB (Atlas)', 'Supabase'],
    'AI': ['OpenAI API'],
    'Tools & Platforms': ['Git & GitHub', 'VS Code', 'Stripe', 'REST APIs', 'TestFlight'],
  };

  return (
    <div className="w-full space-y-12">
      {/* Core Skills */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {coreSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-xl bg-dark-800/40 border border-white/5 hover:border-primary-500/30 hover:bg-dark-800/60 transition-all duration-300 group"
            >
              <h3 className="text-white font-semibold text-sm mb-1 group-hover:text-primary-400 transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-gray-400 text-xs">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-white">Tech Stack</h2>
        <div className="space-y-6">
          {Object.entries(techStack).map(([category, technologies], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-primary-400 font-semibold text-base">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="px-3 py-1.5 rounded-full border border-white/20 bg-white/5 text-gray-300 text-sm hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Interests */}
      <div>
        <h2 className="text-2xl font-bold mb-4 text-white">Interests</h2>
        <div className="flex flex-wrap gap-2">
          {['Startups', 'Product Strategy', 'Scalable Systems', 'Football', 'Fitness'].map((interest) => (
            <span
              key={interest}
              className="px-3 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
