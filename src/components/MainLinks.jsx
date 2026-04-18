import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Globe, Layout, PenTool, Code, ExternalLink } from 'lucide-react';

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
      className="relative flex items-center p-5 rounded-2xl group border border-white/5 bg-black/40 backdrop-blur-xl overflow-hidden hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(56,189,248,0.2)] transition-colors duration-300"
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Glints on hover */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="flex-shrink-0 w-14 h-14 bg-cyan-500/10 border border-cyan-500/20 rounded-xl flex items-center justify-center mr-5 group-hover:bg-cyan-500/20 transition-colors duration-300">
        {link.icon}
      </div>
      <div className="flex-1">
        <h3 className="text-white text-lg font-bold tracking-wide flex items-center drop-shadow-md">
          {link.title}
        </h3>
        <p className="text-cyan-200/60 text-sm mt-1">{link.subtext}</p>
      </div>
      <ExternalLink className="w-5 h-5 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" />
    </motion.a>
  );
};

export default function MainLinks() {
  const links = [
    {
      id: 1,
      title: "Neural Portfolio",
      subtext: "Explore my advanced cyberspace",
      icon: <Globe className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]" />,
      url: "#"
    },
    {
      id: 2,
      title: "UI Constructs",
      subtext: "Holographic design components",
      icon: <Layout className="w-6 h-6 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]" />,
      url: "#"
    },
    {
      id: 3,
      title: "Data Logs",
      subtext: "Decrypted knowledge base",
      icon: <PenTool className="w-6 h-6 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,0.8)]" />,
      url: "#"
    },
    {
      id: 4,
      title: "Source Access",
      subtext: "Direct GitHub injection",
      icon: <Code className="w-6 h-6 text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]" />,
      url: "#"
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
      className="flex flex-col gap-5 w-full max-w-lg mx-auto px-4 z-10 relative mt-4"
    >
      {links.map((link) => (
        <motion.div key={link.id} variants={item}>
          <TiltCard link={link} />
        </motion.div>
      ))}
    </motion.div>
  );
}
