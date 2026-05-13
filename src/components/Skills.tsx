import { motion } from "motion/react";

const skills = [
  { name: "HTML & CSS", percentage: 85 },
  { name: "React js", percentage: 70 },
  { name: "Javascript", percentage: 98 },
  { name: "Python", percentage: 91 },
];

const experience = [
  {
    role: "Software Engineer",
    company: "Wellbeinglens",
    period: "Mar 2024 - Till Now",
    color: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    role: "Frontend Developer",
    company: "Freelancing",
    period: "Mar 2025 - Till Now",
    color: "bg-purple-500/10 text-purple-400 border-purple-500/20"
  }
];

export default function Skills() {
  return (
    <section className="section-container" id="skills">
      <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
          {/* Technical Skills */}
          <div className="space-y-10">
            <div className="space-y-2">
              <h3 className="text-accent text-xs font-black tracking-[0.3em] uppercase">Expertise</h3>
              <h2 className="text-4xl font-display font-black">Technical Skills</h2>
            </div>

            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i} className="space-y-3">
                  <div className="flex justify-between items-center px-1">
                    <span className="font-black text-xs tracking-widest uppercase text-slate-300">{skill.name}</span>
                    <span className="text-accent font-black text-xs font-mono">{skill.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-accent relative shadow-[0_0_12px_rgba(45,212,191,0.6)]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20"></div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-10">
            <div className="space-y-2">
              <h3 className="text-accent text-xs font-black tracking-[0.3em] uppercase">Recent Experience</h3>
              <h2 className="text-4xl font-display font-black">Work Experience</h2>
            </div>

            <div className="space-y-5">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="bg-[#1e1b4b]/60 p-6 rounded-2xl border border-indigo-500/10 relative overflow-hidden group hover:border-accent/30 transition-all shadow-inner"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="space-y-1">
                      <h3 className="text-lg font-black group-hover:text-accent transition-colors">{exp.role}</h3>
                      <p className="text-xs text-slate-400 font-bold uppercase tracking-tight">{exp.company}</p>
                    </div>
                    <div className="text-[10px] text-indigo-300 font-black tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                      {exp.period}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-4 border-t border-slate-800 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 group-hover:text-accent transition-colors">See full resume</span>
                <div className="w-8 h-[1px] bg-slate-800 group-hover:bg-accent group-hover:w-16 transition-all"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
