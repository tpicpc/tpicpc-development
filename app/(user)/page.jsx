import { groq } from "next-sanity";
import React from "react";
import AboutUs from "../../components/AboutUs";
import Blogs from "../../components/Blogs";
import ContractUs from "../../components/ContractUs";
import HeroSection from "../../components/HeroSection";
import OurTeams from "../../components/OurTeams";
import TeachersSection from "../../components/TeachersSection";
import Team2023 from "../../components/Team2023";
import WhyJoinSection from "../../components/WhyJoinSection";

const query = groq`

`

function page() {
  return (
    <div >
      <HeroSection />
      <WhyJoinSection />
      <TeachersSection />
      {/* <OurTeams /> */}
      <Team2023 />
      <AboutUs />
      <Blogs />
      <ContractUs/>
    </div>
  );
}

export default page;
