import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background-light py-12 border-t border-primary/10">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo />
            <p className="text-text-muted text-sm max-w-xs text-center md:text-left">
              Building intelligent solutions at the intersection of AI and software engineering.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-secondary transition-colors duration-300"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-muted hover:text-secondary transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:pratyay.chatterjee2022@uem.edu.in" 
                className="text-text-muted hover:text-secondary transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </div>
            <p className="text-text-muted text-xs">
              &copy; {currentYear} Pratyay Chatterjee. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;