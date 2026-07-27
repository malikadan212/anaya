import { useState } from 'react';
import { useParams, Link } from 'wouter';
import { motion } from 'framer-motion';
import { Heart, ArrowLeft } from 'lucide-react';
import { products } from '@/data/products';

export default function ProductPage() {
  const params = useParams();
  const product = products.find(p => p.id === params.id);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-light mb-4">Piece not found</h1>
          <Link href="/shop" className="text-sm text-accent hover:underline">
            Return to Collections
          </Link>
        </div>
      </div>
    );
  }

  const reviews = [
    {
      author: "Marie L.",
      rating: 5,
      comment: "Absolutely stunning. The craftsmanship is impeccable and it looks even more beautiful in person.",
    },
    {
      author: "Aiko S.",
      rating: 5,
      comment: "Worth every penny. This is an heirloom piece that I'll treasure forever.",
    },
    {
      author: "Charlotte B.",
      rating: 5,
      comment: "The attention to detail is extraordinary. Anaya has created something truly special.",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300">
            <ArrowLeft className="w-4 h-4" />
            Back to Collections
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Main Image */}
            <div className="aspect-square overflow-hidden bg-muted mb-4">
              <motion.img
                key={selectedImage}
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square overflow-hidden bg-muted transition-all duration-300 ${
                    selectedImage === index ? 'ring-2 ring-accent' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Badge */}
            {product.badge && (
              <div className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs tracking-wider mb-6">
                {product.badge}
              </div>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-serif font-light tracking-wide mb-4">
              {product.name}
            </h1>

            {/* Material */}
            <p className="text-sm text-muted-foreground font-light tracking-wide mb-6">
              {product.material}
            </p>

            {/* Price */}
            <p className="text-3xl font-serif font-light mb-8">
              Rs. {product.price.toLocaleString()}
            </p>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-border">
              <p className="text-base font-light leading-relaxed text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* Size/Variant Selection - Placeholder */}
            <div className="mb-8">
              <h3 className="text-sm font-medium tracking-wider mb-4">Size</h3>
              <div className="flex gap-3">
                {['S', 'M', 'L'].map((size) => (
                  <button
                    key={size}
                    className="px-6 py-3 border border-border hover:border-accent hover:bg-accent/5 transition-all duration-300 text-sm font-light"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-12">
              <button className="flex-1 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-wider font-light hover:bg-primary/90 transition-all duration-300">
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-4 border transition-all duration-300 ${
                  isWishlisted
                    ? 'border-accent bg-accent/10 text-accent'
                    : 'border-border hover:border-accent'
                }`}
                aria-label="Add to wishlist"
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Details */}
            <div className="space-y-4 text-sm font-light">
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Handcrafted</span>
                <span>Limited Edition</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Ships from</span>
                <span>Paris & Tokyo</span>
              </div>
              <div className="flex justify-between py-3 border-b border-border">
                <span className="text-muted-foreground">Delivery</span>
                <span>3-5 Business Days</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Reviews Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wide mb-12 text-center">
            What Our Circle Says
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {reviews.map((review, index) => (
              <div key={index} className="p-8 border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-sm font-light leading-relaxed mb-4 text-muted-foreground">
                  "{review.comment}"
                </p>
                <p className="text-xs font-medium tracking-wider">
                  {review.author}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
