import React from 'react';
import { motion } from 'framer-motion';

export default function TechSkills() {
  const skills = [
    { name: "Linux & Ubuntu", color: "text-orange-400 border-orange-500/30 bg-orange-500/10 shadow-[0_0_10px_rgba(249,115,22,0.2)]" },
    { name: "Windows Server", color: "text-blue-400 border-blue-500/30 bg-blue-500/10 shadow-[0_0_10px_rgba(59,130,246,0.2)]" },
    { name: "Networking (VPN/Firewall)", color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_10px_rgba(34,211,238,0.2)]" },
    { name: "OPNsense", color: "text-red-400 border-red-500/30 bg-red-500/10 shadow-[0_0_10px_rgba(248,113,113,0.2)]" },
    { name: "Python", color: "text-yellow-300 border-yellow-400/30 bg-yellow-400/10 shadow-[0_0_10px_rgba(253,224,71,0.2)]" },
    { name: "n8n Automation", color: "text-pink-400 border-pink-500/30 bg-pink-500/10 shadow-[0_0_10px_rgba(236,72,153,0.2)]" },
    { name: "PostgreSQL & MySQL", color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10 shadow-[0_0_10px_rgba(129,140,248,0.2)]" },
    { name: "Git & GitHub", color: "text-gray-300 border-gray-400/30 bg-gray-400/10 shadow-[0_0_10px_rgba(156,163,175,0.2)]" },
    { name: "React & Web", color: "text-cyan-300 border-cyan-400/30 bg-cyan-400/10 shadow-[0_0_10px_rgba(103,232,249,0.2)]" },
    { name: "Cybersecurity", color: "text-green-400 border-green-500/30 bg-green-500/10 shadow-[0_0_10px_rgba(74,222,128,0.2)]" },
    { name: "AI Tools & LLMs", color: "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_10px_rgba(192,132,252,0.2)]" }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.8 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 10 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-wrap justify-center gap-2 max-w-2xl px-4 my-2 relative z-10"
    >
      {skills.map((skill, index) => (
        <motion.span
          key={index}
          variants={item}
          whileHover={{ scale: 1.05, y: -2 }}
          className={`px-3 py-1.5 text-xs md:text-sm font-semibold rounded-full border backdrop-blur-sm cursor-default transition-all duration-300 ${skill.color}`}
        >
          {skill.name}
        </motion.span>
      ))}
    </motion.div>
  );
}
