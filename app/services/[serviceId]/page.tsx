import { Suspense } from 'react';
import ServiceClient from "@/components/services/ServiceClient";
import { services } from "@/data/servicedetails";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - Song & Stark",
  description: "Explore our art gallery services.",
};

interface ServicePageProps {
  params: Promise<{
    serviceId: string;
  }>;
}

async function validateService(serviceId: string) {
  if (!services[serviceId]) {
    throw new Error(`Service ${serviceId} not found`);
  }
  return serviceId;
}

export default async function ServicePage({ params }: ServicePageProps) {
  const resolvedParams = await Promise.resolve(params);
  const validatedServiceId = await validateService(resolvedParams.serviceId);
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ServiceClient serviceId={validatedServiceId} />
    </Suspense>
  );
} 