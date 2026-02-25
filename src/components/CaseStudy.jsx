import React, { useEffect } from "react";
import { ReactLenis } from "lenis/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ExternalLink, Users, Code, Layout } from "lucide-react";
import { Link, useParams, useNavigate } from "react-router-dom";

// --- DYNAMIC PROJECT DATA ---
// We use a "slug" (like 'janus-print') to match the URL to the exact project.
const allCaseStudies = [
  {
    slug: "gamepatty",
    title: "GamePatty",
    category: "Gaming & Community",
    client: "GamePatty Inc.",
    services: "Platform Architecture, UI/UX Design",
    team: ["Lead UI/UX Designer", "Frontend Architect", "Project Manager"],
    link: "https://www.gamepatty.com/",
    heroImg: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop",
    detailImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    challenge: "The gaming community needed a centralized hub that went beyond traditional, cluttered forum layouts. GamePatty approached our studio to create an immersive, high-performance platform where users could discover indie games, read reviews, and interact seamlessly. Our primary technical hurdle was handling heavy, high-resolution gaming assets and dynamic community feeds without sacrificing Core Web Vitals.",
    solution: "At Newresolution Studio, we believe in design-led engineering. We mapped out the entire user journey in Figma before touching a single line of code. For the architecture, our engineering team opted for a modern headless stack utilizing Next.js and Supabase. Server-side rendering ensured instant load times and perfect SEO indexing.",
    stats: [
        { value: "99", label: "Lighthouse Score", unit: "%" },
        { value: "3.2", label: "Session Duration", unit: "x" },
        { value: "<1", label: "Page Load Time", unit: "s" }
    ],
    nextSlug: "janus-print",
    nextTitle: "Janus Print",
    nextImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop"
  },
  {
    slug: "janus-print",
    title: "Janus Print",
    category: "E-Commerce",
    client: "Janus Printing Solutions",
    services: "E-Commerce Strategy, Custom React Dev",
    team: ["E-Commerce Strategist", "Lead Developer", "Visual Designer"],
    link: "https://janusprint.vercel.app/",
    heroImg: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2074&auto=format&fit=crop",
    detailImg: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    challenge: "Janus Print needed to revolutionize the traditional print-on-demand experience. Their existing platform was clunky and caused high cart abandonment rates. They challenged us to build a sleek, intuitive product customization interface that felt premium and worked flawlessly on mobile devices.",
    solution: "We engineered a highly interactive React front-end that allows users to visualize their prints in real-time. By leveraging Framer Motion, we created a tactile, app-like experience in the browser. The integration with Shopify's Storefront API allowed for a completely custom, headless checkout flow that matches the brand's aesthetic.",
    stats: [
        { value: "45", label: "Cart Conversion", unit: "%" },
        { value: "2.1", label: "Revenue Growth", unit: "x" },
        { value: "0", label: "Downtime", unit: "" }
    ],
    nextSlug: "paradise-click-chat",
    nextTitle: "Paradise Chat",
    nextImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"
  },
  {
    slug: "paradise-click-chat",
    title: "Paradise Chat",
    category: "Social Web App",
    client: "Internal Studio Venture",
    services: "Real-time Systems, UI/UX",
    team: ["Full Stack Engineer", "Interaction Designer"],
    link: "https://paradise-click-chat.vercel.app/",
    heroImg: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    detailImg: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=2070&auto=format&fit=crop",
    challenge: "As an internal venture, Newresolution Studio wanted to explore the limits of real-time web technologies. The goal was to build a messaging application focused heavily on privacy, speed, and seamless user connection, bypassing the bloated features of mainstream messaging platforms.",
    solution: "We utilized Socket.io paired with a Node.js backend to establish persistent, low-latency connections. The frontend was built with React, focusing on a minimalist, brutalist design language that prioritizes content and speed over excessive graphical elements.",
    stats: [
        { value: "10", label: "Latency (ms)", unit: "" },
        { value: "5k+", label: "Concurrent Users", unit: "" },
        { value: "E2E", label: "Encryption", unit: "" }
    ],
    nextSlug: "project-a-318",
    nextTitle: "Project A-318",
    nextImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
  },
  {
    slug: "project-a-318",
    title: "Project A-318",
    category: "Experimental WebGL",
    client: "R&D Department",
    services: "Creative Coding, 3D Rendering",
    team: ["Creative Technologist", "3D Generalist"],
    link: "https://a-318155.vercel.app/",
    heroImg: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    detailImg: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2064&auto=format&fit=crop",
    challenge: "Pushing the boundaries of what a web browser can render. Project A-318 was conceived as an interactive showcase of high-performance animations, complex shaders, and unconventional layout techniques intended to win industry awards and showcase technical capability.",
    solution: "By utilizing Three.js and raw WebGL shaders alongside GSAP for scroll-trigger animations, we created a cinematic journey. Performance was meticulously optimized to ensure 60fps rendering even on mid-tier mobile hardware.",
    stats: [
        { value: "60", label: "Frames per Second", unit: "" },
        { value: "AWw", label: "Award Nomination", unit: "" },
        { value: "100", label: "Creative Score", unit: "%" }
    ],
    nextSlug: "gamepatty", // Loops back to the first one
    nextTitle: "GamePatty",
    nextImg: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudy() {
  // 1. Get the 'id' parameter from the URL (e.g., 'janus-print')
  const { id } = useParams();
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // 2. Find the project in our array that matches the URL slug
  const project = allCaseStudies.find((study) => study.slug === id);

  // 3. Scroll to top automatically when the page loads or changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // 4. If the user types a bad URL (e.g., /project/does-not-exist), handle it safely
  if (!project) {
    return (
      <div className="min-h-screen bg-beige text-dark flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <button onClick={() => navigate("/")} className="border border-dark px-6 py-2 uppercase text-xs tracking-widest hover:bg-dark hover:text-beige transition">
          Return Home
        </button>
      </div>
    );
  }

  // 5. Render the UI dynamically using {project.xxx} variables
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-beige text-dark font-sans selection:bg-dark selection:text-beige pb-20">
        
        {/* Navigation */}
        <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-beige pointer-events-none">
             <Link to="/" className="pointer-events-auto flex items-center gap-2 font-mono text-sm uppercase hover:opacity-70 transition-opacity">
                 <ArrowLeft size={16}/> Back to Projects
             </Link>
        </nav>

        {/* Hero Image (Dynamic) */}
        <div className="h-[70vh] w-full overflow-hidden relative">
            <motion.img 
                style={{ scale }}
                src={project.heroImg} 
                className="w-full h-full object-cover"
                alt={project.title}
            />
            <div className="absolute inset-0 bg-dark/30" />
            <div className="absolute bottom-10 left-6 md:left-20 text-white">
                <span className="font-mono text-sm uppercase tracking-widest mb-4 block opacity-80">{project.category}</span>
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase">{project.title}</h1>
            </div>
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-6 md:px-20 py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
            
            {/* Sticky Sidebar (Project Details & Team) */}
            <div className="md:col-span-4 h-fit md:sticky md:top-32 space-y-8">
                <div className="border-t border-dark/20 pt-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-dark/50 mb-1">Client</h3>
                    <p className="text-xl font-bold">{project.client}</p>
                </div>
                <div className="border-t border-dark/20 pt-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-dark/50 mb-1">Services</h3>
                    <p className="text-lg font-bold">{project.services}</p>
                </div>
                <div className="border-t border-dark/20 pt-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-dark/50 mb-3">Project Team</h3>
                    <ul className="space-y-3">
                        {project.team.map((member, index) => (
                            <li key={index} className="flex items-center gap-3 text-dark">
                                {/* Alternating icons purely for visual flair */}
                                {index === 0 ? <Layout size={16} className="text-dark/50" /> : 
                                 index === 1 ? <Code size={16} className="text-dark/50" /> : 
                                 <Users size={16} className="text-dark/50" />}
                                <span className="font-medium">{member}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-4 pt-8">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full bg-dark text-beige py-4 flex justify-center items-center gap-2 font-bold uppercase text-xs tracking-widest hover:bg-dark/80 transition-colors">
                        Visit Live Platform <ExternalLink size={14} />
                    </a>
                </div>
            </div>

            {/* Main Narrative (Dynamic) */}
            <div className="md:col-span-8 space-y-20">
                
                {/* Section 1: Business Challenge */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">The Business Challenge</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-dark/70">
                        {project.challenge}
                    </p>
                </section>

                {/* Large Image Break */}
                <div className="aspect-[16/9] bg-dark/5 overflow-hidden">
                     <img src={project.detailImg} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Detail Shot" />
                </div>

                {/* Section 2: Studio Approach */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Our Approach & Solution</h2>
                    <p className="text-lg md:text-xl leading-relaxed text-dark/70 mb-8">
                        {project.solution}
                    </p>
                </section>

                {/* Section 3: Results */}
                <section>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">The Impact</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {project.stats.map((stat, i) => (
                            <div key={i} className={`bg-white/50 p-6 border border-dark/10 flex flex-col justify-center items-center text-center ${i === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                                <h4 className="text-4xl md:text-5xl font-bold mb-2">
                                    {stat.value}<span className="text-dark/40 text-2xl">{stat.unit}</span>
                                </h4>
                                <p className="text-xs uppercase tracking-widest text-dark/60">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </section>

            </div>
        </div>

        {/* Next Project Link - Dynamic */}
        <Link to={`/project/${project.nextSlug}`}>
            <div className="h-[50vh] bg-dark flex items-center justify-center relative overflow-hidden group cursor-pointer border-t border-dark/20 mt-12">
                <div className="absolute inset-0 bg-dark opacity-100 group-hover:opacity-80 transition-opacity duration-500 z-10" />
                <img src={project.nextImg} className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700" alt="Next Project" />
                <div className="relative z-20 text-center text-beige">
                    <p className="text-sm font-mono uppercase tracking-widest mb-4 opacity-70">Up Next</p>
                    <h2 className="text-5xl md:text-8xl font-bold tracking-tighter uppercase">{project.nextTitle}</h2>
                </div>
            </div>
        </Link>

      </div>
    </ReactLenis>
  );
}