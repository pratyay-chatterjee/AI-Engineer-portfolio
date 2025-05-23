import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Layers, Database, PenTool as Tool } from 'lucide-react';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
  
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code size={24} className="text-secondary" />,
      skills: ["C", "C++", "Java", "Python", "JavaScript"],
    },
    {
      title: "Web Development",
      icon: <Layers size={24} className="text-secondary" />,
      skills: ["HTML", "CSS", "React.js", "Node.js", "Next.js", "Express.js", "Flask"],
    },
    {
      title: "Data & AI",
      icon: <Database size={24} className="text-secondary" />,
      skills: ["Machine Learning", "Deep Learning", "NLP", "Tableau", "Power BI", "MongoDB", "SQL Server", "Firebase", "AWS"],
    },
    {
      title: "Tools & Others",
      icon: <Tool size={24} className="text-secondary" />,
      skills: ["Git", "API Integration", "Exploratory Data Analysis", "Embedded Programming", "Software Development"],
    },
  ];
  
  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">My Skills</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Technologies and tools I work with
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="bg-background-light rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                className="flex flex-wrap gap-2"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    variants={itemVariants}
                    className="skill-pill"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mt-16 flex justify-center"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-2xl text-center"
          >
            <p className="text-lg text-text-muted">
              <span className="text-white">Always expanding my skillset.</span> I'm constantly learning new technologies and frameworks to stay at the cutting edge of AI and software development.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;