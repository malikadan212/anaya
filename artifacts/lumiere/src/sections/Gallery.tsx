import { motion } from 'framer-motion';

const galleryImages = [
  {
    url: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80',
    span: '',
  },
  {
    url: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
    span: 'md:col-span-2',
  },
  {
    url: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80',
    span: '',
  },
];

export function Gallery() {
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
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-wide">
            Captured in Light
          </h2>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 lg:gap-6 auto-rows-[200px]">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <motion.img
                src={image.url}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
