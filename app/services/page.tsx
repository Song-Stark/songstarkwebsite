import { Metadata } from "next";
import SevicesListing from "@/components/services/SevicesListing";
import Location from "@/components/Location";

export const metadata: Metadata = {
  title: "Services - Song & Stark",
  description: "Explore our services at Song & Stark.",
};

export default function Services() {
    return (
        <main className="min-h-screen">
            <SevicesListing />
            <Location />
        </main>
    )
}