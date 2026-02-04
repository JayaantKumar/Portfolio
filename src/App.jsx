import React from "react";
import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { motion } from "framer-motion";
import { Code, Layers, Zap, ArrowDown, Mail, Github, Linkedin, Twitter } from "lucide-react";

// Components
import MagneticButton from "./components/MagneticButton"; 
import ProjectList from "./components/ProjectList"; 

export default function Portfolio() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ReactLenis root>
      <div className="min-h-screen font-sans selection:bg-olive selection:text-deep bg-deep text-cream">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 backdrop-blur-md bg-deep/80 border-b border-moss/20">
          <div className="text-xl font-bold tracking-tighter text-cream flex items-center gap-1">
            JAYANT<span className="text-olive">.</span>DEV
          </div>
          
          <div className="flex gap-4">
            <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:block px-6 py-2 rounded-full border border-moss/30 text-cream text-xs uppercase tracking-widest hover:bg-olive hover:text-deep transition-colors"
            >
                Available for Work
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
          {/* Background Ambient Glow */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-olive/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-moss/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="max-w-5xl z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[13vw] md:text-[8.5rem] font-bold leading-[0.85] text-cream tracking-tighter mb-6"
            >
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive to-cream font-serif italic pr-4">creative</span> 
              & DEV
            </motion.h1>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-moss/30 pt-8 max-w-4xl">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-moss max-w-md leading-relaxed"
              >
                I build pixel-perfect, engaging, and accessible digital experiences. Focusing on motion, UI architecture, and seamless performance.
              </motion.p>
              
              <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.8 }}
                 className="flex gap-4"
              >
                 <MagneticButton onClick={() => scrollToSection('work')} className="bg-cream text-deep hover:bg-olive font-bold px-8">
                    View Work
                 </MagneticButton>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-moss"
          >
             <ArrowDown size={24} />
          </motion.div>
        </section>

        {/* --- PROJECT LIST --- */}
        <section id="work" className="bg-darker">
            <ProjectList />
        </section>

        {/* --- SERVICES --- */}
        <section className="py-24 px-6 md:px-20 bg-deep relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
             <div>
                <h2 className="text-cream text-4xl md:text-5xl mb-6">How I can help</h2>
                <p className="text-moss text-lg leading-relaxed mb-8">
                   I don't just write code; I solve business problems through design-led engineering. Whether you need a high-converting landing page or a complex web app.
                </p>
                <MagneticButton className="border border-moss text-cream">My Process</MagneticButton>
             </div>
             <div className="space-y-6">
                {[
                   { title: "Frontend Engineering", desc: "React, Tailwind, Framer Motion", icon: <Code /> },
                   { title: "Interaction Design", desc: "Micro-interactions, WebGL", icon: <Layers /> },
                   { title: "Performance Tuning", desc: "SEO, Core Web Vitals, Speed", icon: <Zap /> }
                ].map((s, i) => (
                   <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-olive/30 transition-all duration-300"
                   >
                      <div className="text-olive bg-olive/10 p-3 rounded-lg h-fit">{s.icon}</div>
                      <div>
                         <h3 className="text-cream text-xl font-bold mb-2">{s.title}</h3>
                         <p className="text-moss">{s.desc}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-32 px-6 bg-gradient-to-b from-darker to-deep">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-olive font-mono text-sm tracking-widest uppercase mb-4 block">What's Next?</span>
                <h2 className="text-cream text-5xl md:text-7xl font-bold mb-10">Let's work together.</h2>
                
                {/* Form */}
                <form className="max-w-lg mx-auto space-y-4 mb-12 text-left">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Name" className="w-full bg-white/5 border border-moss/30 rounded-lg p-4 text-cream focus:outline-none focus:border-olive transition-colors" />
                        <input type="email" placeholder="Email" className="w-full bg-white/5 border border-moss/30 rounded-lg p-4 text-cream focus:outline-none focus:border-olive transition-colors" />
                    </div>
                    <textarea rows="4" placeholder="Tell me about your project..." className="w-full bg-white/5 border border-moss/30 rounded-lg p-4 text-cream focus:outline-none focus:border-olive transition-colors"></textarea>
                    <button type="submit" className="w-full bg-olive text-deep font-bold p-4 rounded-lg hover:bg-cream transition-colors">Send Message</button>
                </form>

                <div className="flex justify-center gap-8 text-moss">
                    <a href="#" className="hover:text-olive transition-colors"><Github /></a>
                    <a href="#" className="hover:text-olive transition-colors"><Linkedin /></a>
                    <a href="#" className="hover:text-olive transition-colors"><Twitter /></a>
                    <a href="mailto:hello@example.com" className="hover:text-olive transition-colors"><Mail /></a>
                </div>
                
                <p className="mt-12 text-moss/50 text-sm">© 2026 Jayant Kumar. All Rights Reserved.</p>
            </div>
        </section>

      </div>
    </ReactLenis>
  );
}