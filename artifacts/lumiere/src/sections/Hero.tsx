import { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.hero-image', {
        scale: 1.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });

      gsap.to('.hero-text', {
        y: 100,
        opacity: 0,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="hero-image absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(250, 246, 239, 0.3), rgba(250, 246, 239, 0.8)), url('https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=1600&q=80')`,
          }}
        />
      </div>

      {/* Floating Particles */}
      <div className="particles-container">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-text relative h-full flex items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-wide text-foreground mb-6"
          >
            Jewels That Hold
            <br />
            Your Story
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
            className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Handcrafted pieces designed for moments that last forever
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.8, ease: 'easeOut' }}
          >
            <a
              href="/shop"
              className="inline-block px-12 py-4 bg-primary text-primary-foreground text-sm tracking-wider font-light hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Explore Collections
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-secondary"
        />
      </motion.div>
    </div>
  );
}
