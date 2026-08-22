import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ProjectOverviewSection } from "@/components/project-overview-section";
import { AmenitiesLayoutSection } from "@/components/amenities-layout-section";

export default function Home() {
  return <main><SiteHeader /><HeroSection /><ProjectOverviewSection /><AmenitiesLayoutSection /></main>;
}
