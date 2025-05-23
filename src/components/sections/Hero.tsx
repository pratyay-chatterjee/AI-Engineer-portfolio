import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Send } from 'lucide-react';
import { Link } from 'react-scroll';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 bg-hero-pattern">
      <div className="container-custom">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-lg text-secondary font-medium">Hi, I'm</span>
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Pratyay Chatterjee <span className="inline-block">👨‍💻</span>
          </motion.h1>
          
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-text-muted mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            AI Engineer | Full Stack Developer | Tech Leader
          </motion.h2>
          
          <motion.div
            className="mb-10 h-8 md:h-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                'AI',
                1000,
                'Machine Learning',
                1000,
                'React.js',
                1000,
                'Python',
                1000,
                'AWS',
                1000,
                'Full Stack',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-xl md:text-2xl font-medium text-secondary"
            />
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
            >
              <Download size={18} />
              View Resume
            </a>
            
            <Link
              to="contact"
              smooth={true}
              duration={800}
              offset={-100}
              className="btn-secondary cursor-pointer"
            >
              <Send size={18} />
              Contact Me
            </Link>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <span className="text-sm text-text-muted mb-2">Scroll Down</span>
          <div className="w-0.5 h-16 bg-gradient-to-b from-secondary to-transparent rounded-full animate-bounce-slow"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;