import React from 'react';
import Header from './components/Header';
import ActionBadges from './components/ActionBadges';
import MainLinks from './components/MainLinks';
import FeaturedProject from './components/FeaturedProject';
import QRCodeWidget from './components/QRCodeWidget';
import ResumeDownload from './components/ResumeDownload';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white relative font-['Space_Grotesk',_sans-serif] selection:bg-purple-500 selection:text-white">
      {/* WOW Dynamic Meshing Background */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none bg-[#020202]">
        
        {/* Animated grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>
        
        {/* Liquid Plasma Blobs */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-600/30 rounded-full mix-blend-screen filter blur-[120px] animate-[blob_12s_infinite]"></div>
        <div className="absolute top-[20%] right-[-20%] w-[60vw] h-[60vw] bg-purple-700/30 rounded-full mix-blend-screen filter blur-[150px] animate-[blob_18s_infinite_reverse]"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-600/20 rounded-full mix-blend-screen filter blur-[100px] animate-[blob_15s_infinite]"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 flex flex-col items-center">
        <QRCodeWidget />
        <Header />
        <ActionBadges />
        <MainLinks />
        <FeaturedProject />
        <ResumeDownload />
      </div>
    </div>
  );
}

export default App;
