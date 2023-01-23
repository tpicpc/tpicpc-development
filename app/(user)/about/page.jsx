"use client"
import React, { useEffect } from "react";
import AboutSection from "../../../components/About/AboutSection";
import OtherHeroSection from "../../../components/OtherHeroSection";

function page() {

  // when visiting this page, the page will be scrolled to the top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <OtherHeroSection title="About Us" />
      <AboutSection />
    </div>
  );
}

export default page;
