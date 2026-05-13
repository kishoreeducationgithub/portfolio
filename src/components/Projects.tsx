import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with React and Nodejs.",
    image: "https://img.freepik.com/free-vector/gradient-ui-ux-elements-collection_23-2149118933.jpg",
    tags: ["React", "Nodejs", "MongoDB"]
  },
  {
    title: "Build AI SaaS Invoice",
    description: "Track workouts and nutrition within a beautiful UI.",
    image: "https://img.freepik.com/free-vector/isometric-saas-concept-illustration_52683-77402.jpg",
    tags: ["Fitness", "AI", "Saas"]
  },
  {
    title: "Modern React Admin Dashboard",
    description: "Create images from text with advanced AI models.",
    image: "https://img.freepik.com/free-vector/dashboard-ui-ux-infographic-elements_23-2148403358.jpg",
    tags: ["React", "Tailwind CSS", "Dashboard"]
  },
  {
    title: "AI Image Generator",
    description: "Generate images from text prompts using AI.",
    image: "https://img.freepik.com/free-vector/gradient-ai-robot-concept-illustration_23-2149303356.jpg",
    tags: ["Python", "React", "Tensorflow"]
  }
];

export default function Projects() {
  return (
    <section className="section-container" id="projects">
      <div className="bg-slate-900/50 rounded-[3rem] p-8 md:p-12 border border-slate-800 shadow-2xl">
        <div className="space-y-2 mb-12">
          <span className="text-accent uppercase tracking-[0.3em] text-[10px] font-black bg-accent/10 px-3 py-1 rounded">My Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-display font-black mt-4">Featured Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-[#1e1b4b]/30 rounded-[2.5rem] overflow-hidden border border-indigo-500/10 hover:border-accent/40 transition-all flex flex-col shadow-2xl hover:bg-accent/[0.01]"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[0.5] group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-bg to-transparent opacity-80"></div>
                
                <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-black uppercase tracking-widest bg-accent shadow-[0_0_15px_rgba(45,212,191,0.3)] text-deep-bg px-3 py-1 rounded-full border border-accent/30 font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-10 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-4 group-hover:text-accent transition-colors leading-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-10 leading-relaxed font-semibold">
                  {project.description}
                </p>
                
                <div className="mt-auto flex gap-4 pt-8 border-t border-white/5">
                  <a href="#" className="flex-1 bg-accent/10 hover:bg-accent text-accent hover:text-deep-bg px-6 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest transition-all border border-accent/20">
                    <Github size={16} />
                    View Case Study
                  </a>
                  <a href="#" className="p-3.5 bg-white/[0.05] hover:bg-accent hover:text-deep-bg rounded-2xl transition-all border border-white/5">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
