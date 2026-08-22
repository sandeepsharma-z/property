import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { ProjectOverviewSection } from "@/components/project-overview-section";

export default function Home() {
  return <main><SiteHeader /><HeroSection /><ProjectOverviewSection /></main>;
}
