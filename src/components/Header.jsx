import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, type: "spring", bounce: 0.5 }}
      className="flex flex-col items-center justify-center pt-16 pb-8 relative z-10"
    >
      <div className="relative mb-6">
        {/* Orbit Rings */}
        <div className="absolute inset-[-15px] border border-cyan-500/30 rounded-full animate-[spin_10s_linear_infinite]" />
        <div className="absolute inset-[-30px] border border-purple-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
        
        {/* Floating Avatar Container */}
        <motion.div 
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-purple-600 shadow-[0_0_40px_rgba(56,189,248,0.5)]"
        >
          <img 
            src="/avatar.jpg" 
            alt="Profile Avatar" 
            className="w-full h-full rounded-full object-cover bg-black object-top"
          />
        </motion.div>

        {/* Status Indicator */}
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-black z-10">
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
        </div>
      </div>
      
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-3 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        Oybek Isroilov
      </h1>
      <h2 className="text-lg md:text-xl font-bold text-cyan-300 mb-6 tracking-widest uppercase text-center flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
        System Admin & AI Engineer
        <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
      </h2>
      <div className="relative mt-2 max-w-xl w-full p-5 md:p-6 mb-2 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)] overflow-hidden group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        <p className="text-cyan-50/90 text-center text-sm md:text-base leading-relaxed tracking-wide relative z-10 font-[Inter,sans-serif]">
          Men IT infratuzilmalarni boshqarish, avtomatlashtirish va xavfsizligini ta'minlashga ixtisoslashgan mutaxassisman. Serverlar, tarmoqlar va sun'iy intellekt asosidagi tizimlar bilan ishlash orqali samaradorlikni oshirishga qiziqaman. Hozirda AI va avtomatlashtirish texnologiyalarini real loyihalarga joriy qilish ustida faol ishlayapman.
        </p>
      </div>
    </motion.div>
  );
}
