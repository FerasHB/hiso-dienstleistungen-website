import { Metadata } from 'next';
import Hero from "@/components/sicherheit/Hero";
import Services from "@/components/sicherheit/Services";
import TrustStats from "@/components/sicherheit/TrustStats";
import Process from "@/components/sicherheit/Process";
import EmergencyCTA from "@/components/sicherheit/EmergencyCTA";

export const metadata: Metadata = {
  title: 'Kompromisslose Sicherheitdienstleistungen | Hiso',
  description: 'Zertifizierter Sicherheitsdienstleister für den B2B-Sektor. Objektschutz, Baustellenbewachung, Event-Security und Revierdienst. 24/7 Einsatzbereit.',
};

export default function SicherheitPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-dark">
      <Hero />
      <TrustStats />
      <Services />
      <Process />
      <EmergencyCTA />
    </div>
  );
}
