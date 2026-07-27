import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Design',
    description: 'Each piece begins as a hand-drawn sketch, refined through countless iterations until form and function unite.',
  },
  {
    number: '02',
    title: 'Material Selection',
    description: 'We source only ethically-mined precious metals and conflict-free gemstones from trusted partners.',
  },
  {
    number: '03',
    title: 'Handcrafting',
    description: 'Master artisans shape each piece using techniques passed down through generations, honoring tradition.',
  },
  {
    number: '04',
    title: 'Finishing',
    description: 'Every surface is polished to perfection, every stone set with precision, every detail considered.',
  },
];

export function Craftsmanship() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.step-item',
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 60%',
            end: 'bottom 40%',
            scrub: 1,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 lg:py-48 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-6">
            The Art of Making
          </h2>
          <p className="text-lg font-light text-secondary max-w-2xl mx-auto">
            Every piece passes through four stages of creation
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={timelineRef} className="max-w-4xl mx-auto">
          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="step-item grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-2">
                  <span className="text-6xl md:text-8xl font-serif font-light text-secondary/40">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="lg:col-span-10 lg:pt-4">
                  <h3 className="text-3xl md:text-4xl font-serif font-light tracking-wide mb-4 text-secondary">
                    {step.title}
                  </h3>
                  <p className="text-lg font-light text-primary-foreground/80 leading-relaxed max-w-2xl">
                    {step.description}
                  </p>
                  
                  {index < steps.length - 1 && (
                    <div className="h-px bg-secondary/20 mt-12 lg:mt-16" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Particles */}
        <div className="particles-container">
          {Array.from({ length: 15 }).map((_, i) => (
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
      </div>
    </section>
  );
}
