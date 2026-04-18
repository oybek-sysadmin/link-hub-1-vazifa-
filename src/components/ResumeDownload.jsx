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
        <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 bg-[length:400%_400%] animate-[border-beam_3s_linear_infinite] opacity-75 group-hover:opacity-100 transition duration-500 blur-sm"></div>
        
        <a 
          href="/resume.pdf" 
          download="Oybek_Isroilov_Resume.pdf"
          className="relative flex items-center justify-center gap-2 bg-[#050505] text-cyan-50 font-bold px-8 py-3 rounded-full hover:bg-[#111] transition-colors border border-white/10 group-hover:border-cyan-500/50"
        >
          <Download className="w-5 h-5 text-cyan-400" />
          <span className="tracking-widest uppercase text-sm">Download Resume</span>
        </a>
      </div>
    </motion.div>
  );
}
