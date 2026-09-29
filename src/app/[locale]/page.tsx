import { Hero } from "@/components/home/Hero";
import { ProductFrame } from "@/components/home/ProductFrame";
import { PainRows } from "@/components/home/PainRows";
import { ServicesGrid } from "@/components/home/ServicesGrid";
import { FlagshipProject } from "@/components/home/FlagshipProject";
import { Testimonials } from "@/components/home/Testimonials";
import { AboutMe } from "@/components/home/AboutMe";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductFrame />
      <PainRows />
      <ServicesGrid />
      <FlagshipProject />
      <Testimonials />
      <AboutMe />
    </>
  );
}
