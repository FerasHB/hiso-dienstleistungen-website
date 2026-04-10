import Link from "next/link";
import { Shield } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-brand-primary p-2 rounded-lg text-white transition-transform group-hover:scale-105">
            <Shield size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            HISO<span className="text-brand-gray-light">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-brand-light/80">
          <Link href="/sicherheit" className="hover:text-white transition-colors">Sicherheit</Link>
          <Link href="/baudienstleistungen" className="hover:text-white transition-colors">Bau & Service</Link>
          <Link href="/unternehmen" className="hover:text-white transition-colors">Unternehmen</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link 
            href="/kontakt" 
            className="hidden md:flex items-center justify-center px-5 py-2.5 text-sm font-semibold bg-brand-primary text-white rounded-md hover:bg-brand-primary-hover transition-colors shadow-lg shadow-brand-primary/20"
          >
            Kontaktanfrage
          </Link>
        </div>
      </div>
    </header>
  );
}
