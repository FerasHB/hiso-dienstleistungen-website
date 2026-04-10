import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Award, CheckCircle2, HardHat, Building2, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION */}
      <section className="relative w-full pb-20 pt-16 md:pt-28 md:pb-32 overflow-hidden flex flex-col justify-center min-h-[85vh]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-primary/10 via-brand-dark to-brand-dark pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Einsatzbereit in unter 2 Stunden im Raum Mitte
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.1]">
            Maßgeschneiderte <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-blue-400">Sicherheit</span> & operative Dienstleistungen.
          </h1>
          
          <p className="mt-6 text-lg md:text-xl text-brand-gray max-w-2xl leading-relaxed">
            Verlässlicher Schutz und reibungslose Gebäudeservices für Industrie, Bau und Gewerbe. Zertifiziert, diskret und jederzeit einsatzbereit.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link 
              href="/kontakt" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold bg-brand-primary text-white rounded-md hover:bg-brand-primary-hover transition-all shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/40"
            >
              Erstgespräch vereinbaren
            </Link>
            <Link 
              href="#leistungen" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-mediumtext-white border border-brand-border rounded-md hover:bg-brand-border/50 text-white transition-colors"
            >
              Unsere Leistungen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST SIGNALS BAND */}
      <section className="border-y border-brand-border bg-brand-dark/50">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-brand-border">
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0 gap-3">
              <ShieldCheck className="text-brand-primary h-8 w-8" />
              <div className="space-y-1">
                <h3 className="font-semibold text-white tracking-wide">Zertifiziert nach § 34a GewO</h3>
                <p className="text-sm text-brand-gray">Geprüftes & lizenziertes Personal</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0 gap-3">
              <Award className="text-brand-primary h-8 w-8" />
              <div className="space-y-1">
                <h3 className="font-semibold text-white tracking-wide">Langjährige Erfahrung</h3>
                <p className="text-sm text-brand-gray">Über 15.000 gesicherte Einsatzstunden</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center pt-8 md:pt-0 gap-3">
              <Clock className="text-brand-primary h-8 w-8" />
              <div className="space-y-1">
                <h3 className="font-semibold text-white tracking-wide">24/7 Notrufzentrale</h3>
                <p className="text-sm text-brand-gray">Rund um die Uhr für Sie erreichbar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES GRID */}
      <section id="leistungen" className="py-24 max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">
            Unsere operativen <br className="hidden md:block"/>Säulen.
          </h2>
          <p className="mt-4 text-brand-gray text-lg max-w-xl">
            Als Komplettanbieter bündeln wir kritische Dienstleistungen, um Ihnen Reibungsverluste zu ersparen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {/* Service 1 */}
           <Link href="/sicherheit" className="group flex flex-col bg-brand-onyx border border-brand-border p-8 rounded-xl hover:border-brand-primary/50 transition-colors">
            <div className="bg-brand-dark border border-brand-border p-4 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Sicherheitsdienst</h3>
            <p className="text-brand-gray leading-relaxed mb-8 flex-1">
              Wir schützen Werte. Vom präventiven Objektschutz über diskrete Event-Security bis zur lückenlosen Baustellenbewachung.
            </p>
            <div className="font-medium text-brand-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Details ansehen <ArrowRight size={18} />
            </div>
          </Link>

          {/* Service 2 */}
          <Link href="/baudienstleistungen" className="group flex flex-col bg-brand-onyx border border-brand-border p-8 rounded-xl hover:border-brand-primary/50 transition-colors">
            <div className="bg-brand-dark border border-brand-border p-4 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <Building2 size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Gebäudemanagement</h3>
            <p className="text-brand-gray leading-relaxed mb-8 flex-1">
              Hochwertige Gebäudereinigung für Büros, Wohnanlagen und Gewerbe zur langfristigen Werterhaltung Ihrer Immobilien.
            </p>
            <div className="font-medium text-brand-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Details ansehen <ArrowRight size={18} />
            </div>
          </Link>

          {/* Service 3 */}
          <Link href="/baudienstleistungen" className="group flex flex-col bg-brand-onyx border border-brand-border p-8 rounded-xl hover:border-brand-primary/50 transition-colors">
            <div className="bg-brand-dark border border-brand-border p-4 w-16 h-16 rounded-lg flex items-center justify-center mb-6 text-brand-primary group-hover:scale-110 transition-transform">
              <HardHat size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bau & Logistik</h3>
            <p className="text-brand-gray leading-relaxed mb-8 flex-1">
              Von der Baulogistik, professionellen Entrümpelung bis hin zur Modernisierung und Renovierung bieten wir den passenden Service.
            </p>
            <div className="font-medium text-brand-primary inline-flex items-center gap-2 group-hover:gap-3 transition-all">
              Details ansehen <ArrowRight size={18} />
            </div>
          </Link>
        </div>
      </section>

      {/* 4. WHY US / TRUST FOCUS */}
      <section className="bg-brand-onyx border-y border-brand-border py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Warum HISO Ihr <span className="text-brand-primary">verlässlichster</span> Partner wird.
            </h2>
            <p className="mt-6 text-brand-gray text-lg leading-relaxed">
              In Branchen, die keine Fehler verzeihen, ist Vertrauen die einzige Währung, die zählt. Wir setzen auf absolute Transparenz, schnelle Entscheidungswege und kompromisslose Ausführungsqualität.
            </p>
            
            <ul className="mt-10 space-y-6">
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Schnelle Reaktionszeit</h4>
                  <p className="text-brand-gray mt-1">Wir stellen qualifiziertes Personal bedarfsgerecht und zeitnah zur Verfügung.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Geprüfte Qualität</h4>
                  <p className="text-brand-gray mt-1">Unser Team durchläuft kontinuierliche Trainings für absolute Verlässlichkeit.</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckCircle2 className="text-brand-primary w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-white text-lg">Ein Ansprechpartner</h4>
                  <p className="text-brand-gray mt-1">Direkte Kommunikation auf Management-Ebene für schnelle Entscheidungen im Einsatz.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="border border-brand-border bg-brand-dark rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold text-white border-b border-brand-border pb-4 mb-6">Projekt-Referenz</h3>
            <div className="space-y-6">
              <div>
                <p className="text-brand-gray text-sm uppercase tracking-wider mb-1">Auftrag</p>
                <p className="text-white font-medium text-lg">Baustellenbewachung Großbauprojekt</p>
              </div>
              <div>
                <p className="text-brand-gray text-sm uppercase tracking-wider mb-1">Laufzeit</p>
                <p className="text-white font-medium text-lg">12 Monate (24/7 Schichtsystem)</p>
              </div>
              <div>
                <p className="text-brand-gray text-sm uppercase tracking-wider mb-1">Status</p>
                <div className="inline-flex items-center gap-2 mt-1 bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-md text-sm font-semibold">
                  <CheckCircle2 size={16} /> Erfolgreich abgeschlossen, 0 Vorkommnisse.
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-brand-border text-center">
               <Link href="/kontakt" className="text-brand-primary font-semibold hover:underline">Referenzen für Ihre Branche anfragen →</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
