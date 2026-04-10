"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-brand-dark pt-32 pb-32 lg:pt-48 lg:pb-40 border-b border-white/5">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-primary/15 via-brand-dark to-brand-dark"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute inset-0 bg-brand-dark [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)]" />
      </div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-light text-sm font-medium mb-10 backdrop-blur-sm"
          >
            <ShieldCheck className="w-4 h-4 text-brand-primary" />
            <span className="opacity-90">Zertifizierter Sicherheitsdienstleister nach DIN 77200</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white tracking-tighter leading-[1.05] mb-8"
          >
            Kompromisslose{" "}
            <span className="relative whitespace-nowrap">
              <span className="absolute -inset-1 rounded-xl bg-brand-primary/20 blur-xl opacity-50"></span>
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-primary to-blue-500">
                Sicherheit
              </span>
            </span>
            <br className="hidden md:block" /> für Ihre Werte.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-brand-gray/90 mb-12 max-w-3xl leading-relaxed font-light"
          >
            Maßgeschneiderte Schutzkonzepte für den B2B-Sektor. Höchste Diskretion, 24/7 Präsenz und hochqualifiziertes Personal für Objektschutz, Baustellen und Events.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <Link
              href="/kontakt"
              className="w-full sm:w-auto relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-brand-primary to-blue-600 rounded-lg blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative inline-flex flex-row items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-lg font-semibold transition-all group-hover:bg-brand-primary-hover w-full sm:w-auto">
                Sicherheitsanalyse anfordern
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <a
              href="tel:+49123456789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg font-semibold transition-all backdrop-blur-sm group"
            >
              <div className="bg-red-500/20 p-1.5 rounded-md text-red-500 group-hover:bg-red-500/30 transition-colors">
                <PhoneCall className="w-4 h-4" />
              </div>
              Notfall-Kontakt 24/7
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
