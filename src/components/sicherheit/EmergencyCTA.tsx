"use client";

import { motion } from "framer-motion";
import { PhoneCall, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EmergencyCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0D14]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Urgent red gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-900/20 via-[#0A0D14] to-[#0A0D14]" />
        {/* Tactical Pattern */}
        <div className="absolute inset-x-0 bottom-0 h-4 bg-[repeating-linear-gradient(45deg,transparent,transparent_20px,rgba(220,38,38,0.2)_20px,rgba(220,38,38,0.2)_40px)]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-[#151A26] border border-red-500/30 rounded-sm p-10 md:p-14 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-red-600/5 to-transparent pointer-events-none" />

          <div className="w-20 h-20 bg-red-500/10 border border-red-500/20 text-red-500 rounded-sm flex items-center justify-center mb-8 relative">
            <ShieldAlert className="w-10 h-10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight">
            Akuter <span className="text-red-500">Security-Notfall?</span>
          </h2>
          
          <p className="text-brand-gray/90 text-lg md:text-xl font-normal mb-10 max-w-2xl leading-relaxed">
            Unsere Leitstelle ist 24/7 besetzt. Anforderung von sofortigem Operativpersonal im Raum Mitte. Volle Einsatzbereitschaft in unter 2 Stunden.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href="tel:+49123456789"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-sm font-bold text-lg transition-all shadow-[0_0_15px_rgba(220,38,38,0.2)] group hover:-translate-y-1"
            >
              <PhoneCall className="w-6 h-6" />
              Notrufnummer wählen
            </a>
            
            <Link 
              href="/kontakt"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-transparent hover:bg-white/5 text-white border border-white/20 rounded-sm font-bold text-lg transition-all"
            >
              Normalen Einsatz anfragen
              <ArrowRight className="w-5 h-5 opacity-70" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
