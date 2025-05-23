import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

const FloatingButtons: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  
  useEffect(() => {
    // Handle initial theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.add('light-theme');
    }
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    
    if (isDarkMode) {
      // Switch to light theme
      document.documentElement.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
    } else {
      // Switch to dark theme
      document.documentElement.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
    }
  };
  
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <motion.button
        className="bg-background-light p-3 rounded-full shadow-lg shadow-primary/20 border border-primary/20"
        onClick={toggleTheme}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
};

export default FloatingButtons;