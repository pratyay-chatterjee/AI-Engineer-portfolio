import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative w-8 h-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 glow-border"></div>
        <BrainCircuit size={20} className="text-white" />
      </div>
      <span className="font-bold text-xl tracking-tight gradient-text">PC</span>
    </div>
  );
};

export default Logo;