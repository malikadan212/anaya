import { useState } from 'react';
import { motion } from 'framer-motion';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="py-32 lg:py-48 bg-primary text-primary-foreground relative overflow-hidden">
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

      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-6">
            Join Our Circle of
            <br />
            Timeless Elegance
          </h2>
          
          <p className="text-lg font-light text-secondary mb-12 max-w-xl mx-auto">
            Be the first to discover new pieces, exclusive editions, and stories from our ateliers.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className="w-full px-6 py-4 bg-transparent border border-secondary/30 text-primary-foreground placeholder:text-secondary/50 focus:outline-none focus:border-secondary transition-colors duration-300 text-center font-light tracking-wide"
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitted}
              className="mt-6 px-12 py-4 bg-secondary text-primary text-sm tracking-wider font-light hover:bg-secondary/90 transition-all duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitted ? 'Welcome to Anaya' : 'Subscribe'}
            </motion.button>
          </form>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: '100px' }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-secondary/40 mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
