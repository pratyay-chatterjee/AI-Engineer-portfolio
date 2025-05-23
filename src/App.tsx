import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import { ChevronUp } from 'lucide-react';
import FloatingButtons from './components/FloatingButtons';

function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Check if we should show the scroll to top button
      if (scrollPosition > 500) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
      
      // Determine active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach((section) => {
        const sectionId = section.getAttribute('id') || '';
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen bg-background text-white overflow-hidden">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      
      <Footer />
      
      <FloatingButtons />
      
      {/* Scroll to top button */}
      <motion.button 
        className={`fixed bottom-6 right-6 bg-primary p-3 rounded-full shadow-lg shadow-primary/20 z-50 transition-all duration-300 ${showScrollButton ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={scrollToTop}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: showScrollButton ? 1 : 0.8, 
          opacity: showScrollButton ? 1 : 0 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronUp size={24} />
      </motion.button>
    </div>
  );
}

export default App;