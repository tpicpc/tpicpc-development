import React from "react";
import OtherHeroSection from "../../../components/OtherHeroSection";
import TeacherSection from "../../../components/TeachersSection";
import OurTeams from "../../../components/OurTeams";

function page() {
  return (
    <div>
      <OtherHeroSection title="Team" />
      {/* <TeacherSection/> */}
      <OurTeams />
    </div>
  );
}

export default page;
