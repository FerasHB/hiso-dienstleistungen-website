"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40 border-b border-brand-border/50">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] opacity-20 bg-brand-primary rounded-full blur-[120px] mix-blend-screen mix-blend-plus-lighter" />
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] opacity-10 bg-blue-400 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Zertifizierter Sicherheitsdienstleister</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Kompromisslose{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-brand-primary">
              Sicherheit
            </span>{" "}
            für Ihre Werte.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-brand-gray mb-12 max-w-3xl leading-relaxed"
          >
            Maßgeschneiderte Schutzkonzepte, 24/7 Erreichbarkeit und hochqualifiziertes Personal für Objektschutz, Baustellen und Events.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-primary-hover text-white rounded-lg font-semibold transition-all hover:scale-105 active:scale-95 group"
            >
              Sicherheitsanalyse anfordern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+49123456789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/20 rounded-lg font-semibold transition-all hover:scale-105 active:scale-95"
            >
              <ShieldAlert className="w-5 h-5" />
              Notfall-Kontakt 24/7
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
