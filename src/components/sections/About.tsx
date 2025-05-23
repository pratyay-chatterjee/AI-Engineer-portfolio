import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, GraduationCap, Star } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="about" className="section-padding bg-gradient-radial from-primary-50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">About Me</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Get to know my background and what drives me
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-secondary/30 glow-border">
                <img 
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pratyay Chatterjee"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-background p-3 rounded-lg border border-primary/30 glow-border">
                <GraduationCap size={32} className="text-secondary" />
              </div>
              <div className="absolute -top-4 -left-4 bg-background p-3 rounded-lg border border-primary/30 glow-border">
                <Star size={32} className="text-secondary" />
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Bio */}
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-6"
          >
            <motion.h3 variants={itemVariants} className="text-2xl md:text-3xl font-bold gradient-text">
              Passionate AI Engineer
            </motion.h3>
            
            <motion.p variants={itemVariants} className="text-lg leading-relaxed text-text-muted">
              Based in Kolkata, India with a GPA of 8.9 from UEM Kolkata. I'm skilled in machine learning, deep learning, software engineering, and full-stack development. I'm enthusiastic about building impactful tech solutions and leading innovation.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-text-muted">
              <MapPin size={18} className="text-secondary" />
              <span>Newtown, Kolkata, West Bengal, India</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-background-light p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-secondary mb-1">Education</h4>
                <p className="text-sm text-text-muted">B.Tech in CSE (AI & ML)</p>
              </div>
              <div className="bg-background-light p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-secondary mb-1">Experience</h4>
                <p className="text-sm text-text-muted">Tech Lead & President</p>
              </div>
              <div className="bg-background-light p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-secondary mb-1">Projects</h4>
                <p className="text-sm text-text-muted">AI & Full-Stack</p>
              </div>
              <div className="bg-background-light p-4 rounded-lg border border-primary/10">
                <h4 className="font-semibold text-secondary mb-1">GPA</h4>
                <p className="text-sm text-text-muted">8.9/10</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;