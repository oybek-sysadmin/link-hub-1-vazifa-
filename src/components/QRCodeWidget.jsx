import React from 'react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';

export default function QRCodeWidget() {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, type: 'spring' }}
      className="absolute top-6 right-6 z-20 hidden sm:block"
    >
      <button className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-white hover:text-neon-accent transition-colors hover:shadow-lg hover:shadow-neon-accent/20 group">
        <QrCode className="w-5 h-5" />
        <span className="absolute -bottom-8 bg-white text-deep-charcoal text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
          Scan Me
        </span>
      </button>
    </motion.div>
  );
}
