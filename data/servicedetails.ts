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
        description?: string;
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
          bg: "bg-blue-50",
          description: "Create intuitive, visually appealing interfaces that enhance user experience and drive engagement."
        },
        {
          title: "Web Application Development",
          icon: "FaLaptopCode",
          bg: "bg-green-50",
          description: "Build powerful, responsive web applications using modern frameworks and technologies."
        },
        {
          title: "Mobile App Development (iOS & Android)",
          icon: "FaMobileAlt",
          bg: "bg-purple-50",
          description: "Develop native and cross-platform mobile apps that deliver seamless user experiences across iOS and Android devices."
        },
        {
          title: "Consultation and Digital strategy",
          icon: "MdOutlineBusinessCenter",
          bg: "bg-yellow-50",
          description: "Provide expert guidance on digital transformation strategies, market trends, and technology solutions."
        },
        {
          title: "Web Analytics and Reporting",
          icon: "FaChartBar",
          bg: "bg-red-50",
          description: "Track and analyze website performance, user engagement, and business metrics to inform strategic decisions."
        },
        {
          title: "24/7 Technical support and Maintenance",
          icon: "BiSupport",
          bg: "bg-indigo-50",
          description: "Ensure your technology infrastructure runs smoothly and efficiently, with round-the-clock support and regular maintenance."
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
          bg: "bg-blue-50",
          description: "We offer customized tour packages to suit your interests and preferences in Rwanda, Uganda, Tanzania, and the rest of Africa."
        },
        {
          title: "Customized Tour Itineraries",
          icon: "FaRoute",
          bg: "bg-green-50",
          description: "Create personalized itineraries that align with your schedule and preferences."
        },
        {
          title: "Activities and Events",
          icon: "FaCalendarAlt",
          bg: "bg-purple-50",
          description: "We offer a wide range of activities and events to keep you entertained and engaged."
        },
        {
          title: "Destinations",
          icon: "FaMapMarkedAlt",
          bg: "bg-yellow-50",
          description: "We offer a wide range of destinations to suit your needs and preferences."
        },
        {
          title: "Accommodation Booking",
          icon: "FaHotel",
          bg: "bg-red-50",
          description: "We offer a wide range of accommodation options to suit your needs and preferences."
        },
        {
          title: "Transportation Services",
          icon: "FaCar",
          bg: "bg-indigo-50",
          description: "We offer a wide range of transportation services to suit your needs and preferences."
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
          bg: "bg-pink-50",
          description: "We offer a wide range of premium Korean skincare products to suit your needs and preferences."
        },
        {
          title: "Authentic K-Beauty Products",
          icon: "BsBoxSeam",
          bg: "bg-purple-50",
          description: "We offer a wide range of authentic K-beauty products to suit your needs and preferences."
        },
        {
          title: "Personalized Beauty Consultation",
          icon: "FaRegComments",
          bg: "bg-blue-50",
          description: "We offer a wide range of personalized beauty consultation services to suit your needs and preferences."
        },
        {
          title: "Direct Shipping from Korea",
          icon: "FaShippingFast",
          bg: "bg-green-50",
          description: "We offer a wide range of direct shipping services from Korea to Rwanda."
        },
        {
          title: "Product Education",
          icon: "FaBook",
          bg: "bg-yellow-50",
          description: "We offer a wide range of product education services to suit your needs and preferences."
        },
        {
          title: "Beauty Workshops",
          icon: "GiMakeup",
          bg: "bg-red-50",
          description: "We offer a wide range of beauty workshops to suit your needs and preferences."
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
      description: "K-realty is a dynamic Real Estate company that provides a wide range of real estate services in Rwanda. We offer a holistic approach to real estate, from brokerage services that connect buyers and sellers to a robust management system.",
      longDescription: [
        "K-realty is dynamic and ever-evolving. We offer a holistic approach to real estate, from brokerage services that connect buyers and sellers to a robust management system.",
        "Our management solutions are designed to enhance property value, ensuring that property owners get the best returns on their investments.",
        "We are committed to providing the best real estate services to our clients through our comprehensive suite of offerings."
      ],
      features: [
        {
          title: "Property Sales & Purchases",
          icon: "FaHome",
          bg: "bg-blue-50",
          description: "Connect with qualified buyers and explore our curated selection of properties for sale. Our expert agents will guide you through every step of the transaction process."
        },
        {
          title: "Property Management",
          icon: "FaBuilding",
          bg: "bg-green-50",
          description: "Our robust management solutions are designed to enhance property value, ensuring owners get the best returns on their investments with minimal hassle."
        },
        {
          title: "Property Rentals",
          icon: "FaKey",
          bg: "bg-purple-50",
          description: "Find your ideal rental property or let us manage your property rentals with professional tenant screening, maintenance coordination, and rent collection."
        },
        {
          title: "Property Valuation",
          icon: "FaCalculator",
          bg: "bg-yellow-50",
          description: "Get accurate property valuation services based on extensive market analysis, property condition assessment, and location factors to determine fair market value."
        },
        {
          title: "Property Development",
          icon: "FaTools",
          bg: "bg-red-50",
          description: "Transform your investment with our property development services, from conceptualization to completion, ensuring maximum value and appeal."
        },
        {
          title: "Landlord Registration",
          icon: "FaUserTie",
          bg: "bg-indigo-50",
          description: "Landlords with properties for rent or sale can register with us to connect with the K-Realty team and benefit from our comprehensive marketing and management services."
        }
      ],
      visual: "/images/services/real-estate.jpg",
      website: "https://www.k-realtyrwanda.com/",
      statistics: [
        { label: "Properties", value: "100+" },
        { label: "Happy Clients", value: "100%" }
      ],
      whyChooseUs: [
        {
          icon: "expertise",
          title: "Market Expertise",
          description: "Our team possesses in-depth knowledge of the Rwandan real estate market and trends."
        },
        {
          icon: "service",
          title: "Client-Centered Approach",
          description: "We prioritize your needs and preferences to deliver personalized real estate solutions."
        },
        {
          icon: "integrity",
          title: "Transparent Operations",
          description: "We maintain open communication and honest practices throughout all transactions."
        },
        {
          icon: "network",
          title: "Extensive Network",
          description: "Our wide network of properties and clients ensures you find exactly what you're looking for."
        }
      ]
    },
    "art-gallery": {
      id: "art-gallery",
      title: "Art Gallery",
      heroTitle: "Gallery Connected to Art Information Platform",
      description: "Song & Stark Gallery is a special space introducing contemporary art from Asia and Africa. We support artists' creative activities and provide new investment opportunities for art collectors.",
      longDescription: [
        "Through our connection with the art information platform, we objectively analyze the value and marketability of artworks, providing reliable information to investors.",
        "We create bridges between Asian and African contemporary art, supporting emerging talents and providing investment consulting services to collectors worldwide."
      ],
      features: [
        {
          title: "Exhibition of Asian Contemporary Art",
          icon: "FaPaintBrush",
          bg: "bg-blue-50",
          description: "Discover exceptional artworks at Stark Gallery, the hub of Asian contemporary art with curated exhibitions showcasing established and emerging talent."
        },
        {
          title: "Discovery of Emerging African Artists",
          icon: "FaUserAlt",
          bg: "bg-green-50",
          description: "Find new investment opportunities at our specialized art marketplace for promising African artists, connecting collectors with unique artistic voices."
        },
        {
          title: "Art Investment Consulting",
          icon: "FaChartLine",
          bg: "bg-purple-50",
          description: "Receive expert guidance on art investments with our specialized consulting services that help you build a valuable collection with confidence."
        },
        {
          title: "AI-Powered Art Information Platform",
          icon: "FaGlobe",
          bg: "bg-yellow-50",
          description: "Access ArtOcean, our platform that provides real-time artwork and artist information, and analyzes art market trends with AI technology."
        },
        {
          title: "Global Art Network & Partner Galleries",
          icon: "FaRegComments",
          bg: "bg-red-50",
          description: "Benefit from our extensive network of partner galleries and art institutions across the globe, expanding your reach and opportunities."
        },
        {
          title: "Worldwide Shipping & Art Handling",
          icon: "FaShippingFast",
          bg: "bg-indigo-50",
          description: "Trust our professional art handling and international shipping services to deliver your precious artworks safely anywhere in the world."
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
      whyChooseUs: [
        {
          icon: "expertise",
          title: "Art Expertise",
          description: "Our team of curators and art specialists brings deep knowledge of Asian and African contemporary art."
        },
        {
          icon: "innovation",
          title: "Technology Integration",
          description: "We combine art appreciation with cutting-edge data analysis for informed investment decisions."
        },
        {
          icon: "quality",
          title: "Artwork Authentication",
          description: "Rigorous verification processes ensure the authenticity and provenance of all artworks."
        },
        {
          icon: "support",
          title: "Collector Support",
          description: "Personalized guidance for collectors at every stage of their art investment journey."
        }
      ]
    }
  };