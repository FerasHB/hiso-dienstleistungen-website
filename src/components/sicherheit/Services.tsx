"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HardHat, Users, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "objektschutz",
    title: "Objektschutz",
    description: "Lückenlose Überwachung und Schutz für Immobilien, Firmengebäude und sensible Anlagen. Präventiv und reaktiv.",
    icon: ShieldCheck,
    features: ["Zutrittskontrollen & Empfang", "Regelmäßige Patrouillen", "Schlüsselverwaltung"],
    delay: 0.1,
  },
  {
    id: "baustellenbewachung",
    title: "Baustellenbewachung",
    description: "Sicherung Ihrer Baustelle vor Diebstahl, Vandalismus und schwerer Sabotage, insbesondere außerhalb der Arbeitszeiten.",
    icon: HardHat,
    features: ["Umfassender Materialschutz", "Strenge Zufahrtskontrolle", "Absicherung von Baugeräten"],
    delay: 0.2,
  },
  {
    id: "event-security",
    title: "Event-Security",
    description: "Professioneller Schutz für Veranstaltungen jeder Größenordnung. Unauffällig, souverän und absolut zuverlässig.",
    icon: Users,
    features: ["Digitale Einlasskontrolle", "Diskrete VIP-Betreuung", "Strategisches Crowd Management"],
    delay: 0.3,
  },
  {
    id: "revierdienst",
    title: "Revierdienst",
    description: "Mobile Sicherheitsstreifen mit flexiblen Kontrollzeiten zur Abschreckung und schnellen Intervention bei Alarmen.",
    icon: MapPin,
    features: ["Zertifizierte Schließdienste", "Schnelle Alarmverfolgung", "Lückenlose Zustandskontrollen"],
    delay: 0.4,
  },
];

export default function SecurityServices() {
  return (
    <section className="py-32 bg-brand-dark relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
            >
              Exzellenz in <br />
              <span className="text-brand-primary">allen Bereichen.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-gray/90 text-lg md:text-xl font-light leading-relaxed max-w-xl"
            >
              Wir bieten ganzheitliche Sicherheitslösungen, die exakt auf die spezifischen Anforderungen Ihrer Branche und Situation zugeschnitten sind.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: service.delay, ease: "easeOut" }}
                className="group relative"
              >
                {/* Premium Gradient Border Effect on Hover */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-brand-primary/0 to-blue-500/0 rounded-[2rem] opacity-0 group-hover:from-brand-primary/50 group-hover:to-blue-500/50 group-hover:opacity-100 transition-all duration-500 blur-sm mix-blend-screen" />
                
                <div className="relative h-full bg-white/[0.02] border border-white/[0.05] rounded-[2rem] p-8 lg:p-10 backdrop-blur-md hover:bg-white/[0.04] transition-colors overflow-hidden">
                  
                  {/* Internal Glow on Hover */}
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-brand-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-16 h-16 bg-gradient-to-br from-brand-primary/20 to-brand-primary/5 border border-brand-primary/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                        <Icon className="w-8 h-8 text-brand-primary" />
                      </div>
                      <span className="text-white/10 text-6xl font-black italic select-none">
                        0{services.indexOf(service) + 1}
                      </span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">{service.title}</h3>
                    <p className="text-brand-gray/80 text-lg mb-8 leading-relaxed font-light">
                      {service.description}
                    </p>
                    
                    <div className="flex-grow">
                      <ul className="mb-10 space-y-4">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-brand-light/90 font-medium">
                            <span className="flex-shrink-0 w-2 h-2 rounded-full bg-brand-primary mr-4 shadow-[0_0_8px_rgba(230,57,70,0.8)]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto pt-6 border-t border-white/[0.05]">
                      <Link 
                        href="/kontakt" 
                        className="inline-flex items-center text-white font-semibold hover:text-brand-primary transition-colors group/link"
                      >
                        Sicherheitskonzept anfragen
                        <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover/link:translate-x-1" />
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
