import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft, Github, Link as LinkIcon } from "lucide-react";
import { ReactLenis } from "lenis/react";

// --- ARCHIVE DATA (Add all your older/smaller projects here) ---
const archiveProjects = [
  {
    year: "2024",
    project: "GamePatty",
    madeAt: "Personal",
    builtWith: ["Next.js", "Tailwind", "Supabase"],
    link: "https://www.gamepatty.com/",
    github: "#"
  },
  {
    year: "2024",
    project: "Janus Print",
    madeAt: "Client Work",
    builtWith: ["React", "Shopify API", "Framer Motion"],
    link: "https://janusprint.vercel.app/",
    github: "#"
  },
  {
    year: "2023",
    project: "Paradise Click Chat",
    madeAt: "Personal",
    builtWith: ["Socket.io", "React", "Node.js"],
    link: "https://paradise-click-chat.vercel.app/",
    github: "#"
  },
  {
    year: "2023",
    project: "Project A-318",
    madeAt: "Experiment",
    builtWith: ["Three.js", "WebGL", "GSAP"],
    link: "https://a-318155.vercel.app/",
    github: "#"
  },
  {
    year: "2022",
    project: "HTML5 Showcase",
    madeAt: "Learning",
    builtWith: ["HTML5", "CSS3", "Vanilla JS"],
    link: "https://html-5-pi-ivory.vercel.app/",
    github: "#"
  },
  // Add more past projects here...
  {
    year: "2022",
    project: "Weather Dashboard",
    madeAt: "Challenge",
    builtWith: ["API Integration", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    year: "2021",
    project: "Task Master App",
    madeAt: "Personal",
    builtWith: ["React Native", "Firebase"],
    link: "#",
    github: "#"
  },
];

export default function Archives() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-deep text-cream font-sans selection:bg-olive selection:text-deep p-6 md:p-20">
        
        {/* --- HEADER --- */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-20"
        >
            <a href="/" className="inline-flex items-center gap-2 text-olive hover:text-cream transition-colors mb-8 group">
                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Back to Portfolio
            </a>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6">Archive</h1>
            <p className="text-moss text-lg max-w-xl">
                A comprehensive list of things I’ve built, broken, and fixed over the years. 
                Includes experiments, client work, and open source contributions.
            </p>
        </motion.div>

        {/* --- TABLE LAYOUT --- */}
        <div className="w-full">
            {/* Table Header (Hidden on Mobile) */}
            <div className="hidden md:grid grid-cols-12 gap-4 text-moss text-sm uppercase tracking-widest border-b border-moss/30 pb-4 mb-4 font-mono">
                <div className="col-span-1">Year</div>
                <div className="col-span-3">Project</div>
                <div className="col-span-2">Made at</div>
                <div className="col-span-4">Built with</div>
                <div className="col-span-2">Link</div>
            </div>

            {/* Table Rows */}
            <div className="flex flex-col space-y-2">
                {archiveProjects.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group relative grid grid-cols-1 md:grid-cols-12 gap-4 items-center py-6 md:py-4 border-b border-moss/10 hover:bg-white/5 md:hover:bg-transparent transition-colors rounded-lg md:rounded-none px-4 md:px-0"
                    >
                        {/* Mobile: Year & Title combined */}
                        <div className="col-span-1 text-moss/70 font-mono text-sm mb-1 md:mb-0">
                            {item.year}
                        </div>
                        
                        <div className="col-span-11 md:col-span-3 font-bold text-xl md:text-base text-cream group-hover:text-olive transition-colors">
                            {item.project}
                        </div>

                        <div className="col-span-6 md:col-span-2 text-sm text-moss mt-2 md:mt-0">
                             <span className="md:hidden text-olive/50 text-xs uppercase mr-2">Client:</span>
                            {item.madeAt}
                        </div>

                        <div className="col-span-6 md:col-span-4 flex flex-wrap gap-2 mt-2 md:mt-0">
                            {item.builtWith.map((tech, i) => (
                                <span key={i} className="text-xs bg-olive/10 text-olive px-2 py-1 rounded-full">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <div className="col-span-12 md:col-span-2 flex items-center gap-4 mt-4 md:mt-0 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity">
                            {item.link !== "#" && (
                                <a href={item.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-cream hover:text-olive text-sm font-medium">
                                    <LinkIcon size={14} /> Visit <span className="hidden md:inline">Site</span>
                                </a>
                            )}
                             {item.github !== "#" && (
                                <a href={item.github} target="_blank" rel="noopener noreferrer" className="text-moss hover:text-cream">
                                    <Github size={18} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>

      </div>
    </ReactLenis>
  );
}