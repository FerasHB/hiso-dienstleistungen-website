import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-onyx border-t border-brand-border py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          <div className="md:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <Shield className="text-brand-primary" size={28} />
              <span className="text-2xl font-bold tracking-tight text-white">HISO.</span>
            </Link>
            <p className="text-brand-gray text-sm max-w-sm leading-relaxed">
              Wir übernehmen die Kontrolle, damit Sie sich auf Ihr Kerngeschäft konzentrieren können. Maßgeschneiderte Sicherheits- und operative Dienstleistungen.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-2 text-brand-primary text-sm font-semibold hover:text-brand-primary-hover group">
              Jetzt Kontakt aufnehmen
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm">Leistungen</h4>
            <ul className="space-y-3 shrink-0 text-sm text-brand-gray">
              <li><Link href="/sicherheit" className="hover:text-white transition-colors">Objektschutz</Link></li>
              <li><Link href="/sicherheit" className="hover:text-white transition-colors">Baustellenbewachung</Link></li>
              <li><Link href="/baudienstleistungen" className="hover:text-white transition-colors">Gebäudereinigung</Link></li>
              <li><Link href="/baudienstleistungen" className="hover:text-white transition-colors">Entrümpelung</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-4">
            <h4 className="text-white font-semibold text-sm">Unternehmen</h4>
            <ul className="space-y-3 text-sm text-brand-gray">
              <li><Link href="/unternehmen" className="hover:text-white transition-colors">Über uns</Link></li>
              <li><Link href="/unternehmen" className="hover:text-white transition-colors">Zertifikate</Link></li>
              <li><Link href="/kontakt" className="hover:text-white transition-colors">Karriere</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="text-white font-semibold text-sm">Kontakt</h4>
            <div className="space-y-2 text-sm text-brand-gray">
              <p>Hiso Dienstleistungen</p>
              <p>Musterstraße 1</p>
              <p>12345 Musterstadt</p>
              <p className="pt-2">Tel: <a href="tel:+4917645791873" className="text-white hover:text-brand-primary">0176 45 79 18 73</a></p>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-brand-gray">
          <p>© {new Date().getFullYear()} Hiso Dienstleistungen. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white">Datenschutz</Link>
            <Link href="/agb" className="hover:text-white">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
