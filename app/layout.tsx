import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: "/images/siteicon.ico",
        sizes: "any",
      },
    ],
    shortcut: "/images/siteicon.ico",
    apple: "/images/siteicon.ico",
  },
  title:
    "Song & Stark Cooperation Rwanda - IT Solutions, Tourism, Cosmetics & Real Estate",
  description:
    "Song & Stark Cooperation Rwanda is your premier partner for IT solutions, tourism services, Korean cosmetics online shopping, art gallery exhibitions, and real estate services. Connecting Rwanda with the world through innovative business solutions.",
  keywords: [
    "Song & Stark Rwanda",
    "IT solutions Rwanda",
    "tourism services Rwanda",
    "Korean cosmetics Rwanda",
    "art gallery Rwanda",
    "real estate Rwanda",
    "business solutions Rwanda",
    "technology services Rwanda",
    "digital solutions Rwanda",
    "Rwanda business partner",
  ],
  authors: [{ name: "Song & Stark Cooperation Rwanda" }],
  creator: "Song & Stark Cooperation Rwanda",
  publisher: "Song & Stark Cooperation Rwanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rwanda.songstark.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Song & Stark Cooperation Rwanda - IT Solutions, Tourism, Cosmetics & Real Estate",
    description:
      "Song & Stark Cooperation Rwanda is your premier partner for IT solutions, tourism services, Korean cosmetics online shopping, art gallery exhibitions, and real estate services. Connecting Rwanda with the world through innovative business solutions.",
    url: "https://rwanda.songstark.com",
    siteName: "Song & Stark Cooperation Rwanda",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Song & Stark Cooperation Rwanda Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Song & Stark Cooperation Rwanda - IT Solutions, Tourism, Cosmetics & Real Estate",
    description:
      "Song & Stark Cooperation Rwanda is your premier partner for IT solutions, tourism services, Korean cosmetics online shopping, art gallery exhibitions, and real estate services.",
    images: ["/images/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual Google Search Console verification code
  },
  category: "business",
  classification: "business",
  other: {
    "geo.region": "RW",
    "geo.placename": "Rwanda",
    "geo.position": "-1.9441;30.0619",
    ICBM: "-1.9441, 30.0619",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
    >
      <body className="font-poppins">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          className="z-50"
        />
        <div className="flex flex-col min-h-screen w-screen md:w-full overflow-x-hidden">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
          <a
            href="https://wa.me/+250782892433"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-green-500 rounded-full w-14 h-14 flex items-center justify-center shadow-xl hover:bg-green-600 transition-colors z-50"
            aria-label="Chat on WhatsApp"
          >
            <FontAwesomeIcon
              icon={faWhatsapp}
              className="text-white text-2xl"
            />
          </a>
        </div>
      </body>
    </html>
  );
}
