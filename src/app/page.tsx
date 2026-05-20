"use client";

import Navigation from "@/components/Navigation";
import CustomCursor from "@/components/CustomCursor";
import Spotlight from "@/components/Spotlight";
import CommandPalette from "@/components/CommandPalette";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import JourneySection from "@/components/sections/JourneySection";
import InterestsSection from "@/components/sections/InterestsSection";

import BlogSection from "@/components/sections/BlogSection";
import ContactSection from "@/components/sections/ContactSection";
import SectionDivider from "@/components/SectionDivider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Global Interactive Elements */}
      <CustomCursor />
      <Spotlight />
      <CommandPalette />
      <Navigation />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <JourneySection />
        <SectionDivider />
        <InterestsSection />
        <SectionDivider />

        <BlogSection />
        <SectionDivider />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
