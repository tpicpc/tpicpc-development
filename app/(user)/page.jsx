import { groq } from "next-sanity";
import React from "react";
import AboutUs from "../../components/AboutUs";
import Blogs from "../../components/Blogs";
import ContractUs from "../../components/ContractUs";
import HeroSection from "../../components/HeroSection";
import OurTeams from "../../components/OurTeams";
import TeachersSection from "../../components/TeachersSection";
import WhyJoinSection from "../../components/WhyJoinSection";

const query = groq`

`

function page() {
  return (
    <div >
      <HeroSection />
      <WhyJoinSection />
      <TeachersSection />
      <OurTeams />
      <AboutUs />
      <Blogs />
      <ContractUs/>
    </div>
  );
}

export default page;
