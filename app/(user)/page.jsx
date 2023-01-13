import React from "react";
import AboutUs from "../../components/AboutUs";
import Blogs from "../../components/Blogs";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import OurTeams from "../../components/OurTeams";
import TeachersSection from "../../components/TeachersSection";
import WhyJoinSection from "../../components/WhyJoinSection";

function page() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhyJoinSection />
      <TeachersSection />
      <OurTeams />
      <AboutUs />
      <Blogs />
      <Footer />
    </div>
  );
}

export default page;
