import { motion } from "motion/react";

const stats = [
  { label: "CLIENTS", value: "+10" },
  { label: "PROJECTS", value: "+3" },
  { label: "YEARS", value: "+1" },
];

export default function AboutMe() {
  return (
    <section className="section-container" id="about">
      <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-black leading-tight">
                More <span className="text-accent underline decoration-accent/30 decoration-4 underline-offset-8">About Me</span>
              </h2>
              <p className="text-slate-400 mt-2 font-black tracking-widest text-[15px] uppercase"> Dev based in New York</p>
            </motion.div>
            
            <div className="space-y-6 text-slate-400 leading-relaxed font-semibold">
              <p className="border-l-4 border-accent pl-6 bg-accent/5 py-4 rounded-r-2xl">"Passionate about web development and continuously improving my technical skills, I enjoy building responsive and user-friendly applications that solve real-world problems. I am always eager to learn new technologies, enhance my creativity, and develop efficient digital solutions with clean and modern design practices."</p>
              <p>
                "Passionate Full Stack Developer focused on building responsive and user-friendly web applications. Skilled in modern web technologies and continuously learning to create efficient and interactive digital experiences."
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-slate-800/50 p-4 text-center rounded-[1.5rem] border border-slate-700/50 flex flex-col justify-center gap-1 group hover:border-accent transition-all hover:bg-accent/[0.03] shadow-inner"
                >
                  <div className="text-xl md:text-2xl font-black text-accent group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Teal circular background with gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full aspect-square bg-gradient-to-br from-accent to-indigo-600 rounded-full scale-90 -z-10 shadow-[0_0_100px_rgba(45,212,191,0.2)] p-1 opacity-90">
              <div className="bg-deep-bg rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                {/* Abstract overlay */}
                <div className="absolute inset-0 bg-accent/10 backdrop-blur-3xl"></div>
              </div>
            </div>
            
            <div className="w-full aspect-square flex items-center justify-center p-8 animate-float">
              <img 
                src="https://res.cloudinary.com/dcbulysss/image/upload/v1778673656/Gemini_Generated_Image_hg6rd2hg6rd2hg6r_eu7eel.png" 
                alt="About Character" 
                className="w-full h-full object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)] hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
