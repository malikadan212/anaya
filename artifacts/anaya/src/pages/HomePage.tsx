import { Hero } from '@/sections/Hero';
import { Collections } from '@/sections/Collections';
import { FeaturedProducts } from '@/sections/FeaturedProducts';
import { BrandStory } from '@/sections/BrandStory';
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
      <Testimonials />
      <Gallery />
      <Newsletter />
    </>
  );
}
