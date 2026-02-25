import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom"; 

// --- YOUR REAL PROJECTS ---
const projects = [
  {
    id: 1,
    title: "GamePatty",
    category: "Gaming Platform",
    src: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop", 
    desc: "A comprehensive gaming hub offering reviews, downloads, and community features.",
    year: "2024",
    link: "https://www.gamepatty.com/" // (Keeping this in data just in case you need it later)
  },
  {
    id: 2,
    title: "Janus Print",
    category: "E-Commerce",
    src: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
    desc: "A modern print-on-demand service with a sleek product customization interface.",
    year: "2024",
    link: "https://janusprint.vercel.app/"
  },
  {
    id: 3,
    title: "Paradise Click Chat",
    category: "Social App",
    src: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    desc: "Real-time messaging application focused on privacy and seamless user connection.",
    year: "2023",
    link: "https://paradise-click-chat.vercel.app/"
  },
  {
    id: 4,
    title: "Project A-318",
    category: "Experimental",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    desc: "A high-performance web experiment showcasing advanced animations and layout techniques.",
    year: "2023",
    link: "https://a-318155.vercel.app/"
  },
  {
    id: 5,
    title: "HTML5 Showcase",
    category: "Portfolio",
    src: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=2032&auto=format&fit=crop",
    desc: "A clean, semantic HTML5 structure demonstration for educational purposes.",
    year: "2022",
    link: "https://html-5-pi-ivory.vercel.app/"
  }
];

export default function ProjectList() {
  const [activeProject, setActiveProject] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const listRef = useRef(null);

  const handleMouseMove = (e) => {
    if (listRef.current) {
      const rect = listRef.current.getBoundingClientRect();
      setCursorPos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <div 
      ref={listRef}
      onMouseMove={handleMouseMove}
      className="relative w-full py-20 group"
    >
      {/* --- DESKTOP HOVER IMAGE (Hidden on Mobile) --- */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden hidden lg:block">
        <AnimatePresence mode="wait">
          {activeProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                x: cursorPos.x - 200, 
                y: cursorPos.y - 150 
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
              className="absolute w-[450px] h-[320px] rounded-sm overflow-hidden z-10 shadow-2xl shadow-dark/20 border border-dark/10"
            >
              <img 
                src={projects.find(p => p.id === activeProject)?.src} 
                alt="Project Preview" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3 text-dark text-xs font-mono uppercase tracking-widest text-center border-t border-dark/10">
                 Click to view case study
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- PROJECT LIST --- */}
      <div className="max-w-6xl mx-auto px-6 relative z-20">
        <div className="flex justify-between items-end mb-16 border-b border-dark/20 pb-6">
          <h2 className="text-4xl md:text-6xl font-light tracking-tight text-dark">Selected Works</h2>
          <span className="text-dark/50 font-mono text-sm">({projects.length.toString().padStart(2, '0')})</span>
        </div>

        <div className="flex flex-col space-y-4">
          {projects.map((project) => (
            /* Using Link to route to the Case Study page dynamically */
            <Link
              to={`/project/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
              key={project.id}
              className="group/item relative block"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveProject(project.id)}
                onMouseLeave={() => setActiveProject(null)}
                className="flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-dark/10 hover:border-dark transition-colors cursor-pointer bg-transparent hover:bg-dark/5 px-4 md:px-6 rounded-lg"
              >
                
                {/* Text Content */}
                <div className="md:w-1/2 transition-transform duration-500 group-hover/item:translate-x-4 z-20">
                  <h3 className="text-2xl md:text-5xl font-bold text-dark group-hover/item:text-dark transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-dark/60 text-sm md:text-base max-w-sm font-light group-hover/item:text-dark/80">
                    {project.desc}
                  </p>
                </div>
                
                {/* Meta Data & Arrow */}
                <div className="flex items-center gap-6 mt-4 md:mt-0 opacity-80 md:opacity-60 group-hover/item:opacity-100 transition-opacity z-20">
                  <img src={project.src} className="w-16 h-12 object-cover grayscale rounded-sm md:hidden border border-dark/20" alt="mobile-preview" />
                  
                  <div className="flex flex-col md:items-end">
                     <span className="font-mono text-xs md:text-sm text-dark/80 uppercase tracking-wider">{project.category}</span>
                     <span className="font-mono text-xs md:text-sm text-dark/40">{project.year}</span>
                  </div>
                  <div className="bg-transparent border border-dark/20 p-3 rounded-full group-hover/item:bg-dark group-hover/item:text-beige transition-all">
                     <ArrowUpRight className="group-hover/item:rotate-45 transition-transform duration-300" size={20} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
        
        {/* --- VIEW ARCHIVES BUTTON --- */}
        <div className="mt-16 text-center">
             <Link to="/archive" className="inline-block"> 
                 <button className="px-10 py-4 rounded-full border border-dark/20 text-dark hover:bg-dark hover:text-beige transition-all duration-300 uppercase tracking-widest text-xs font-bold flex items-center gap-2 mx-auto">
                    View All Archives <ArrowUpRight size={14} />
                 </button>
             </Link>
        </div>
      </div>
    </div>
  );
}