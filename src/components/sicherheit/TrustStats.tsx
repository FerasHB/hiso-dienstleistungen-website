"use client";

import { motion } from "framer-motion";
import { Clock, CheckCircle, Shield, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    value: "< 30 Min.",
    label: "Ø Reaktionszeit",
    description: "Garantierte Intervention",
    icon: Clock,
  },
  {
    id: 2,
    value: "100%",
    label: "Fachpersonal",
    description: "Nach §34a GewO geschult",
    icon: CheckCircle,
  },
  {
    id: 3,
    value: "24/7",
    label: "Leitstelle",
    description: "Ständige Erreichbarkeit",
    icon: Shield,
  },
  {
    id: 4,
    value: "0.0%",
    label: "Durchbrüche",
    description: "Bei gesicherten Objekten",
    icon: Award,
  },
];

export default function TrustStats() {
  return (
    <section className="py-16 bg-[#0A0D14] border-y border-white/10 relative z-10">
      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 py-6 md:py-0"
              >
                <div className="mb-4">
                  <Icon className="w-8 h-8 text-brand-primary" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-base font-bold text-white uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="text-sm font-medium text-brand-gray/70">{stat.description}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
