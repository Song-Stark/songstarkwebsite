import OurMission from "@/components/about/OurMission";
import OurStory from "@/components/about/OurStory";
import TeamOverview from "@/components/about/TeamOverview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Song & Stark",
  description: "Learn more about Song & Stark, our mission, and the team behind the art gallery.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <OurStory />
      <OurMission />
      <TeamOverview />
    </main>
  );
}