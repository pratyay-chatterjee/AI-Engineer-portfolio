import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Sparkles, TerminalSquare, Cog, LineChart } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo?: string;
  icon: React.ReactNode;
}

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [
    {
      title: "AI-Powered Financial Forecasting",
      description: "A deep learning model that predicts stock market trends with 85% accuracy using LSTM networks and sentiment analysis of financial news.",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "TensorFlow", "NLP", "Financial Analysis"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <LineChart size={24} className="text-secondary" />,
    },
    {
      title: "Smart Home Automation System",
      description: "IoT-based home automation platform with voice control, machine learning for usage patterns, and energy optimization algorithms.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["IoT", "React", "Node.js", "Machine Learning"],
      github: "https://github.com",
      icon: <Cog size={24} className="text-secondary" />,
    },
    {
      title: "Natural Language Processing API",
      description: "A comprehensive NLP API that performs sentiment analysis, entity recognition, and text summarization for multiple languages.",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["Python", "Flask", "NLP", "API"],
      github: "https://github.com",
      demo: "https://demo.com",
      icon: <Sparkles size={24} className="text-secondary" />,
    },
    {
      title: "DevOps Automation Framework",
      description: "A CI/CD pipeline automation tool that integrates with multiple cloud platforms and provides deployment analytics.",
      image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      tags: ["AWS", "Docker", "Jenkins", "Python"],
      github: "https://github.com",
      icon: <TerminalSquare size={24} className="text-secondary" />,
    },
  ];
  
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="projects" className="section-padding bg-gradient-radial from-primary-50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">My Projects</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Explore my recent work and technical projects
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background-light rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-70"></div>
                <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-lg">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-text-muted mb-4 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors duration-300"
                    aria-label={`GitHub repository for ${project.title}`}
                  >
                    <Github size={20} />
                  </a>
                  
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-background hover:bg-primary/10 transition-colors duration-300"
                      aria-label={`Live demo for ${project.title}`}
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 text-center"
        >
          <motion.a
            variants={itemVariants}
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <Github size={18} />
            See More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;