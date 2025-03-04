export interface ServiceDetails {
    id: string;
    title: string;
    description: string;
    longDescription: string[];
    features: string[];
    visual: string;
    website?: string;
  }
  
  export const services: Record<string, ServiceDetails> = {
    "it-solutions": {
      id: "it-solutions",
      title: "IT Services",
      description: "Custom software development, web applications, and digital solutions tailored to your business needs.",
      longDescription: [
        "Our IT services division specializes in delivering cutting-edge digital solutions that help businesses thrive in the modern digital landscape.",
        "We combine technical expertise with creative problem-solving to build custom software applications that perfectly match your business requirements.",
      ],
      features: [
        "Web Design and Development",
        "UI/UX Design ",
        "Mobile App Development",
        "wordpress expertise",
        "IT Outsourcing",
        "Technical Support & Maintenance"
      ],
      visual: "/images/services/it1.jpg",
      website: "https://tech.songstark.com"
    },
    "tours-and-travel": {
      id: "tours-and-travel",
      title: "Tours & Travel",
      description: "Providing exceptional tour services in Rwanda and Uganda for both locals and internationals.",
      longDescription: [
        "Experience the best of both worlds with our specialized tour services in Rwanda and Uganda.",
        "We create unforgettable journeys that bridge cultures and create lasting memories.",
      ],
      features: [
        "Customized Tour Packages",
        "Customized Tour Itineraries",
        "Activities and Events",
        "Local Guide Services",
        "Accommodation Booking",
        "Transportation Services"
      ],
      visual: "/images/services/tour3.jpg",
      website: "https://travel.songstark.com"
    },
    "korean-cosmetics": {
      id: "korean-cosmetics",
      title: "Korean Cosmetics",
      description: "K-MART is an online  Korean cosmetics store that sells Korean cosmetics in Rwanda.",
      longDescription: [
        "Discover the best of Korean beauty with our curated selection of premium cosmetics.",
        "We bridge the gap between Korean beauty innovations and Rwanda, bringing you authentic K-beauty products.",
      ],
      features: [
        "Premium Korean Skincare",
        "Authentic K-Beauty Products",
        "Personalized Beauty Consultation",
        "Direct Shipping from Korea",
        "Product Education",
        "Beauty Workshops"
      ],
      visual: "/images/services/cosmetics.jpg",
      website: "https://beauty.songstark.com"
    },
    "real-estate": {
      id: "real-estate",
      title: "Real Estate",
      description: "Comprehensive real estate services including property management and buyer-seller connections.",
      longDescription: [
        "Our real estate division offers comprehensive property solutions in Rwanda's growing market.",
        "We connect buyers and sellers while providing professional property management services.",
      ],
      features: [
        "Property Sales & Purchases",
        "Property Management",
        "Investment Consulting",
        "Market Analysis",
        "Property Valuation",
        "Legal Support"
      ],
      visual: "/images/services/real-estate.jpg",
      website: "https://realty.songstark.com"
    },
    "art-gallery": {
      id: "art-gallery",
      title: "Art Gallery",
      description: "A Global Canvas Online. Paintings. Purchase and sell the best in contemporary art online.",
      longDescription: [
        "Our online art gallery showcases exceptional works from talented artists across the globe.",
        "We provide a platform for artists to reach art enthusiasts and collectors worldwide.",
      ],
      features: [
        "Contemporary Art Collection",
        "Artist Representation",
        "Online Exhibitions",
        "Art Consulting",
        "Custom Framing",
        "Worldwide Shipping"
      ],
      visual: "/images/services/art3.jpg",
      website: "https://art.songstark.com"
    }
  };