import { Hero } from "@/components/home/Hero";
import { ProductFrame } from "@/components/home/ProductFrame";
import { PainRows } from "@/components/home/PainRows";
import { SolutionsTabs } from "@/components/home/SolutionsTabs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductFrame />
      <PainRows />
      <SolutionsTabs />
    </>
  );
}
