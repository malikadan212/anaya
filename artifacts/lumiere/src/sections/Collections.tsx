import { motion } from 'framer-motion';
import { Link } from 'wouter';

const collections = [
  {
    name: 'Rings',
    href: '/shop?category=rings',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80',
    description: 'Circles of forever',
  },
  {
    name: 'Necklaces',
    href: '/shop?category=necklaces',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    description: 'Grace for the collarbone',
  },
  {
    name: 'Earrings',
    href: '/shop?category=earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    description: 'Whispers of light',
  },
  {
    name: 'Bracelets',
    href: '/shop?category=bracelets',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80',
    description: 'Wrist poetry',
  },
];

export function Collections() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide text-center">
            Collections
          </h2>
        </motion.div>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={index === 1 ? 'md:mt-24' : index === 3 ? 'md:mt-16' : ''}
            >
              <Link href={collection.href}>
                <div className="group relative overflow-hidden aspect-[3/4] bg-muted">
                  <motion.img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                  
                  {/* Rose Quartz Glow on Hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(216,167,167,0.3)]" />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-3xl md:text-4xl font-serif font-light tracking-wide mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-light tracking-wide">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
