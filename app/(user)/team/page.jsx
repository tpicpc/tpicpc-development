
import OtherHeroSection from "../../../components/OtherHeroSection";
import OurTeams from "../../../components/OurTeams";
import Team2023 from "../../../components/Team2023";

export const metadata = {
  title: "Team | TPI - Computer Programming Club",
};

function page() {
  return (
    <div>
      <OtherHeroSection title="Team" />
      <Team2023 />
      <OurTeams />
    </div>
  );
}

export default page;
