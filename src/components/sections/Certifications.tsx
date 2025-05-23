import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  date: string;
  link: string;
  logo?: string;
}

const Certifications: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const certifications: Certification[] = [
    {
      title: "Certified Salesforce AI Associate",
      issuer: "Salesforce",
      date: "May 2025",
      link: "https://salesforce.com",
    },
    {
      title: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services",
      date: "February 2025",
      link: "https://aws.amazon.com",
    },
    {
      title: "Oracle Certified Java SE 8 Programmer",
      issuer: "Oracle",
      date: "December 2024",
      link: "https://oracle.com",
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
    <section id="certifications" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">Certifications</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Professional certifications and credentials
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              className="bg-background-light rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 group relative"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Award size={24} className="text-secondary" />
                </div>
                
                <ExternalLink size={18} className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-secondary transition-colors duration-300">{cert.title}</h3>
              <p className="text-text-muted text-sm mb-1">{cert.issuer}</p>
              <p className="text-text-muted text-xs">{cert.date}</p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;