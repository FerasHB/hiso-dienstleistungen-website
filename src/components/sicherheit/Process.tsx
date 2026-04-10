"use client";

import { motion } from "framer-motion";
import { Radar, ClipboardCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Vor-Ort-Gefährdungsbeurteilung",
    description: "Unsere Experten analysieren kritische Schwachstellen direkt an Ihrem Objekt und identifizieren alle potenziellen Risikofaktoren.",
    icon: Radar,
  },
  {
    number: "02",
    title: "Ressourcen- & Personalplanung",
    description: "Erstellung eines fundierten, taktischen Maßnahmenkatalogs inklusive Revierplanung und technischer Ergänzungen.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Operative Ausführung & Monitoring",
    description: "Nahtlose Übernahme durch geschultes Personal. Ab Stunde 1 direkte Anbindung an unsere 24/7 Leitstelle für lückenlosen Schutz.",
    icon: ShieldCheck,
  },
];

export default function SecurityProcess() {
  return (
    <section className="py-24 bg-[#0A0D14] relative z-10 border-b border-white/5">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight uppercase"
          >
            Operativer <span className="text-brand-primary">Workflow</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray/90 text-lg font-normal leading-relaxed"
          >
            Keine Überraschungen, keine Lücken. Ein streng reglementierter Prozess garantiert maximale Verlässlichkeit und reaktionsschnelle Schutzmaßnahmen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[2.5rem] left-[15%] right-[20%] h-[2px] bg-white/10 z-0 border-t-2 border-dashed border-white/20"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col bg-[#1A1A1A] border border-white/10 p-8 rounded-sm"
              >
                <div className="w-16 h-16 bg-brand-dark border border-brand-primary/50 text-brand-primary rounded-sm flex items-center justify-center mb-8 relative z-10">
                  <Icon className="w-7 h-7" />
                </div>
                
                <div className="text-sm font-bold text-brand-primary mb-3 tracking-widest uppercase">
                  Phase {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 pr-4 leading-tight">{step.title}</h3>
                <p className="text-brand-gray/80 leading-relaxed font-normal">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
