import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BrandStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0.3, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center',
            end: 'center center',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=800&q=80"
                alt="Artisan crafting jewelry"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div ref={textRef} className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-8">
                Created for
                <br />
                Moments That
                <br />
                Become Memories
              </h2>
              
              <div className="space-y-6 text-lg font-light text-muted-foreground leading-relaxed">
                <p>
                  Born in Pakistan, Rija bridges heritage craftsmanship with modern luxury.
                  Each piece is designed to catch the light — and hold a moment forever.
                </p>
                
                <p>
                  We believe in one perfect piece over many ordinary ones. In silence over noise.
                  In stories told through hands, not words.
                </p>
                
                <p>
                  Every jewel is handcrafted in limited quantities by artisans who learned their
                  trade the old way — through patience, precision, and obsession with detail.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '120px' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-px bg-secondary mt-12"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
