export interface ServiceDetails {
    id: string;
    title: string;
    heroTitle?: string;
    description: string;
    longDescription: string[];
    features: {
        title: string;
        icon: string;
        bg?: string;
    }[];
    visual: string;
    visuals?: string[];
    website?: string;
    statistics?: {
      label: string;
      value: string;
    }[];
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
    packages?: {
      name: string;
      price: string;
      description: string;
      features: string[];
      isRecommended?: boolean;
    }[];
  }
  
  export const services: Record<string, ServiceDetails> = {
    "it-solutions": {
      id: "it-solutions",
      title: "IT Services",
      heroTitle: "Empowering Your Business with Modern IT Solutions",
      description: "At SongStark IT Solutions, we provide comprehensive digital transformation services including custom software development, web and mobile app development, cloud solutions, UI/UX design, database management, and strategic IT consulting. We help you streamline operations, improve efficiency, and achieve long-term growth",
      longDescription: [
        "Our IT services division specializes in delivering cutting-edge digital solutions that help businesses thrive in the modern digital landscape.",
        "We combine technical expertise with creative problem-solving to build custom software applications that perfectly match your business requirements.",
        "With a team of experienced developers, designers, and IT consultants, we offer comprehensive technology solutions that scale with your business.",
        "From startups to enterprises, we've helped numerous organizations streamline their operations, enhance customer experience, and achieve digital excellence."
      ],
      features: [
        {
          title: "UI/UX Design and Consulting",
          icon: "MdDesignServices",
          bg: "bg-blue-50"
        },
        {
          title: "Web Application Development",
          icon: "FaLaptopCode",
          bg: "bg-green-50"
        },
        {
          title: "Mobile App Development (iOS & Android)",
          icon: "FaMobileAlt",
          bg: "bg-purple-50"
        },
        {
          title: "Consultation and Digital strategy",
          icon: "MdOutlineBusinessCenter",
          bg: "bg-yellow-50"
        },
        {
          title: "Web Analytics and Reporting",
          icon: "FaChartBar",
          bg: "bg-red-50"
        },
        {
          title: "24/7 Technical support and Maintenance",
          icon: "BiSupport",
          bg: "bg-indigo-50"
        }
      ],
      visual: "/images/services/it1.jpg",   
      visuals: [
        "/images/services/it1.jpg",
        "/images/services/it2.jpg",
        "/images/services/it3.jpg",
        "/images/services/it4.jpg",
        "/images/services/it5.jpg",
      ],
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
        }
      ],
      statistics: [
        { label: "Projects", value: "50+" },
        { label: "Satisfaction", value: "98%" }
      ],
      packages: [
        {
          name: "Standard",
          price: "300,000",
          description: "Single-page scrolling responsive landing page production includes input forms, social login, admin pages, etc.",
          features: [
            "1 Pages",
            "3 Days Delivery",
            "1 Month Revision",
            "Custom Design",
            "Responsive Web",
            "Basic SEO"
          ]
        },
        {
          name: "Deluxe",
          price: "800,000",
          description: "General corporate responsive website production includes input forms, social login, pop-up management member management statistics, admin pages, etc.",
          features: [
            "7 Pages",
            "7 Days Delivery",
            "3 Month Revision",
            "Custom Design",
            "Responsive Web",
            "Advanced SEO",
            "Member Management",
            "Statistics Dashboard"
          ],
          isRecommended: true
        },
        {
          name: "Premium",
          price: "1,200,000",
          description: "High-end responsive website production includes all Deluxe Package features + admin pages, etc.",
          features: [
            "10 Pages",
            "9 Days Delivery",
            "6 Month Revision",
            "Custom Design",
            "Responsive Web",
            "Premium SEO",
            "Advanced Features",
            "Priority Support"
          ]
        }
      ]
    },
    "tours-and-travel": {
      id: "tours-and-travel",
      title: "Tour Services ",
      heroTitle: "Explore East Africa with SongStark Tours",
      description: "Providing exceptional tour services in Rwanda and Uganda for both locals and internationals.",
      longDescription: [
        "Experience the best of both worlds with our specialized tour services in Rwanda and Uganda.",
        "We create unforgettable journeys that bridge cultures and create lasting memories.",
      ],
      features: [
        {
          title: "Customized Tour Packages",
          icon: "FaSuitcase",
          bg: "bg-blue-50"
        },
        {
          title: "Customized Tour Itineraries",
          icon: "FaRoute",
          bg: "bg-green-50"
        },
        {
          title: "Activities and Events",
          icon: "FaCalendarAlt",
          bg: "bg-purple-50"
        },
        {
          title: "Local Guide Services",
          icon: "FaUserTie",
          bg: "bg-yellow-50"
        },
        {
          title: "Accommodation Booking",
          icon: "FaHotel",
          bg: "bg-red-50"
        },
        {
          title: "Transportation Services",
          icon: "FaCar",
          bg: "bg-indigo-50"
        }
      ],
      visual: "/images/services/tour3.jpg",
      visuals: [
        "/images/services/tour3.jpg",
        "/images/services/tour2.jpg",
        "/images/services/ktour.jpg",
        "/images/services/ktour2.jpeg",
        "/images/services/ktour1.jpeg",
      ],
      website: "https://songstarktours.com/",
      statistics: [
        { label: "Tours", value: "150+" },
        { label: "Happy Clients", value: "95%" }
      ],
    },
    "korean-cosmetics": {
      id: "korean-cosmetics",
      title: "Korean Cosmetics",
      heroTitle: "Shop the best of Korean Beauty with K-MART Rwanda",
      description: "K-MART is an online  Korean cosmetics store that sells Korean cosmetics in Rwanda.",
      longDescription: [
        "Discover the best of Korean beauty with our curated selection of premium cosmetics.",
        "We bridge the gap between Korean beauty innovations and Rwanda, bringing you authentic K-beauty products.",
      ],
      features: [
        {
          title: "Premium Korean Skincare",
          icon: "GiLotion",
          bg: "bg-pink-50"
        },
        {
          title: "Authentic K-Beauty Products",
          icon: "BsBoxSeam",
          bg: "bg-purple-50"
        },
        {
          title: "Personalized Beauty Consultation",
          icon: "FaRegComments",
          bg: "bg-blue-50"
        },
        {
          title: "Direct Shipping from Korea",
          icon: "FaShippingFast",
          bg: "bg-green-50"
        },
        {
          title: "Product Education",
          icon: "FaBook",
          bg: "bg-yellow-50"
        },
        {
          title: "Beauty Workshops",
          icon: "GiMakeup",
          bg: "bg-red-50"
        }
      ],
      visual: "/images/services/cosmetics.jpg",
      website: "https://www.k-martrwanda.com/",
      statistics: [
        { label: "Products", value: "1000+" },
        { label: "Customers", value: "500+" }
      ],
    },
    "real-estate": {
      id: "real-estate",
      title: "Real Estate",
      heroTitle: "Your Trusted Partner in Real Estate K-Realty Rwanda",
      description: "Comprehensive real estate services including property management and buyer-seller connections.",
      longDescription: [
        "Our real estate division offers comprehensive property solutions in Rwanda's growing market.",
        "We connect buyers and sellers while providing professional property management services.",
      ],
      features: [
        {
          title: "Property Sales & Purchases",
          icon: "FaHome",
          bg: "bg-blue-50"
        },
        {
          title: "Property Management",
          icon: "FaBuilding",
          bg: "bg-green-50"
        },
        {
          title: "Investment Consulting",
          icon: "FaChartLine",
          bg: "bg-purple-50"
        },
        {
          title: "Market Analysis",
          icon: "FaSearchDollar",
          bg: "bg-yellow-50"
        },
        {
          title: "Property Valuation",
          icon: "FaCalculator",
          bg: "bg-red-50"
        },
        {
          title: "Legal Support",
          icon: "FaGavel",
          bg: "bg-indigo-50"
        }
      ],
      visual: "/images/services/real-estate.jpg",
      website: "https://www.k-realtyrwanda.com/",
      statistics: [
        { label: "Properties", value: "100+" },
        { label: "Happy Clients", value: "100%" }
      ],
    },
    "art-gallery": {
      id: "art-gallery",
      title: "Art Gallery",
      heroTitle: "A Global Canvas Online Art4Africa Gallery",
      description: "A Global Canvas Online. Paintings. Purchase and sell the best in contemporary art online.",
      longDescription: [
        "Our online art gallery showcases exceptional works from talented artists across the globe.",
        "We provide a platform for artists to reach art enthusiasts and collectors worldwide.",
      ],
      features: [
        {
          title: "Contemporary Art Collection",
          icon: "FaPaintBrush",
          bg: "bg-blue-50"
        },
        {
          title: "Artist Representation",
          icon: "FaUserAlt",
          bg: "bg-green-50"
        },
        {
          title: "Online Exhibitions",
          icon: "FaGlobe",
          bg: "bg-purple-50"
        },
        {
          title: "Art Consulting",
          icon: "FaRegComments",
          bg: "bg-yellow-50"
        },
        {
          title: "Custom Framing",
          icon: "FaImage",
          bg: "bg-red-50"
        },
        {
          title: "Worldwide Shipping",
          icon: "FaShippingFast",
          bg: "bg-indigo-50"
        }
      ],
      visual: "/images/services/art3.jpg",
      visuals: [
        "/images/services/k-art3.jpg",
        "/images/services/k-art1.jpg",
        "/images/services/k-art2.jpg",
        "/images/services/k-art4.jpg",
        "/images/services/k-art5.jpg",
      ],
      website: "https://art4africa.cafe24.com/",
      statistics: [
        { label: "Artworks", value: "300+" },
        { label: "Artists", value: "50+" }
      ],
    }
  };