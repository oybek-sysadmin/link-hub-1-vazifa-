import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TerminalSquare } from 'lucide-react';

export default function FeaturedProject() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="w-full max-w-lg mx-auto px-4 my-10 z-10 relative group"
    >
      <div className="flex items-center gap-2 mb-4 px-1">
        <TerminalSquare className="w-5 h-5 text-cyan-400" />
        <h2 className="text-cyan-400 text-sm font-bold tracking-[0.2em] uppercase origin-left">Core Expertise</h2>
      </div>
      
      <div className="relative rounded-2xl overflow-hidden border border-cyan-900/50 hover:border-cyan-400 bg-black/60 backdrop-blur-md transition-all duration-500 shadow-[0_0_20px_rgba(8,145,178,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)]">
        {/* Holographic overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[border-beam_5s_linear_infinite] pointer-events-none z-20"></div>
        
        <div className="relative h-56 w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10"></div>
          {/* Neon Grid Overlay Image equivalent */}
          <div className="w-full h-full bg-[#0a0a0a] relative group-hover:scale-110 transition-transform duration-700">
             <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
             <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-cyan-900/40"></div>
             {/* Fake Code structure for aesthetic */}
             <div className="absolute top-4 left-4 text-[10px] text-cyan-500/50 font-mono">
               <p>$ init n8n_workflow_engine</p>
               <p>{">"} integrating OpenAI API... [OK]</p>
               <p>{">"} connecting database [PostgreSQL]... [OK]</p>
               <p className="animate-pulse">{">"} automating process_</p>
             </div>
          </div>
          <div className="absolute bottom-4 left-5 z-20">
            <h3 className="text-white font-extrabold text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">AI & Workflow Automation</h3>
            <p className="text-cyan-400 text-xs mt-1 uppercase tracking-wider font-bold">n8n / AI Tools / Python</p>
          </div>
        </div>
        
        <div className="p-5 border-t border-cyan-900/50">
          <div className="flex justify-between items-center mb-3">
            <span className="text-xs text-gray-400 font-mono">Automation Efficiency</span>
            <span className="text-xs font-bold text-cyan-400 font-mono shadow-cyan-400 drop-shadow-md">99.9%</span>
          </div>
          <div className="w-full bg-[#111] rounded-full h-2 mb-5 overflow-hidden border border-cyan-900/30">
            <div className="bg-gradient-to-r from-purple-500 to-cyan-400 h-full rounded-full relative" style={{ width: '99.9%' }}>
              <div className="absolute top-0 right-0 bottom-0 w-4 bg-white/50 blur-[2px] animate-pulse"></div>
            </div>
          </div>
          
          <motion.a 
            whileHover={{ scale: 1.02, backgroundColor: "rgba(34, 211, 238, 0.15)" }}
            whileTap={{ scale: 0.98 }}
            href="https://github.com/oybek-sysadmin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 rounded-xl bg-cyan-900/20 border border-cyan-500/30 text-white font-bold tracking-wide transition-colors relative overflow-hidden group/btn"
          >
            <span className="relative z-10 flex items-center">
              VIEW GITHUB REPO <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}
