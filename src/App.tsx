/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-accent selection:text-[#0f172a]">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main className="overflow-hidden">
        <Hero />
        <Education />
        <AboutMe />
        <Skills />
        <Certifications />
        <Projects />
        <Contact />
      </main>

      <footer className="py-16 border-t border-slate-800 text-center bg-[#020617]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-2xl font-display font-black tracking-tighter">
            KISHORE <span className="text-accent">PORTFOLIO</span>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-slate-500 text-[10px] font-black tracking-[0.3em] uppercase">
              © 2026 Kishore. All rights reserved.
            </p>
            <div className="text-[10px] text-slate-600 font-mono">
              DESIGN SPECIFICATION v4.2 | TAILWIND CSS | REACT JS
            </div>
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-slate-400 hover:text-accent transition-all text-[10px] font-black uppercase tracking-widest hover:-translate-y-1">Twitter</a>
            <a href="#" className="text-slate-400 hover:text-accent transition-all text-[10px] font-black uppercase tracking-widest hover:-translate-y-1">Github</a>
            <a href="#" className="text-slate-400 hover:text-accent transition-all text-[10px] font-black uppercase tracking-widest hover:-translate-y-1">Linkedin</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
