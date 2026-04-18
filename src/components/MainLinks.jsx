import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Send, Mail, ExternalLink } from 'lucide-react';

const TiltCard = ({ link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center p-5 rounded-2xl group border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden hover:shadow-[0_0_30px_rgba(${link.rgbColor},0.2)] hover:border-[${link.borderColor}]/50 transition-all duration-300`}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className={`absolute inset-0 bg-gradient-to-tr from-transparent via-[${link.borderColor}]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      <div className={`flex-shrink-0 w-14 h-14 bg-black/50 border border-white/10 rounded-xl flex items-center justify-center mr-5 group-hover:bg-[${link.borderColor}]/20 group-hover:border-[${link.borderColor}]/40 transition-colors duration-300`}>
        {link.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-bold tracking-wide flex items-center drop-shadow-md">
          {link.title}
        </h3>
        <p className="text-gray-400 text-sm mt-1 group-hover:text-gray-300 transition-colors">{link.subtext}</p>
      </div>
      <ExternalLink className="w-5 h-5 text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </motion.a>
  );
};

export default function MainLinks() {
  const links = [
    {
      id: 1,
      title: "Telegram",
      subtext: "To'g'ridan-to'g'ri bog'lanish",
      icon: <Send className="w-6 h-6 text-[#2AABEE] drop-shadow-[0_0_8px_rgba(42,171,238,0.8)]" />,
      url: "https://t.me/IsroilovOybek",
      rgbColor: "42,171,238",
      borderColor: "#2AABEE"
    },
    {
      id: 2,
      title: "GitHub",
      subtext: "Ochiq kodli loyihalar",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      url: "https://github.com/oybek-sysadmin",
      rgbColor: "255,255,255",
      borderColor: "#ffffff"
    },
    {
      id: 3,
      title: "Email",
      subtext: "isroilov.bekjon@gmail.com",
      icon: <Mail className="w-6 h-6 text-[#EA4335] drop-shadow-[0_0_8px_rgba(234,67,53,0.8)]" />,
      url: "mailto:isroilov.bekjon@gmail.com",
      rgbColor: "234,67,53",
      borderColor: "#EA4335"
    },
    {
      id: 4,
      title: "Instagram",
      subtext: "Hayotiy lahzalar",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#E1306C] drop-shadow-[0_0_8px_rgba(225,48,108,0.8)]">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      ),
      url: "https://www.instagram.com/mr_oybekjan",
      rgbColor: "225,48,108",
      borderColor: "#E1306C"
    },
    {
      id: 5,
      title: "Facebook",
      subtext: "Ijtimoiy faollik",
      icon: (
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#1877F2] drop-shadow-[0_0_8px_rgba(24,119,242,0.8)]">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: "https://www.facebook.com/oybek.isroilov.161",
      rgbColor: "24,119,242",
      borderColor: "#1877F2"
    },
    {
      id: 6,
      title: "Twitter / X",
      subtext: "Qisqa fikrlar",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-[#1DA1F2] drop-shadow-[0_0_8px_rgba(29,161,242,0.8)]">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      url: "https://x.com/o_isroilov",
      rgbColor: "29,161,242",
      borderColor: "#1DA1F2"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
    show: { opacity: 1, scale: 1, filter: "blur(0px)" }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-4 w-full max-w-xl mx-auto px-4 z-10 relative mt-6"
    >
      {links.map((link) => (
        <motion.div key={link.id} variants={item}>
          <TiltCard link={link} />
        </motion.div>
      ))}
    </motion.div>
  );
}
