import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import TeamOverview from "@/components/about/TeamOverview";
export default function About() {
  return (
    <main className="min-h-screen">
      <OurStory />
      <OurMission />
      <TeamOverview />
    </main>
  );
}