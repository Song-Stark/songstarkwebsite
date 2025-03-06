import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import Location from "@/components/Location";
import HomeServices from "@/components/HomeServices";

export default function Home() {
  return (
    <div>
      <main>
        <HomeHero />
        <HomeProjects />
        <HomeServices />
        <Location />
      </main>
    </div>
  );
}
