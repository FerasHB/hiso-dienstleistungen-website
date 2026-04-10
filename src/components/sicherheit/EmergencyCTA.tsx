"use client";

import { motion } from "framer-motion";
import { PhoneCall, ShieldAlert, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function EmergencyCTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 z-0">
        {/* Subtle warning glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-red-600/10 blur-[100px] rounded-full pointer-events-none" />
        
        {/* Repeating diagonal lines for urgency */}
        <div className="absolute inset-0 opacity-[0.03] bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,#fff_10px,#fff_20px)]" />
      </div>

      <div className="container max-w-5xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#1A1A1A] border border-red-500/20 rounded-3xl p-10 md:p-16 flex flex-col items-center text-center shadow-2xl relative overflow-hidden"
        >
          {/* Inner ambient glow */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-red-600/10 to-transparent pointer-events-none" />

          <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mb-8 relative">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping opacity-75" />
            <ShieldAlert className="w-10 h-10" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white mb-6 uppercase tracking-tight">
            Akuter <span className="text-red-500">Sicherheitsvorfall?</span>
          </h2>
          
          <p className="text-brand-gray/90 text-lg md:text-xl font-light mb-10 max-w-2xl leading-relaxed">
            Wir sind 24/7 erreichbar und bei Bedarf innerhalb kürzester Zeit bei Ihnen vor Ort. Zögern Sie nicht in Notsituationen.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
            <a 
              href="tel:+49123456789"
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(220,38,38,0.3)] shadow-red-600/20 group"
            >
              <PhoneCall className="w-6 h-6 group-hover:animate-pulse" />
              Notrufnummer wählen
            </a>
            
            <Link 
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl font-bold text-lg transition-all backdrop-blur-md"
            >
              Unverbindlich anfragen
              <ArrowRight className="w-5 h-5 opacity-70" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
