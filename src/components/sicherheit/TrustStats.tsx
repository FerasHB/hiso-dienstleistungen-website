"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Award, Users } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "15+",
    label: "Jahre Erfahrung",
    description: "Branchenexpertise",
    icon: Award,
  },
  {
    id: 2,
    value: "24/7",
    label: "Einsatzbereit",
    description: "Rund um die Uhr",
    icon: Clock,
  },
  {
    id: 3,
    value: "100%",
    label: "Diskretion",
    description: "Garantiertes Vertrauen",
    icon: Shield,
  },
  {
    id: 4,
    value: "500+",
    label: "Einsätze",
    description: "Erfolgreich abgeschlossen",
    icon: Users,
  },
];

export default function TrustStats() {
  return (
    <section className="py-20 bg-[#0F1629] border-y border-white/5 relative z-10 overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-primary/10 via-transparent to-transparent"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4"
              >
                <div className="mb-4 p-3 bg-white/5 rounded-2xl">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-2 tracking-tighter">
                  {stat.value}
                </div>
                <div className="text-lg font-bold text-brand-light mb-1">{stat.label}</div>
                <div className="text-sm font-medium text-brand-gray/60 uppercase tracking-wider">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
