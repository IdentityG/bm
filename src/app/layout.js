import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import Footer from "@/components/ui/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "B&M Electro-Mechanical | Professional Electrical & Security Solutions",
  description: "Leading electro-mechanical company in Ethiopia specializing in CCTV installation, mega electric projects, road lighting, and advanced electrical solutions.",
  keywords: "electro-mechanical, CCTV installation, electrical projects, road lighting, Ethiopia, security systems",
  authors: [{ name: "B&M Electro-Mechanical" }],
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-inter antialiased bg-white text-dark-charcoal overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
