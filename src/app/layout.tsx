import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HISO Dienstleistungen | Maßgeschneiderte Sicherheit & Service",
  description: "Verlässlicher Objektschutz, Baustellenbewachung und Gebäudeservice aus Expertenhand.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} min-h-screen bg-brand-dark text-brand-light antialiased selection:bg-brand-primary selection:text-white`}
    >
      <body className="min-h-screen flex flex-col pt-20">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
