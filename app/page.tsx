import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import Location from "@/components/Location";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <main>
        <HomeHero />
        <HomeProjects />
        <Services />
        <Location />
      </main>
    </div>
  );
}
