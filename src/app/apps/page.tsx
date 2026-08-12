import type { Metadata } from "next";
import Link from "next/link";
import {
  Smartphone,
  Globe,
  MapPin,
  Building2,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Zap,
  Code2,
  Layers,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Synergy Digital Labs | Mobile Apps & Developer Studio",
  description:
    "Official developer showcase for Synergy Digital Labs. Explore our suite of mobile and web applications including ClarifyIt, real-time location tracking tools, and zero-brokerage classified platforms.",
  keywords: [
    "Synergy Digital Labs",
    "Google Play Developer",
    "ClarifyIt",
    "Location Tracking App",
    "Real Estate App",
    "NoBroker Alternative",
    "Android Apps",
  ],
};

export default function AppsPage() {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 md:p-12 shadow-2xl border border-indigo-500/20">
        {/* Decorative background glow */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
        <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 border border-indigo-400/30 px-4 py-1.5 text-xs font-semibold tracking-wide text-indigo-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Official Google Play Developer Studio
          </div>

          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-indigo-200">
            Synergy Digital Labs
          </h1>

          <p className="text-base text-slate-300 sm:text-lg leading-relaxed">
            We design and build high-performance mobile applications and web platforms focused on user safety, real-time location intelligence, seamless peer-to-peer marketplaces, and simplified digital knowledge.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#products"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500 transition-all duration-200 hover:scale-[1.02]"
            >
              Explore Our Apps
              <ArrowRight className="h-4 w-4" />
            </a>

            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white border border-white/20 backdrop-blur-md hover:bg-white/20 transition-all duration-200"
            >
              <Globe className="h-4 w-4 text-indigo-300" />
              Visit ClarifyIt Web Platform
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Stats & Guiding Principles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400">
            <Zap className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Battery-Optimized Engine</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Intelligent burst GPS algorithms and background optimization designed for minimal power drain.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Privacy & Data Security</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Strict compliance with Google Play standards. Encrypted communications and minimal permission models.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-4">
          <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100">Zero-Broker & Direct P2P</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Connecting buyers, tenants, and sellers directly without unnecessary middleman fees.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Apps Showcase Section */}
      <section id="products" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Product Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-50 mt-1">
              Applications & Digital Services
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400 max-w-md">
            Below are our published and active applications powering web users and mobile communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* APP CARD 1: ClarifyIt */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200 group">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300">
                    Flagship Web Platform
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3" /> Live & Active
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-slate-950 p-2.5 flex items-center justify-center shadow-md">
                    <img src="/logo.png" alt="ClarifyIt Logo" className="h-full w-full object-contain" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50">
                      ClarifyIt.in
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Scientific & Technical Concepts Explained Simply
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Our comprehensive digital knowledge base offering structured, deep-dive explanations on complex scientific, historical, technological, and medical phenomena. Features thousands of curated ultimate guides designed for fast comprehension without clickbait.
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {["2,000+ Ultimate Guides", "Zero Distractions", "Fast Search", "Curated Courses"].map((tag, i) => (
                    <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      • {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-3 text-sm shadow-md transition-colors w-full"
                >
                  Open ClarifyIt Web App
                  <ExternalLink className="h-4 w-4" />
                </Link>
                <Link
                  href="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-5 py-3 text-sm transition-colors w-full"
                >
                  Browse Learning Tracks
                </Link>
              </div>
            </div>
          </div>

          {/* APP CARD 2: Location & Journey Tracking App */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                    Mobile Utility & Safety
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 dark:bg-amber-950/80 text-amber-700 dark:text-amber-300">
                    Android Native App
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
                    <MapPin className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50">
                      PathPulse & Journey Tracker
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Intelligent Real-Time Location & Movement Logger
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Advanced background location engine engineered for journey logging, personal safety, and movement detection. Employs multi-stage burst GPS verification to prevent false journey starts while maintaining exceptional battery efficiency.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>5-Point Burst GPS Verification</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Low-Power Passive Heartbeat</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Offline Journey Caching</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Automated Safety Alerts</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-medium px-5 py-3 text-sm opacity-90 cursor-default shadow-sm w-full"
                >
                  <Smartphone className="h-4 w-4" />
                  Google Play Store App
                </button>
                <span className="text-center text-xs text-slate-500 dark:text-slate-400">
                  Developed by Synergy Digital Labs
                </span>
              </div>
            </div>
          </div>

          {/* APP CARD 3: Zero-Broker Real Estate & Classifieds */}
          <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-4 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                    Real Estate & Classifieds
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300">
                    Direct P2P Marketplace
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-md">
                    <Building2 className="h-7 w-7" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-slate-50">
                      UrbanNest & Direct Market
                    </h3>
                    <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                      Zero-Brokerage Rentals, Property Finder & Local Classifieds
                    </p>
                  </div>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  A seamless peer-to-peer property rental and local classifieds platform connecting buyers, renters, and owners directly. Eliminates middleman commissions and broker fees with verified listings and direct instant communication.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>0% Broker Commission Model</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Owner-Direct Chat & In-App Connect</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Location-Based Property Discovery</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>Verified Listings & Fast Uploads</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 min-w-[200px]">
                <button
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 font-medium px-5 py-3 text-sm opacity-90 cursor-default shadow-sm w-full"
                >
                  <Smartphone className="h-4 w-4" />
                  Google Play Store App
                </button>
                <span className="text-center text-xs text-slate-500 dark:text-slate-400">
                  Developed by Synergy Digital Labs
                </span>
              </div>
            </div>
          </div>

          {/* APP CARD 4: Future Pipeline */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-dashed border-slate-300 dark:border-slate-800 p-6 md:p-8 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <div className="h-14 w-14 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center shrink-0">
                <Code2 className="h-7 w-7" />
              </div>
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">
                  More Innovations Coming Soon
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Synergy Digital Labs is constantly developing new Android utilities, AI-powered assistant tools, and performance-driven applications. Stay tuned on the Google Play Store for our next releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Information & Google Play Developer Policy Section */}
      <section className="rounded-3xl bg-slate-100 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-6 md:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-indigo-600 text-white">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              Developer Profile & Transparency
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Official Publisher Information for Google Play Console & Users
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-600 dark:text-slate-300">
          <div className="space-y-3 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <Building2 className="h-4 w-4 text-indigo-500" /> Organization Name
            </h4>
            <p className="text-xs leading-relaxed">
              <strong>Synergy Digital Labs</strong> – Independent Software Studio specializing in consumer mobile applications, location intelligence tools, and web platform infrastructure.
            </p>
          </div>

          <div className="space-y-3 p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <h4 className="font-semibold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" /> Security & Privacy First
            </h4>
            <p className="text-xs leading-relaxed">
              All applications published under Synergy Digital Labs undergo thorough security audits, employ strict data encryption in transit, and strictly adhere to Google Play Developer distribution policies.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Synergy Digital Labs. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <Link href="/" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1">
              ClarifyIt Main Site <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
