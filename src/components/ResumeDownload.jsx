import React from 'react';
import { Download } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResumeDownload() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="flex justify-center mt-6 z-10 relative pb-12"
    >
      <div className="relative group rounded-full">
        {/* Neon Border Effect */}
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-neon-accent via-neon-accent-secondary to-neon-accent bg-[length:400%_400%] animate-[border-beam_3s_linear_infinite] opacity-75 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        
        <button className="relative flex items-center justify-center gap-2 bg-deep-charcoal text-white font-medium px-8 py-3 rounded-full hover:bg-gray-900 transition-colors">
          <Download className="w-4 h-4" />
          <span>Download CV</span>
        </button>
      </div>
    </motion.div>
  );
}
