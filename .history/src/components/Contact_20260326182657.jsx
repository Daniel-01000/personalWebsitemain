import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Linkedin, Heart } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sofoladaniel1@gmail.com',
      link: 'mailto:sofoladaniel1@gmail.com',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Dublin, Ireland',
      link: null,
    },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-sofola/', label: 'LinkedIn' },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-900/50">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-4">CONTACT</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-2xl p-6 bg-dark-900/60 border border-white/10 backdrop-blur-sm flex items-center gap-4 group hover:border-white/20 transition-all duration-300"
              style={{ boxShadow: '0 0 30px rgba(88, 101, 242, 0.08), inset 0 1px 0 rgba(255,255,255,0.05)' }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center flex-shrink-0 border border-primary-500/20">
                <info.icon className="text-primary-400" size={22} />
              </div>
              <div className="flex-1">
                <p className="text-gray-400 text-sm mb-1">{info.label}</p>
                {info.link ? (
                  <a href={info.link} className="text-white font-medium hover:text-primary-400 transition-colors duration-300 text-lg">
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white font-medium text-lg">{info.value}</p>
                )}
              </div>
              {info.link && (
                <div className="text-gray-500 group-hover:text-primary-400 transition-colors duration-300">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-gray-400 text-sm">Follow me on</p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-14 h-14 rounded-xl border border-white/10 bg-dark-900/60 backdrop-blur-sm flex items-center justify-center hover:border-primary-500 hover:bg-primary-500/10 transition-all duration-300 hover:scale-110"
              >
                <social.icon size={22} className="text-gray-300" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <div className="w-full bg-dark-950 border-t border-white/10 py-6 px-8 rounded-2xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <a href="#home" className="text-xl font-bold gradient-text">DS.</a>
              <p className="text-gray-400 text-sm flex items-center gap-2">
                © {new Date().getFullYear()} Made with <Heart size={14} className="text-red-500 fill-red-500" /> by Daniel Sofola
              </p>
              <div className="flex gap-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Privacy</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">Terms</a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Contact;
