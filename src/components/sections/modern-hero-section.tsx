"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Mouse } from "lucide-react";

export function ModernHeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 }
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2
      }
    }
  };

  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  return (
    <section 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden flex items-center justify-center pt-20 md:pt-24"
    >
      {/* Custom Cursor */}
      <div 
        ref={cursorRef}
        className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full bg-white rounded-full" />
      </div>

      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>

      {/* Floating 3D Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              transform: 'translateZ(0)'
            }}
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: i * 0.2 }}
          >
            <div 
              className={`w-${4 + i} h-${4 + i} opacity-20 rotate-45`}
              style={{
                background: `linear-gradient(45deg, 
                  ${i % 3 === 0 ? '#3b82f6' : i % 3 === 1 ? '#06b6d4' : '#14b8a6'}, 
                  ${i % 3 === 0 ? '#06b6d4' : i % 3 === 1 ? '#14b8a6' : '#3b82f6'})`,
                transform: `rotate(${i * 60}deg) scale(${0.5 + i * 0.1})`,
                borderRadius: i % 2 === 0 ? '50%' : '20%'
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center pt-8 md:pt-12">
          {/* Greeting Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 mt-6 md:mt-2"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-sm" />
              <span className="text-sm font-medium text-white">Available for work</span>
            </div>
          </motion.div>

          {/* Main Title with Letter Animation */}
          <motion.div
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className="mb-6"
          >
            {/* Greeting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-4"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
                Hi I'm
              </span>
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight font-inter">
              {["A", "h", "m", "e", "d"].map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="inline-block bg-gradient-to-br from-blue-400 via-cyan-500 to-teal-500 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 30px rgba(59, 130, 246, 0.5)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
              <br />
              {["A", "t", "t", "a", "f", "i"].map((letter, index) => (
                <motion.span
                  key={index + 5}
                  variants={letterVariants}
                  transition={{ duration: 0.6, delay: (index + 5) * 0.1 }}
                  className="inline-block bg-gradient-to-br from-teal-500 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: '0 0 30px rgba(20, 184, 166, 0.5)'
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </motion.div>

          {/* Dynamic Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-8"
          >
            <div className="text-xl md:text-2xl lg:text-3xl font-light text-muted-foreground">
              <motion.span
                animate={{
                  backgroundPosition: ["0% 0%", "100% 0%", "0% 0%"]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent"
                style={{ backgroundSize: "200% 100%" }}
              >
                Software Developer & IoT Specialist
              </motion.span>
              <br />
              <span className="text-lg">Crafting digital experiences that inspire</span>
            </div>
          </motion.div>

          {/* Interactive Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 max-w-md mx-auto mb-12"
          >
            {[
              { number: "3+", label: "Years" },
              { number: "15+", label: "Projects" },
              { number: "100%", label: "Passion" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, y: -5 }}
                className="text-center group cursor-pointer"
              >
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-blue-400 to-teal-400 bg-clip-text text-transparent group-hover:from-teal-400 group-hover:to-cyan-400 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Links with Hover Effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex items-center justify-center gap-6 mb-30"
          >
            {[
              { icon: Github, href: "https://github.com/Attafii", label: "GitHub" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/ahmed-attafi/", label: "LinkedIn" },
              { icon: Mail, href: "mailto:attafiahmed.dev@gmail.com", label: "Email" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ 
                  scale: 1.2, 
                  rotate: 360,
                  backgroundColor: "rgba(59, 130, 246, 0.2)"
                }}
                whileTap={{ scale: 0.9 }}
                className="relative p-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm group"
                title={social.label}
              >
                <social.icon className="w-6 h-6" />
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-teal-400/20"
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-muted-foreground"
            >
              <Mouse className="w-5 h-5" />
              <span className="text-sm">Scroll to explore</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            initial={{
              x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : Math.random() * 1200,
              y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : Math.random() * 800,
              opacity: 0
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </section>
  );
}
