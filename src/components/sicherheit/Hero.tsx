"use client";

import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function SecurityHero() {
  return (
    <section className="relative overflow-hidden bg-[#0A0D14] pt-32 pb-32 lg:pt-48 lg:pb-40 border-b border-white/5">
      {/* Realistic Dark Overlay / Video Placeholder Feel */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1A2235] via-[#0A0D14] to-[#0A0D14] opacity-80"></div>
      
      {/* Subtle Noise Texture for rough physical feel */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>

      <div className="container relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Autority Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-sm bg-black/40 border border-white/10 text-white/90 text-sm font-semibold mb-10 backdrop-blur-md uppercase tracking-wider"
          >
            <ShieldCheck className="w-5 h-5 text-brand-primary" />
            <span>§34a GewO zertifizierter Sicherheitsdienst</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-[5rem] font-bold text-white tracking-tight leading-[1.1] mb-8"
          >
            Operativer Schutz für <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-red-500">
              kritische Infrastruktur.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-xl text-brand-gray/90 mb-12 max-w-3xl leading-relaxed font-normal"
          >
            Präventive und reaktive Absicherung für Industrie, Baustellen und Events. Eigene 24/7 Leitstelle, Einsatzbereitschaft in unter 2 Stunden und kompromisslose Risikominimierung.
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
              <div className="relative inline-flex flex-row items-center justify-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold transition-all hover:bg-red-700 w-full rounded-sm">
                Sicherheitskonzept anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <a
              href="tel:+49123456789"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent hover:bg-white/5 text-white border border-white/20 font-bold transition-all rounded-sm group"
            >
              <div className="text-red-500 group-hover:scale-110 transition-transform">
                <PhoneCall className="w-5 h-5" />
              </div>
              Notrufzentrale 24/7
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
