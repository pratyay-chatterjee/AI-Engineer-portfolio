import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CalendarDays, Users, Code, Sparkles } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  icon: React.ReactNode;
}

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const experiences: ExperienceItem[] = [
    {
      title: "President",
      company: "Space Observatory, UEMK",
      period: "Mar 2025–Present",
      description: [
        "Managed workflow and resources for observatory projects.",
        "Led tech development and hosted outreach events."
      ],
      icon: <Sparkles size={20} className="text-secondary" />,
    },
    {
      title: "Tech Lead",
      company: "GeeksforGeeks UEMK Chapter",
      period: "Oct 2023–Present",
      description: [
        "Led development projects, mentored peers, conducted workshops.",
        "Organized hackathons and tech sessions for 200+ students."
      ],
      icon: <Code size={20} className="text-secondary" />,
    },
    {
      title: "Co-Lead Organizer",
      company: "InnoFusion 2.0",
      period: "Mar 2025–Present",
      description: [
        "Directed a 30-hour national hackathon.",
        "Managed logistics, sponsors, real-time support, and 300+ participants."
      ],
      icon: <Users size={20} className="text-secondary" />,
    },
    {
      title: "Operations Lead",
      company: "ACM UEMK Chapter",
      period: "Dec 2024–Present",
      description: [
        "Managed chapter events, logistics, growth strategies, and operations."
      ],
      icon: <CalendarDays size={20} className="text-secondary" />,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">Experience</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My professional journey and leadership roles
          </motion.p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative pl-8 border-l-2 border-primary/30 ml-4"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="mb-12 relative"
              >
                <div className="timeline-dot"></div>
                
                <div className="bg-background-light p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 ml-6">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1.5 bg-primary/10 rounded">
                      {experience.icon}
                    </div>
                    <h3 className="text-xl font-bold">{experience.title}</h3>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
                    <span className="text-secondary font-medium">{experience.company}</span>
                    <span className="hidden sm:block text-text-muted">•</span>
                    <span className="text-text-muted text-sm">{experience.period}</span>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.description.map((item, i) => (
                      <li key={i} className="text-text-muted">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
            
            {experiences.length > 0 && (
              <motion.div
                variants={itemVariants}
                className="absolute bottom-0 left-1.5 w-3.5 h-3.5 rounded-full bg-secondary glow-border"
              ></motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;