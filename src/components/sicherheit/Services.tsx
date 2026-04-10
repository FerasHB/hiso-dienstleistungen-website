"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Users, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "objektschutz",
    title: "Werks- & Objektschutz",
    description: "Physische Präsenz und lückenlose Überwachung für Industrie-, Gewerbe- und kritische High-Risk Objekte.",
    icon: ShieldCheck,
    features: ["Zutrittskontrollen & Pfortendienst", "Regelmäßige Patrouillen (Tag/Nacht)", "Schlüssel- & Ausweismanagement"],
    delay: 0.1,
  },
  {
    id: "baustellenbewachung",
    title: "Baustellenbewachung",
    description: "Sicherung komplexer Bauvorhaben vor Materialdiebstahl, Vandalismus und Sabotage zur Wahrung kritischer Bauzeiten.",
    icon: HardHat,
    features: ["Umfassender Rohbau-Materialschutz", "Strenge Zufahrts- & Logistikkontrolle", "Absicherung schwerer Baugeräte"],
    delay: 0.2,
  },
  {
    id: "event-security",
    title: "Event- & Crowd Control",
    description: "Taktische Sicherung von Großveranstaltungen und B2B-Events durch geschultes, souveränes Einsatzpersonal.",
    icon: Users,
    features: ["Professionelles Crowd Management", "Diskrete VIP- & Backstage-Security", "Sicherheits- & Evakuierungskonzepte"],
    delay: 0.3,
  },
  {
    id: "revierdienst",
    title: "Revier- & Interventionsdienst",
    description: "Mobile Streifen und Alarmverfolgung. Schnelle Intervention bei Vorfällen im direkten Austausch mit Behörden.",
    icon: MapPin,
    features: ["Zertifizierter Schließdienst", "Schnelle Alarmaufschaltung", "GPS-getrackte Rundgänge"],
    delay: 0.4,
  },
];

export default function SecurityServices() {
  return (
    <section className="py-32 bg-brand-dark relative z-10 border-b border-white/5">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase"
            >
              Unsere operativen <br />
              <span className="text-brand-primary">Einsatzschwerpunkte</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-gray/90 text-lg md:text-xl font-normal leading-relaxed max-w-xl"
            >
              Taktische Sicherheitslösungen, exakt zugeschnitten auf die spezifischen Gefährdungslagen lhrer Branche.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: service.delay, ease: "easeOut" }}
                className="group relative"
              >
                <div className="relative h-full bg-[#1A1A1A] border border-white/10 p-8 lg:p-10 hover:border-brand-primary transition-colors overflow-hidden rounded-sm">
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8 pb-6 border-b border-white/5">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm text-brand-primary">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{service.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-brand-gray/90 text-lg mb-8 leading-relaxed font-normal">
                      {service.description}
                    </p>
                    
                    <div className="flex-grow">
                      <ul className="mb-10 space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-white/80 font-medium">
                            <span className="flex-shrink-0 w-1.5 h-1.5 bg-brand-primary mr-4 rounded-sm" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/10">
                      <Link 
                        href="/kontakt" 
                        className="inline-flex items-center text-brand-primary font-bold hover:text-white transition-colors uppercase tracking-wider text-sm group/link"
                      >
                        Operatives Konzept anfragen
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/link:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
