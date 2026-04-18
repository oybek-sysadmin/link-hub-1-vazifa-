import React from 'react';
import { Mail, Link as LinkIcon, Terminal, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ActionBadges() {
  const badges = [
    { id: 1, icon: <Mail className="w-6 h-6" />, href: "#", shadow: "hover:shadow-[0_0_20px_rgba(234,67,53,0.6)] hover:border-[#EA4335]/50", text: "hover:text-[#EA4335]" },
    { id: 2, icon: <LinkIcon className="w-6 h-6" />, href: "#", shadow: "hover:shadow-[0_0_20px_rgba(10,102,194,0.6)] hover:border-[#0A66C2]/50", text: "hover:text-[#0A66C2]" },
    { id: 3, icon: <Terminal className="w-6 h-6" />, href: "#", shadow: "hover:shadow-[0_0_20px_rgba(255,255,255,0.6)] hover:border-white/50", text: "hover:text-white" },
    { id: 4, icon: <MessageCircle className="w-6 h-6" />, href: "#", shadow: "hover:shadow-[0_0_20px_rgba(34,158,217,0.6)] hover:border-[#229ED9]/50", text: "hover:text-[#229ED9]" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.8 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex justify-center gap-6 my-8 relative z-10"
    >
      {badges.map((badge) => (
        <motion.a
          key={badge.id}
          variants={item}
          whileHover={{ scale: 1.2, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          href={badge.href}
          className={`flex items-center justify-center w-14 h-14 rounded-full bg-black/50 border border-white/10 text-gray-400 backdrop-blur-md transition-all duration-300 ${badge.shadow} ${badge.text}`}
        >
          {badge.icon}
        </motion.a>
      ))}
    </motion.div>
  );
}
