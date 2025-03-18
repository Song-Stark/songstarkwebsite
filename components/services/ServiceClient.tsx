import Navigation from './Navigation';
import Hero from './Hero';
import Features from './Features';
import WhyChooseUs from './WhyChooseUs';
import Portfolio from './Portfolio';
import Packages from './Packages';
import CTA from './CTA';
import { services } from "@/data/servicedetails";


interface ServiceClientProps {
  serviceId: string;
}

export default function ServiceClient({ serviceId }: ServiceClientProps) {
  const service = services[serviceId];
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl font-bold text-gray-800">Service not found</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Navigation serviceId={serviceId} />
      
      <Hero 
        title={service.title}
        heroTitle={service.heroTitle || service.title}
        description={service.description}
        visual={service.visual}
        visuals={service.visuals}
        website={service.website}
        statistics={service.statistics}
      />

      <Features features={service.features} />
      {service.packages && (
        <Packages packages={service.packages} />
      )}
{service.whyChooseUs && (
        <WhyChooseUs items={service.whyChooseUs} />
      )}
      {service.portfolio && service.portfolio.length > 0 && (
        <Portfolio items={service.portfolio} />
      )}

      <CTA serviceTitle={service.title} />
    </main>
  );
}
