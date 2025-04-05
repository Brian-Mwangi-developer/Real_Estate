import React from 'react'
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import DiscoverSection from "@/app/(nondashboard)/landing/DiscoverSection";
import CallToActionSection from "@/app/(nondashboard)/landing/CallToActionSection";
import FooterSection from "@/app/(nondashboard)/landing/FooterSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection/>
      <FeatureSection/>
      <DiscoverSection/>
      <CallToActionSection/>
      <FooterSection/>
    </div>
  )
}
export default LandingPage
