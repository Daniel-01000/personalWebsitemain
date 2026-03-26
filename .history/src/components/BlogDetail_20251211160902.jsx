import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag } from 'lucide-react';

const BlogDetail = ({ post, onBack }) => {
  if (!post) return null;

  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300 mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Back to Blog</span>
        </motion.button>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Meta Info */}
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {post.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-6">
            {post.excerpt}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags?.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-300 text-sm"
              >
                <Tag size={14} />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden mb-12 h-64 md:h-96"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 to-transparent" />
          {post.imageLabel && (
            <div className="absolute bottom-4 left-4 px-4 py-2 bg-dark-900/80 backdrop-blur-sm rounded-lg">
              <span className="text-sm text-gray-300">{post.imageLabel}</span>
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="prose prose-invert prose-lg max-w-none"
        >
          {post.content?.map((section, index) => (
            <div key={index} className="mb-8">
              {section.type === 'heading' && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {section.text}
                </h2>
              )}
              {section.type === 'paragraph' && (
                <p className="text-gray-300 leading-relaxed mb-4">
                  {section.text}
                </p>
              )}
              {section.type === 'subheading' && (
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">
                  {section.text}
                </h3>
              )}
              {section.type === 'list' && (
                <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4">
                  {section.items?.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {section.type === 'quote' && (
                <blockquote className="border-l-4 border-primary-500 pl-6 py-2 italic text-gray-400 mb-4">
                  {section.text}
                </blockquote>
              )}
              {section.type === 'code' && (
                <pre className="bg-dark-800 rounded-lg p-4 overflow-x-auto mb-4">
                  <code className="text-sm text-gray-300">{section.text}</code>
                </pre>
              )}
            </div>
          ))}
        </motion.div>

        {/* Author Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 glass-effect rounded-2xl"
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold">
              JD
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">John Doe</h3>
              <p className="text-gray-400">Full-Stack Developer</p>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400"
        >
          <p className="text-sm">© 2025 Made with ❤️ by John Doe</p>
          <div className="flex justify-center gap-6 mt-4">
            <button className="hover:text-primary-400 transition-colors duration-300">Privacy</button>
            <button className="hover:text-primary-400 transition-colors duration-300">Terms</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogDetail;
