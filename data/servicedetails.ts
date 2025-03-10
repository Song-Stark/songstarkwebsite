export interface ServiceDetails {
    id: string;
    title: string;
    description: string;
    longDescription: string[];
    features: string[];
    visual: string;
    website?: string;
    whyChooseUs?: {
      icon: string;
      title: string;
      description: string;
    }[];
    portfolio?: {
      title: string;
      year: number;
      description: string;
      client: string;
      purpose: string;
      beneficiaries: string;
      functionality: string[];
      image: string;
      link: string;
    }[];
  }
  
  export const services: Record<string, ServiceDetails> = {
    "it-solutions": {
      id: "it-solutions",
      title: "IT Services",
      description: "End-to-end digital transformation solutions including custom software development, cloud services, and strategic IT consulting to drive your business forward.",
      longDescription: [
        "Our IT services division specializes in delivering cutting-edge digital solutions that help businesses thrive in the modern digital landscape.",
        "We combine technical expertise with creative problem-solving to build custom software applications that perfectly match your business requirements.",
        "With a team of experienced developers, designers, and IT consultants, we offer comprehensive technology solutions that scale with your business.",
        "From startups to enterprises, we've helped numerous organizations streamline their operations, enhance customer experience, and achieve digital excellence."
      ],
      features: [
        "Custom Software Development",
        "Web Application Development",
        "Mobile App Development (iOS & Android)",
        "UI/UX Design & Consulting",
        "Database Design & Management",
        "24/7 Technical Support & Maintenance"
      ],
      visual: "/images/services/it1.jpg",
      whyChooseUs: [
        {
          icon: "expertise",
          title: "Technical Expertise",
          description: "Our team of seasoned developers and designers brings years of industry experience."
        },
        {
          icon: "innovation",
          title: "Innovative Solutions",
          description: "We stay ahead of technology trends to deliver cutting-edge solutions."
        },
        {
          icon: "support",
          title: "24/7 Support",
          description: "Round-the-clock technical support and maintenance for your peace of mind."
        },
        {
          icon: "quality",
          title: "Quality Assurance",
          description: "Rigorous testing and quality control for robust, reliable solutions."
        },
        {
          icon: "time",
          title: "Timely Delivery",
          description: "We respect deadlines and ensure prompt delivery without compromising quality."
        },
        {
          icon: "cost",
          title: "Cost-Effective",
          description: "Competitive pricing with maximum value for your investment."
        }
      ],
      portfolio: [
        {
          title: "Tour services website",
          year: 2023,
          description: "A full-featured online marketplace for local artisans",
          client: "ArtisanMarket Rwanda",
          purpose: "Digitalize traditional craft sales and expand market reach",
          beneficiaries: "Local artisans and craft enthusiasts",
          functionality: [
            "User authentication",
            "Product management",
            "Payment integration",
            "Order tracking",
            "Vendor dashboard"
          ],
          image: "/images/portifloio/tour.png",
          link: "https://songstarktours.com/"
        },
        {
          title: "Art gallery website",
          year: 2023,
          description: "A full-featured online marketplace for local artisans",
          client: "ArtisanMarket Rwanda",
          purpose: "Digitalize traditional craft sales and expand market reach",
          beneficiaries: "Local artisans and craft enthusiasts",
          functionality: [
            "User authentication",
            "Product management",
            "Payment integration",
            "Order tracking",
            "Vendor dashboard"
          ],
          image: "/images/portifloio/art.png",
          link: "https://art4africa.cafe24.com/"
        },
        {
          title: "Real estate company website",
          year: 2023,
          description: "A full-featured online marketplace for local artisans",
          client: "ArtisanMarket Rwanda",
          purpose: "Digitalize traditional craft sales and expand market reach",
          beneficiaries: "Local artisans and craft enthusiasts",
          functionality: [
            "User authentication",
            "Product management",
            "Payment integration",   
          ],
          image: "/images/portifloio/realty.png",
          link: "https://k-realtyrwanda.com/"
        },

        {
          title: "Korean cosmetics website",
          year: 2023,
          description: "Comprehensive hospital management solution",
          client: "Regional Medical Center",
          purpose: "Streamline patient care and hospital operations",
          beneficiaries: "Healthcare providers and patients",
          functionality: [
            "Patient records management",
            "Appointment scheduling",
            "Inventory management",
            "Billing system",
            "Medical reports"
          ],
          image: "/images/portifloio/kmart.png",
          link: "https://www.k-martrwanda.com/"
        },
        {
          title: "Construction company website",
          year: 2022,
          description: "Interactive learning management system",
          client: "National Education Board",
          purpose: "Facilitate remote learning and education management",
          beneficiaries: "Students, teachers, and administrators",
          functionality: [
            "Course management",
            "Virtual classrooms",
            "Assessment tools",
            "Progress tracking",
            "Resource library"
          ],
          image: "/images/portifloio/imce.png",
          link: "https://imceltd.com/"
        },

      ]
    },
    "tours-and-travel": {
      id: "tours-and-travel",
      title: "Tour Services",
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
      website: "https://songstarktours.com/"
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
      website: "https://www.k-martrwanda.com/"
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
      website: "https://www.k-realtyrwanda.com/"
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
      website: "https://art4africa.cafe24.com/"
    }
  };