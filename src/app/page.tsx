import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ProjectOverviewSection } from "@/components/project-overview-section";
import { AmenitiesLayoutSection } from "@/components/amenities-layout-section";
import { ElevatedLivingSection } from "@/components/elevated-living-section";
import { ProjectGallerySection } from "@/components/project-gallery-section";
import { MasterPlanSection } from "@/components/master-plan-section";

export default function Home() {
  return <main><SiteHeader /><HeroSection /><ProjectOverviewSection /><AmenitiesLayoutSection /><ElevatedLivingSection /><ProjectGallerySection /><MasterPlanSection /></main>;
}
