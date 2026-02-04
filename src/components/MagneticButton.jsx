import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MagneticButton({ children, className, onClick }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics for that "snappy" feel
  const mouseX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    x.set(middleX);
    y.set(middleY);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      className={`relative overflow-hidden rounded-full px-8 py-4 font-medium uppercase tracking-wider transition-colors ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      onClick={onClick}
      style={{ x: mouseX, y: mouseY }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      {/* Hover Background Fill Effect */}
      <motion.div 
        className="absolute inset-0 -z-0 bg-white/10 opacity-0 transition-opacity hover:opacity-100"
        layoutId="hover-bg"
      />
    </motion.button>
  );
}