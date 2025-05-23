import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  
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
  
  const contactInfo = [
    {
      icon: <Mail size={20} className="text-secondary" />,
      label: "Email",
      value: "pratyay.chatterjee2022@uem.edu.in",
      link: "mailto:pratyay.chatterjee2022@uem.edu.in",
    },
    {
      icon: <Phone size={20} className="text-secondary" />,
      label: "Phone",
      value: "+91 89183 89523",
      link: "tel:+918918389523",
    },
    {
      icon: <MapPin size={20} className="text-secondary" />,
      label: "Location",
      value: "Newtown, Kolkata, West Bengal, India",
      link: "https://maps.google.com/?q=Newtown,Kolkata,WestBengal,India",
    },
  ];
  
  return (
    <section id="contact" className="section-padding bg-gradient-radial from-primary-50 to-transparent">
      <div className="container-custom">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.h2 variants={itemVariants} className="section-title">Contact Me</motion.h2>
          <motion.p variants={itemVariants} className="section-subtitle">
            Let's discuss your project or opportunity
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div
              variants={itemVariants}
              className="bg-background-light rounded-xl p-6 md:p-8 border border-primary/10"
            >
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-success/20 border border-success/30 rounded-lg p-4 mb-6"
                >
                  <p className="text-white font-medium">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300"
                      placeholder="johndoe@example.com"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-primary/20 rounded-lg focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary transition-colors duration-300 resize-none"
                      placeholder="Hello, I'd like to discuss..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`btn-primary w-full justify-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </motion.div>
          
          {/* Right Column - Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col justify-between"
          >
            <div>
              <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">Contact Information</motion.h3>
              
              <motion.div variants={itemVariants} className="flex flex-col gap-6 mb-12">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-background-light rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="p-2 bg-primary/10 rounded-lg mt-1">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm text-text-muted">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </a>
                ))}
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-xl font-bold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-light rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-background-light rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:pratyay.chatterjee2022@uem.edu.in"
                  className="p-3 bg-background-light rounded-lg border border-primary/10 hover:border-primary/30 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;