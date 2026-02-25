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
      {/* Main container with Beige Background and Dark Text */}
      <div className="min-h-screen font-sans selection:bg-dark selection:text-beige bg-beige text-dark">
        
        {/* --- NAVBAR --- */}
        <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-6 py-6 backdrop-blur-md bg-beige/80 border-b border-dark/5">
          {/* Agency Logo */}
          <div className="text-xl font-bold tracking-tighter text-dark flex items-center gap-1 uppercase">
            Newresolution<span className="text-dark/50">Studio</span>
          </div>
          
          <div className="flex gap-4 items-center">
            <button 
                onClick={() => scrollToSection('contact')}
                className="hidden md:block px-6 py-2 rounded-full border border-dark/20 text-dark text-xs uppercase tracking-widest hover:bg-dark hover:text-beige transition-colors duration-300"
            >
                Start a Project
            </button>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20 overflow-hidden">
          
          {/* Background Gradient */}
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-dark/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="max-w-6xl z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-[12vw] md:text-[8.5rem] font-bold leading-[0.85] text-dark tracking-tighter mb-8"
            >
              DIGITAL <br />
              <span className="text-dark/80 font-serif italic pr-4">experiences</span> 
              & DESIGN
            </motion.h1>

            <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 border-t border-dark/10 pt-8 max-w-5xl">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-dark/70 max-w-md leading-relaxed"
              >
                We build pixel-perfect, engaging, and scalable digital platforms for forward-thinking brands. Bridging the gap between aesthetics and engineering.
              </motion.p>
              
              <motion.div 
                 initial={{ scale: 0 }}
                 animate={{ scale: 1 }}
                 transition={{ delay: 0.8 }}
                 className="flex gap-4"
              >
                 <MagneticButton onClick={() => scrollToSection('work')} className="bg-dark text-beige hover:bg-white/80 hover:text-dark font-bold px-8">
                    Explore Work
                 </MagneticButton>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
             animate={{ y: [0, 10, 0] }}
             transition={{ repeat: Infinity, duration: 2 }}
             className="absolute bottom-10 left-1/2 -translate-x-1/2 text-dark/30"
          >
             <ArrowDown size={24} />
          </motion.div>
        </section>

        {/* --- PROJECT LIST --- */}
        <section id="work" className="bg-beige">
            <ProjectList />
        </section>

        {/* --- SERVICES (Agency Focused) --- */}
        <section className="py-24 px-6 md:px-20 bg-beige relative border-t border-dark/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
             <div>
                <h2 className="text-dark text-4xl md:text-5xl mb-6 font-medium tracking-tight">Our Expertise</h2>
                <p className="text-dark/60 text-lg leading-relaxed mb-8">
                   We don't just write code; we solve business problems through design-led engineering. From high-converting landing pages to complex enterprise web applications, we deliver results.
                </p>
                <MagneticButton className="border border-dark/20 text-dark hover:bg-dark hover:text-beige">Our Methodology</MagneticButton>
             </div>
             <div className="space-y-4">
                {[
                   { title: "Web Architecture", desc: "Custom React & Next.js development for scalable, future-proof platforms.", icon: <Code /> },
                   { title: "Digital Design", desc: "UI/UX, prototyping, and micro-interactions that elevate brand identity.", icon: <Layers /> },
                   { title: "Growth & Performance", desc: "Technical SEO, Core Web Vitals optimization, and conversion-focused layouts.", icon: <Zap /> }
                ].map((s, i) => (
                   <motion.div 
                      key={i} 
                      whileHover={{ x: 10 }}
                      className="flex gap-6 p-6 rounded-none border-l-2 border-dark/10 hover:border-dark hover:bg-dark/5 transition-all duration-300 cursor-default"
                   >
                      <div className="text-dark pt-1">{s.icon}</div>
                      <div>
                         <h3 className="text-dark text-xl font-bold mb-2">{s.title}</h3>
                         <p className="text-dark/60">{s.desc}</p>
                      </div>
                   </motion.div>
                ))}
             </div>
          </div>
        </section>

        {/* --- CONTACT SECTION --- */}
        <section id="contact" className="py-32 px-6 bg-beige relative">
            <div className="max-w-4xl mx-auto text-center">
                <span className="text-dark/40 font-mono text-sm tracking-widest uppercase mb-4 block">Ready to scale?</span>
                <h2 className="text-dark text-5xl md:text-7xl font-bold mb-10">Let's build together.</h2>
                
                {/* Form */}
                <form className="max-w-lg mx-auto space-y-4 mb-12 text-left">
                    <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="Name / Company" className="w-full bg-transparent border border-dark/20 rounded-none p-4 text-dark focus:outline-none focus:border-dark focus:bg-dark/5 transition-all placeholder:text-dark/30" />
                        <input type="email" placeholder="Work Email" className="w-full bg-transparent border border-dark/20 rounded-none p-4 text-dark focus:outline-none focus:border-dark focus:bg-dark/5 transition-all placeholder:text-dark/30" />
                    </div>
                    <textarea rows="4" placeholder="Tell us about your project, timeline, and goals..." className="w-full bg-transparent border border-dark/20 rounded-none p-4 text-dark focus:outline-none focus:border-dark focus:bg-dark/5 transition-all placeholder:text-dark/30"></textarea>
                    <button type="submit" className="w-full bg-dark text-beige font-bold p-4 rounded-none hover:bg-dark/80 transition-colors uppercase tracking-widest text-sm">Submit Inquiry</button>
                </form>

                <div className="flex justify-center gap-8 text-dark/40">
                    <a href="#" className="hover:text-dark transition-colors"><Github /></a>
                    <a href="#" className="hover:text-dark transition-colors"><Linkedin /></a>
                    <a href="#" className="hover:text-dark transition-colors"><Twitter /></a>
                    <a href="mailto:hello@newresolutionstudio.com" className="hover:text-dark transition-colors"><Mail /></a>
                </div>
                
                <p className="mt-12 text-dark/30 text-sm">© {new Date().getFullYear()} Newresolution Studio. All Rights Reserved.</p>
            </div>
        </section>

      </div>
    </ReactLenis>
  );
}