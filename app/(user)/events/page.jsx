import React from "react";
import EventCard from "../../../components/Events/EventCard";
import OtherHeroSection from "../../../components/OtherHeroSection";

function page() {
  return (
    <div >
      <OtherHeroSection title="Upcoming Events" />
      <EventCard />
    </div>
  );
}

export default page;
