import { Link } from 'wouter';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-md"
      >
        <h1 className="text-8xl font-serif font-light text-accent mb-6">404</h1>
        <h2 className="text-3xl font-serif font-light tracking-wide mb-4">
          This Page Has Vanished
        </h2>
        <p className="text-base text-muted-foreground font-light mb-8 leading-relaxed">
          Like light through a prism, you've wandered somewhere unexpected.
          Let us guide you back.
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-3 bg-primary text-primary-foreground text-sm tracking-wider font-light hover:bg-primary/90 transition-all duration-300"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
