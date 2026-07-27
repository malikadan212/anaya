import { Hero } from '@/sections/Hero';
import { Collections } from '@/sections/Collections';
import { FeaturedProducts } from '@/sections/FeaturedProducts';
import { BrandStory } from '@/sections/BrandStory';
import { Craftsmanship } from '@/sections/Craftsmanship';
import { Testimonials } from '@/sections/Testimonials';
import { Gallery } from '@/sections/Gallery';
import { Newsletter } from '@/sections/Newsletter';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Collections />
      <FeaturedProducts />
      <BrandStory />
      <Craftsmanship />
      <Testimonials />
      <Gallery />
      <Newsletter />
    </>
  );
}
