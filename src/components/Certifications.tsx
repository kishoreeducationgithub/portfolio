import { motion } from "motion/react";
import { ExternalLink, Award, Calendar } from "lucide-react";

const certs = [
  {
  provider: "NxtWave Disruptive Technologies",
  date: "2023",
  title: "CCBP Intensive Bootcamp Trainee",
  description:
    "Completed intensive training in Full Stack Development with strong foundations in Python programming, responsive web design, and dynamic website development using JavaScript.",
  link: "#"
},
  {
    provider: "Amazon Web Services",
    date: "Oct 2025",
    title: "AWS Cloud Practitioner",
    description: "Deleniti, consectetur? Est itaque, libero vero voluptas ipsa laudantium.",
    link: "#"
  },
  {
    provider: "Udemy",
    date: "Dec 2026",
    title: "Professional React Developer",
    description: "Deleniti, consectetur? Est itaque, libero vero voluptas ipsa laudantium.",
    link: "#"
  }
];

export default function Certifications() {
  return (
    <section className="section-container" id="certificates">
      <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="space-y-2 mb-12">
          <span className="text-accent uppercase tracking-[0.3em] text-xs font-black bg-accent/10 px-3 py-1 rounded">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-display font-black mt-4">Certifications</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#1e1b4b] p-8 rounded-[2.5rem] border border-indigo-500/20 hover:border-accent/40 transition-all flex flex-col hover:bg-accent/[0.02] shadow-xl"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-[9px] font-black text-slate-500 uppercase tracking-widest">
                    <Award size={12} className="text-accent" />
                    {cert.provider}
                  </div>
                  <div className="flex items-center gap-1.5 text-[9px] font-black font-mono text-teal-400 bg-teal-400/10 px-2 py-0.5 rounded w-max">
                    <Calendar size={10} />
                    {cert.date}
                  </div>
                </div>
                <div className="p-3 bg-accent/10 rounded-2xl text-accent border border-accent/20 group-hover:scale-110 transition-transform">
                  <Award size={20} />
                </div>
              </div>

              <h3 className="text-xl font-black mb-3 group-hover:text-accent transition-colors leading-tight">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mb-8 leading-relaxed font-semibold">
                {cert.description}
              </p>

              <div className="mt-auto">
                <a 
                  href={cert.link}
                  className="flex items-center gap-2 text-accent text-[10px] font-black uppercase tracking-widest hover:gap-3 transition-all group/link"
                >
                  View Certificate
                  <ExternalLink size={14} className="group-hover/link:rotate-12 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
