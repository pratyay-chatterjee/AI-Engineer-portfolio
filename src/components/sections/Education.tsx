import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Building, BookOpen } from 'lucide-react';

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  score: string;
  icon: React.ReactNode;
}

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const educationItems: EducationItem[] = [
    {
      institution: "UEM Kolkata",
      degree: "B.Tech in CSE (AI & ML)",
      period: "2022–Present",
      location: "Kolkata, India",
      score: "GPA: 8.9",
      icon: <GraduationCap size={24} className="text-secondary" />,
    },
    {
      institution: "Saidabad Manindra Chandra Vidyapith",
      degree: "Higher Secondary",
      period: "2020–2021",
      location: "West Bengal, India",
      score: "83.6%",
      icon: <Building size={24} className="text-secondary" />,
    },
    {
      institution: "Saktipur Kumar Mahim Chandra Institution",
      degree: "Secondary",
      period: "2018–2019",
      location: "West Bengal, India",
      score: "84.14%",
      icon: <BookOpen size={24} className="text-secondary" />,
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
    <section id="education" className="section-padding bg-gradient-radial from-primary-50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">Education</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            My academic background and qualifications
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {educationItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-background-light rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  {item.icon}
                </div>
                <div className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium text-secondary">
                  {item.period}
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.institution}</h3>
              <p className="text-secondary font-medium mb-1">{item.degree}</p>
              <p className="text-text-muted text-sm mb-4">{item.location}</p>
              
              <div className="mt-auto">
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-sm font-medium">
                    {item.score}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-12 max-w-3xl mx-auto text-center"
        >
          <motion.p variants={itemVariants} className="text-text-muted">
            Consistently maintained high academic performance while balancing technical projects and leadership roles in various university organizations.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;