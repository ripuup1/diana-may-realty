import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Diana May REALTOR® | HomeTowne Realty | Clayton NC Real Estate",
  description:
    "Diana May is a dedicated listing specialist with HomeTowne Realty serving the Triangle Area in North Carolina. Buy, sell, rent or find commercial space with expert guidance.",
  keywords:
    "Diana May, REALTOR, HomeTowne Realty, Clayton NC, real estate, Triangle Area, North Carolina, listing specialist, homes for sale",
  openGraph: {
    title: "Diana May REALTOR® | HomeTowne Realty",
    description:
      "Dedicated listing specialist serving the Triangle Area in North Carolina.",
    images: ["/images/diana-hero-1.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${raleway.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-warm-gold focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
