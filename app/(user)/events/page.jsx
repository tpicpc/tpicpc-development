import React from "react";
import EventCard from "../../../components/Events/EventCard";
import OtherHeroSection from "../../../components/OtherHeroSection";

function page() {
  return (
    <>
      <OtherHeroSection title="Upcoming Events" />
      <EventCard />
    </>
  );
}

export default page;
