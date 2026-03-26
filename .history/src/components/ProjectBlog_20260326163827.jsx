import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from './blogData';

// Map slug → blog post id
const projectMap = {
  'bp-vital': 7,
  'clientin': 8,
};

const ProjectBlog = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const postId = projectMap[slug];
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-400 text-lg">Project not found.</p>
      </div>
    );
  }

  const accentColor = slug === 'bp-vital' ? 'from-blue-500 to-cyan-400' : 'from-primary-500 to-purple-500';
  const tagColor = slug === 'bp-vital'
    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300'
    : 'bg-primary-500/10 border-primary-500/20 text-primary-300';

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-200 mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={`inline-block px-3 py-1 rounded-full border text-xs mb-6 ${tagColor}`}>
            {post.category}
          </span>

          <h1 className={`text-3xl md:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r ${accentColor} bg-clip-text text-transparent`}>
            {post.title}
          </h1>

          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-6 text-gray-400 text-sm mb-10 pb-10 border-b border-white/10">
            <span className="flex items-center gap-2"><Calendar size={16} />{post.date}</span>
            <span className="flex items-center gap-2"><Clock size={16} />{post.readTime}</span>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-12 h-72 md:h-96"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-0"
        >
          {post.content.split('\n\n').map((para, i) => {
            // Bold-only line → subheading
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h2 key={i} className="text-white font-bold text-2xl mt-12 mb-4">
                  {para.replace(/\*\*/g, '')}
                </h2>
              );
            }
            // Numbered or bullet list
            if (para.startsWith('1.') || para.match(/^- /m)) {
              const items = para.split('\n').filter(Boolean);
              return (
                <ul key={i} className="space-y-2 mb-6 ml-4">
                  {items.map((item, j) => (
                    <li key={j} className="text-gray-300 leading-relaxed flex gap-2">
                      <span className="text-primary-400 mt-1">•</span>
                      <span dangerouslySetInnerHTML={{
                        __html: item
                          .replace(/^[\d\-\.\s]+/, '')
                          .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                      }} />
                    </li>
                  ))}
                </ul>
              );
            }
            // Inline bold
            if (para.includes('**')) {
              return (
                <p key={i} className="text-gray-300 leading-relaxed mb-6 text-lg"
                  dangerouslySetInnerHTML={{
                    __html: para.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  }}
                />
              );
            }
            return (
              <p key={i} className="text-gray-300 leading-relaxed mb-6 text-lg">
                {para}
              </p>
            );
          })}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm">Want to know more? Get in touch.</p>
          <button
            onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            className="btn-primary"
          >
            Get in Touch
          </button>
        </motion.div>

      </div>
    </div>
  );
};

export default ProjectBlog;
