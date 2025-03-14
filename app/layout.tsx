import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/images/siteicon.ico',
        sizes: 'any',
      },
    ],
    shortcut: '/images/siteicon.ico',
    apple: '/images/siteicon.ico',
  },
  title: "Song & Stark coopeartion Rwanda",
  description: "Song&Stark Cooperation Rwanda is your partner operating in areas such as logistics, human resources, tourism, and real estate, with the goal of connecting Rwanda with the world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
      <body className="font-poppins">
        <div className="flex flex-col min-h-screen w-screen md:w-full overflow-x-hidden">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
