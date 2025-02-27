import HomeHero from "@/components/HomeHero";
import HomeProjects from "@/components/HomeProjects";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import Location from "@/components/Location";
import OurImpact from "@/components/OurImpact";

export default function Home() {
  return (
    <div >
        <main >
        <Header />
        <HomeHero />
        <HomeProjects />
        <OurImpact />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
