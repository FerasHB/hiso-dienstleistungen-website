"use client";

import { motion } from "framer-motion";
import { Phone, ClipboardCheck, ShieldCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Kontakt & Analyse",
    description: "In einem ersten vertraulichen Gespräch analysieren wir Ihre spezifische Gefährdungslage und Ihre Anforderungen.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Sicherheitskonzept",
    description: "Unsere Experten entwickeln ein maßgeschneidertes Schutzkonzept, das personelle und technische Maßnahmen optimal kombiniert.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Implementierung",
    description: "Nahtlose und diskrete Integration unserer Sicherheitskräfte in Ihre Abläufe für sofortigen, kompromisslosen Schutz.",
    icon: ShieldCheck,
  },
];

export default function SecurityProcess() {
  return (
    <section className="py-32 bg-brand-dark/95 relative z-10">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
          >
            Unser Ansatz für <span className="text-brand-primary">Ihre Sicherheit.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-gray/90 text-lg font-light leading-relaxed"
          >
            Ein strukturierter und transparenter Prozess stellt sicher, dass wir Bedrohungen erkennen, bevor sie entstehen.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* Connector Line (Desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] bg-white/10 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/0 via-brand-primary/50 to-brand-primary/0" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-brand-dark border-2 border-white/10 rounded-2xl flex items-center justify-center mb-8 relative shadow-xl z-10 group-hover:border-brand-primary/50 transition-colors">
                  <div className="absolute inset-0 bg-brand-primary/10 rounded-2xl blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                
                <div className="text-sm font-bold text-brand-primary mb-3 tracking-widest uppercase">
                  Schritt {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-brand-gray/80 leading-relaxed font-light">
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
