import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import Location from "@/components/Location";
import OurImpact from "@/components/OurImpact";

export default function Home() {
  return (
    <div >
        <main >
        <HomeHero />
        <HomeProjects />
        <OurImpact />
        <Location />
      </main>
    </div>
  );
}
