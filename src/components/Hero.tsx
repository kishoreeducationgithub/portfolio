import { motion } from "motion/react";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-container min-h-[90vh] flex flex-col pt-40" id="hero">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-[#1e1b4b]/40 rounded-[3rem] p-8 md:p-16 border border-indigo-500/20 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 group shadow-2xl"
      >
        <div className="flex-1 space-y-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-accent font-black tracking-[0.3em] text-xs mb-4 uppercase">Welcome to my world</h4>
            <h1 className="text-5xl md:text-7xl font-display font-black leading-none mb-6">
              Creative Full Stack<br/>
              <span className="text-accent">Developer<span className="text-white animate-pulse">.</span></span>
            </h1>
          </motion.div>
          
          <motion.p 
            className="text-slate-400 max-w-md leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Crafting high-performance web applications with precision and modern aesthetics. Specialized in React ecosystems and user-centric design.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className="bg-accent text-deep-bg px-8 py-3.5 rounded-2xl font-black text-sm shadow-[0_0_30px_rgba(45,212,191,0.2)] hover:scale-105 hover:shadow-accent/40 transition-all flex items-center gap-2 group/btn">
              Hire Me
              <div className="w-2 h-2 bg-deep-bg rounded-full animate-ping"></div>
            </button>
            <button className="border border-accent/40 text-accent px-8 py-3.5 rounded-2xl font-black text-sm hover:bg-accent/10 transition-all flex items-center gap-2">
              <Download size={18} />
              Resume
            </button>
          </motion.div>
        </div>

        <motion.div 
          className="flex-1 relative w-full h-full min-h-[400px]"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Abstract 3D Mockup Styling */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-accent rounded-full filter blur-[100px] opacity-20 transition-all group-hover:opacity-40 animate-pulse"></div>
          
          <div className="relative w-full h-full flex items-center justify-center">
             {/* Character */}
             <img 
               src="https://res.cloudinary.com/dcbulysss/image/upload/v1778673656/Gemini_Generated_Image_hg6rd2hg6rd2hg6r_eu7eel.png" 
               alt="Hero Character" 
               className="w-full h-full max-h-[450px] object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)] animate-float relative z-20 group-hover:rotate-1 transition-transform"
               referrerPolicy="no-referrer"
             />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
