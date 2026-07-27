import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { products } from '@/data/products';

export function FeaturedProducts() {
  const featured = products.filter(p => p.badge).slice(0, 6);

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-wide mb-4">
            Featured Pieces
          </h2>
          <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
            Handpicked treasures from our ateliers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link href={`/product/${product.id}`}>
                <div className="group relative">
                  {/* Image Container with 3D Tilt Effect */}
                  <motion.div
                    className="relative overflow-hidden aspect-square bg-muted mb-6"
                    whileHover={{ rotateY: 2, rotateX: -2 }}
                    transition={{ duration: 0.3 }}
                    style={{ perspective: 1000 }}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Badge */}
                    {product.badge && (
                      <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground text-xs tracking-wider">
                        {product.badge}
                      </div>
                    )}

                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(216,167,167,0.2)]" />
                    </div>
                  </motion.div>

                  {/* Product Info */}
                  <div>
                    <h3 className="text-xl font-serif font-light tracking-wide mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-muted-foreground font-light mb-3 tracking-wide">
                      {product.material}
                    </p>
                    <p className="text-sm text-foreground font-light">
                      Rs. {product.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
