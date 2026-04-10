"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Users, MapPin } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "objektschutz",
    title: "Objektschutz",
    description: "Lückenlose Überwachung und Schutz für Immobilien, Firmengebäude und sensible Anlagen. Präventiv und reaktiv.",
    icon: ShieldCheck,
    features: ["Zutrittskontrollen", "Rundgänge", "Schlüsselverwaltung"],
    delay: 0.1,
  },
  {
    id: "baustellenbewachung",
    title: "Baustellenbewachung",
    description: "Sicherung Ihrer Baustelle vor Diebstahl, Vandalismus und Sabotage, insbesondere außerhalb der Arbeitszeiten.",
    icon: HardHat,
    features: ["Materialschutz", "Zufahrtskontrolle", "Patrouillen"],
    delay: 0.2,
  },
  {
    id: "event-security",
    title: "Event-Security",
    description: "Professioneller Schutz für Veranstaltungen jeder Größenordnung. Unauffällig, souverän und absolut zuverlässig.",
    icon: Users,
    features: ["Einlasskontrolle", "VIP-Betreuung", "Crowd Management"],
    delay: 0.3,
  },
  {
    id: "revierdienst",
    title: "Revierdienst",
    description: "Mobile Sicherheitsstreifen mit flexiblen Kontrollzeiten zur Abschreckung und schnellen Intervention bei Alarmen.",
    icon: MapPin,
    features: ["Schließdienste", "Alarmverfolgung", "Zustandskontrollen"],
    delay: 0.4,
  },
];

export default function SecurityServices() {
  return (
    <section className="py-24 bg-brand-dark/50 border-b border-brand-border/50 relative">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Spezialisierte <span className="text-brand-primary">Sicherheitsdienste</span>
          </h2>
          <p className="text-brand-gray text-lg">
            Wir bieten ganzheitliche Sicherheitslösungen, die exakt auf die spezifischen Anforderungen Ihrer Branche und Situation zugeschnitten sind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay }}
                className="group relative bg-[#121A33] border border-brand-border rounded-2xl p-8 hover:border-brand-primary/50 transition-colors"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-brand-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-brand-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-brand-gray mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="mb-8 space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-brand-light/80">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/kontakt" 
                    className="inline-flex items-center text-brand-primary font-medium hover:text-blue-400 transition-colors"
                  >
                    Details anfragen
                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
