import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'wouter';
import { products, Product } from '@/data/products';
import { ChevronDown } from 'lucide-react';

type Category = 'all' | 'rings' | 'necklaces' | 'earrings' | 'bracelets';
type SortOption = 'newest' | 'price-asc' | 'price-desc';

export default function ShopPage() {
  const [location] = useLocation();
  const urlParams = new URLSearchParams(location.split('?')[1]);
  const categoryParam = urlParams.get('category') as Category | null;

  const [selectedCategory, setSelectedCategory] = useState<Category>(categoryParam || 'all');
  const [sortBy, setSortBy] = useState<SortOption>('newest');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');

  const materials = ['all', 'Gold', 'Silver', 'Platinum', 'Rose Gold'];

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Price filter
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Material filter
    if (selectedMaterial !== 'all') {
      filtered = filtered.filter(p => p.material.toLowerCase().includes(selectedMaterial.toLowerCase()));
    }

    // Sort
    if (sortBy === 'price-asc') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      filtered.sort((a, b) => b.price - a.price);
    }

    return filtered;
  }, [selectedCategory, sortBy, priceRange, selectedMaterial]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-wide mb-4">
            Collections
          </h1>
          <p className="text-lg text-muted-foreground font-light">
            {filteredProducts.length} piece{filteredProducts.length !== 1 ? 's' : ''}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Filters Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="space-y-8 lg:sticky lg:top-32">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Category</h3>
                <div className="space-y-2">
                  {(['all', 'rings', 'necklaces', 'earrings', 'bracelets'] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-4 py-2 text-sm font-light transition-colors duration-300 ${
                        selectedCategory === cat
                          ? 'bg-accent/10 text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Material</h3>
                <div className="space-y-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      onClick={() => setSelectedMaterial(mat)}
                      className={`block w-full text-left px-4 py-2 text-sm font-light transition-colors duration-300 ${
                        selectedMaterial === mat
                          ? 'bg-accent/10 text-foreground'
                          : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {mat.charAt(0).toUpperCase() + mat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Price Range</h3>
                <div className="px-4 space-y-4">
                  <input
                    type="range"
                    min="0"
                    max="5000"
                    step="100"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full accent-accent"
                  />
                  <p className="text-sm text-muted-foreground font-light">
                    Up to Rs. {priceRange[1].toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Sort */}
              <div>
                <h3 className="text-sm font-medium tracking-wider mb-4">Sort By</h3>
                <div className="relative">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as SortOption)}
                    className="w-full px-4 py-2 bg-background border border-border text-sm font-light appearance-none cursor-pointer focus:outline-none focus:border-accent transition-colors duration-300"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none" />
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/product/${product.id}`}>
                    <div className="group">
                      <div className="relative overflow-hidden aspect-square bg-muted mb-4">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        
                        {product.badge && (
                          <div className="absolute top-3 right-3 px-2 py-1 bg-primary text-primary-foreground text-xs tracking-wider">
                            {product.badge}
                          </div>
                        )}

                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(216,167,167,0.2)]" />
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-serif font-light tracking-wide mb-1">
                          {product.name}
                        </h3>
                        <p className="text-xs text-muted-foreground font-light mb-2">
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
            </motion.div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-lg text-muted-foreground font-light">
                  No pieces match your selection.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
