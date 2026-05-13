import { motion } from "motion/react";
import { GraduationCap, Award } from "lucide-react";

const educationData = [
  {
  title: "Bachelor of Technology (EEE)",
  institution: "DR. Paul Raj Engineering College",
  date: "2017 - 2021",
  description:
    "Completed Bachelor of Technology in Electrical and Electronics Engineering with a strong foundation in technical problem-solving, analytical thinking, and engineering principles while actively developing programming and web development skills.",
  highlight: "Graduated with 6.73 CGPA"
},
  {
  title: "Full Stack Development Program",
  institution: "NxtWave CCBP Intensive 4.0 Tech Program",
  date: "2023 - Present",
  description:
    "Pursuing an industry-ready certification program focused on Full Stack Development. Gaining hands-on experience in building responsive web applications using HTML, CSS, Bootstrap, JavaScript, Python, and SQLite through real-world projects and practical assignments.",
  highlight: "Industry Ready Certification in Full Stack Development"
}
];

export default function Education() {
  return (
    <section className="section-container" id="education">
      <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
          <div>
            <span className="text-accent text-xs font-black tracking-[0.3em] uppercase bg-accent/10 px-3 py-1 rounded">Learning Path</span>
            <h2 className="text-4xl md:text-5xl font-display font-black mt-4">Academic Journey</h2>
          </div>
          <div className="bg-[#1e1b4b] p-4 rounded-2xl border border-indigo-500/30 text-accent shadow-xl shadow-indigo-500/10 hover:scale-110 transition-transform">
            <GraduationCap size={32} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div 
            className="rounded-[2.5rem] p-4 aspect-square flex items-center justify-center relative overflow-hidden group"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 bg-accent/5 rounded-full blur-[80px] group-hover:bg-accent/10 transition-all"></div>
            <img 
              src="https://res.cloudinary.com/dcbulysss/image/upload/v1778673656/Gemini_Generated_Image_hg6rd2hg6rd2hg6r_eu7eel.png" 
              alt="Graduation Character" 
              className="w-full h-full object-contain relative z-10 animate-float"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <div className="space-y-6">
            {educationData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#1e1b4b] p-6 rounded-[2rem] border border-indigo-500/20 hover:border-accent/40 transition-all shadow-xl hover:shadow-accent/5 relative group"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black group-hover:text-accent transition-colors">{item.title}</h3>
                  <span className="text-[10px] text-accent font-black tracking-widest bg-accent/10 px-3 py-1 rounded-full whitespace-nowrap shadow-inner ring-1 ring-accent/20 font-mono">
                    {item.date}
                  </span>
                </div>
                
                <p className="text-accent/80 text-sm font-black mb-3">{item.institution}</p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{item.description}</p>
                
                <div className="flex items-center gap-2 text-yellow-500 text-[10px] font-black uppercase tracking-[0.2em] bg-yellow-500/5 py-2 px-4 rounded-xl border border-yellow-500/10">
                  <Award size={14} />
                  {item.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
