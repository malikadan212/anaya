import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "I bought the Anaya Solitaire for my engagement. It's not just a ring — it's a piece of art I'll treasure forever. The craftsmanship is flawless.",
    author: "Elena Rousseau",
    location: "Paris",
  },
  {
    quote: "The Rivière Necklace is the most beautiful thing I own. Every time I wear it, I feel like I'm wearing a little piece of magic.",
    author: "Yuki Tanaka",
    location: "Tokyo",
  },
  {
    quote: "Anaya understands that jewelry isn't about trends. It's about timeless pieces that tell your story. This is investment dressing at its finest.",
    author: "Sophie Chen",
    location: "London",
  },
  {
    quote: "The attention to detail is extraordinary. You can feel the love and care that went into every curve, every stone. This is what luxury should be.",
    author: "Isabelle Laurent",
    location: "Geneva",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 lg:py-48 bg-background">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide">
            Words from Our Circle
          </h2>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              {/* Quotation Mark */}
              <div className="text-8xl md:text-9xl font-serif text-accent/20 leading-none mb-8">
                "
              </div>

              {/* Quote */}
              <blockquote className="text-2xl md:text-3xl font-serif font-light leading-relaxed mb-12 max-w-3xl mx-auto">
                {testimonials[currentIndex].quote}
              </blockquote>

              {/* Author */}
              <div className="space-y-1">
                <p className="text-sm font-medium tracking-wider">
                  {testimonials[currentIndex].author}
                </p>
                <p className="text-xs text-muted-foreground font-light tracking-wide">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-6">
            <button
              onClick={prev}
              className="p-2 hover:text-accent transition-colors duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-accent w-8' : 'bg-border'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 hover:text-accent transition-colors duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
