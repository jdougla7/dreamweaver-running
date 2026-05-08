import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mountain,
  Handshake,
  Sparkles,
  Mail,
  CheckCircle2,
  Search,
  Megaphone,
  Map,
  Trophy,
  Mic2,
  Camera,
  Menu,
  X,
  Users
} from "lucide-react";

const cn = (...classes) => classes.filter(Boolean).join(" ");

function Button({ children, asChild = false, size = "default", variant = "default", className = "", ...props }) {
  const sizeClass = size === "lg" ? "h-12 px-6 text-base" : "h-10 px-4 text-sm";
  const variantClass =
    variant === "outline"
      ? "border border-white/20 bg-white/5 text-white hover:bg-white/10"
      : "bg-amber-300 text-stone-950 hover:bg-amber-200";

  const classes = cn(
    "inline-flex items-center justify-center rounded-full font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-200 disabled:pointer-events-none disabled:opacity-50",
    sizeClass,
    variantClass,
    className
  );

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(classes, children.props.className || ""),
      ...props
    });
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={cn("rounded-3xl", className)}>{children}</div>;
}

function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, ease: "easeOut" }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08
    }
  }
};

const navItems = [
  { label: "For athletes", href: "#athletes" },
  { label: "For brands", href: "#brands" },
  { label: "The concept", href: "#concept" },
  { label: "Validate with us", href: "#validate" }
];

const athleteNeeds = [
  "Clarify your story beyond race results and follower count",
  "Build a sponsor-ready profile, media kit and pitch language",
  "Understand how to price partnerships and create value for brands",
  "Connect with aligned brands without losing what makes trail running authentic"
];

const brandNeeds = [
  "Find credible trail athletes beyond the obvious names",
  "Evaluate performance, audience, community influence and brand fit in one place",
  "Build authentic campaigns around races, communities and stories",
  "Reduce the friction of shortlisting, briefing, activation and reporting"
];

const products = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Sponsor-readiness studio",
    copy: "Done-with-you support for athlete positioning, media kits, pitch decks, rate cards and outreach strategy."
  },
  {
    icon: <Search className="h-6 w-6" />,
    title: "Curated athlete discovery",
    copy: "A future platform where brands can find trail runners by geography, race calendar, audience, specialty and values fit."
  },
  {
    icon: <Handshake className="h-6 w-6" />,
    title: "Campaign and partnership support",
    copy: "Light-touch support to shape briefs, match athletes, manage deliverables and help both sides create useful partnerships."
  }
];

const validationQuestions = [
  "Do athletes see sponsor readiness as a real, painful problem?",
  "Are brands struggling with discovery, evaluation, execution or all three?",
  "Should the first offer be a service, a membership, a marketplace or managed campaigns?",
  "Who pays first: athletes, brands or both?",
  "How do we build this in a way that respects trail culture?"
];

const partnerRoles = [
  {
    title: "Connectors",
    copy: "Introduce us to athletes, brand marketers, race directors, agents, creators and people with strong opinions on trail sponsorship."
  },
  {
    title: "Advisors",
    copy: "Help pressure-test the model, pricing, positioning and what should not be built."
  },
  {
    title: "Pilot partners",
    copy: "Join an early cohort to test sponsor-readiness tools, curated shortlists or campaign support."
  }
];

export default function DreamweaverRunningWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0f1411] text-stone-100 selection:bg-amber-300 selection:text-stone-950">
      <div className="fixed inset-0 -z-10 opacity-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,177,112,0.24),transparent_32%),radial-gradient(circle_at_80%_10%,rgba(94,131,117,0.2),transparent_30%),linear-gradient(180deg,#111916_0%,#0f1411_48%,#16100c_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1411]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-300 text-stone-950 shadow-lg shadow-amber-950/20">
              <Mountain className="h-5 w-5" />
            </div>
            <div>
              <div className="text-base font-semibold tracking-tight">Dreamweaver Running</div>
              <div className="text-xs text-stone-400">dreamweaver.run</div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-stone-300 transition hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button asChild className="px-5">
              <a href="mailto:hello@dreamweaver.run">Start a conversation</a>
            </Button>
          </div>

          <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <div className="border-t border-white/10 bg-[#0f1411] px-5 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-stone-300" onClick={() => setMenuOpen(false)}>
                  {item.label}
                </a>
              ))}
              <a href="mailto:hello@dreamweaver.run" className="text-sm font-medium text-amber-200">
                Start a conversation
              </a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
          <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div initial="initial" animate="animate" variants={stagger}>
              <motion.div variants={fadeUp} className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-200/20 bg-amber-200/10 px-4 py-2 text-sm text-amber-100">
                <Sparkles className="h-4 w-4" />
                A new platform concept for the trail economy
              </motion.div>
              <motion.h1 variants={fadeUp} className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
                Helping trail runners build sustainable careers.
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl">
                Dreamweaver Running is an early-stage concept to help pro, sub-elite and aspiring pro trail runners build their brand, package their value and connect with sponsors that fit.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="px-7">
                  <a href="#validate">
                    Help validate the idea <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="px-7">
                  <a href="#concept">See the concept</a>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-amber-300/20 via-emerald-300/10 to-transparent blur-2xl" />
              <div className="relative overflow-hidden rounded-[2.2rem] border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="aspect-[4/5] overflow-hidden rounded-[1.7rem] bg-[linear-gradient(135deg,#2a332c,#121814)]">
                  <div className="h-full w-full bg-[radial-gradient(circle_at_70%_18%,rgba(255,220,150,0.55),transparent_15%),linear-gradient(160deg,rgba(255,255,255,0.05),transparent_25%),linear-gradient(130deg,#566553_0%,#202820_36%,#151a15_70%,#2d2116_100%)] p-8">
                    <div className="flex h-full flex-col justify-end rounded-[1.3rem] border border-white/12 bg-black/18 p-7 backdrop-blur-[1px]">
                      <div className="mb-5 flex gap-2">
                        <span className="rounded-full bg-amber-300 px-3 py-1 text-xs font-semibold text-stone-950">Athletes</span>
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs text-white">Brands</span>
                        <span className="rounded-full bg-white/12 px-3 py-1 text-xs text-white">Races</span>
                      </div>
                      <h2 className="text-3xl font-semibold text-white">The commercial operating system for trail runners.</h2>
                      <p className="mt-4 text-sm leading-6 text-stone-300">Part brand studio, part discovery platform, part partnership support.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {[
              ["01", "Trail-native", "Built around credibility, community, race calendars and the culture of the sport."],
              ["02", "Athlete-first", "Designed to help runners communicate value without forcing them into generic influencer boxes."],
              ["03", "Brand useful", "Makes it easier for sponsors to find, evaluate and activate the right partners."]
            ].map(([num, title, copy]) => (
              <Card key={num} className="border border-white/10 bg-white/[0.055] text-white shadow-xl shadow-black/10">
                <CardContent className="p-6">
                  <div className="text-sm font-semibold text-amber-200">{num}</div>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-stone-300">{copy}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="concept" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">The concept</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">A sponsor-readiness studio plus a curated athlete platform.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                The first version would start service-heavy, helping athletes become easier to sponsor while learning what brands actually need. Over time, this could become a curated discovery and campaign platform for trail running and adjacent endurance sports.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {products.map((item) => (
                <Card key={item.title} className="border border-white/10 bg-[#18201b] text-white">
                  <CardContent className="p-7">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">{item.icon}</div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{item.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-10 md:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
            <div id="athletes" className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-300 text-stone-950">
                <Trophy className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold text-white">For athletes</h2>
              <p className="mt-4 text-stone-300">Many strong runners have real commercial value but no simple way to package it.</p>
              <div className="mt-7 space-y-4">
                {athleteNeeds.map((need) => (
                  <div key={need} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
                    <p className="text-sm leading-6 text-stone-300">{need}</p>
                  </div>
                ))}
              </div>
            </div>

            <div id="brands" className="rounded-[2rem] border border-white/10 bg-white/[0.055] p-8 md:p-10">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-200 text-stone-950">
                <Megaphone className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-semibold text-white">For brands</h2>
              <p className="mt-4 text-stone-300">Discovery is easy. Good-fit discovery is hard.</p>
              <div className="mt-7 space-y-4">
                {brandNeeds.map((need) => (
                  <div key={need} className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-200" />
                    <p className="text-sm leading-6 text-stone-300">{need}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">Why it matters</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">Trail runners are more than endorsers.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-300">
                They are gear testers, storytellers, coaches, community builders, race anchors, local guides and trusted voices in a sport where authenticity still matters.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <Map className="h-5 w-5" />, title: "Race moments", copy: "Build campaigns around the calendar, from local events to global stages." },
                { icon: <Users className="h-5 w-5" />, title: "Community trust", copy: "Surface athletes who move real communities, not just algorithms." },
                { icon: <Camera className="h-5 w-5" />, title: "Content value", copy: "Help runners turn lived experience into useful partner storytelling." },
                { icon: <Mic2 className="h-5 w-5" />, title: "Media readiness", copy: "Make athletes easier to brief, interview, feature and activate." }
              ].map((item) => (
                <Card key={item.title} className="border border-white/10 bg-white/[0.055] text-white">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-amber-200">{item.icon}</div>
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-stone-300">{item.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="validate" className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-[#f3eadb] p-8 text-stone-950 shadow-2xl shadow-black/30 md:p-12">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-600">Current stage</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">We are validating before building.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-700">
                  The next step is a focused interview sprint with athletes, brands, race leaders, creators and potential partners to understand the real gaps and avoid building the wrong thing.
                </p>
                <Button asChild size="lg" className="mt-8 bg-stone-950 px-7 text-white hover:bg-stone-800">
                  <a href="mailto:hello@dreamweaver.run?subject=Dreamweaver%20Running%20intro">
                    Connect with us <Mail className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="rounded-[2rem] bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold">What we are trying to learn</h3>
                <div className="mt-6 space-y-4">
                  {validationQuestions.map((q, index) => (
                    <div key={q} className="flex gap-4 rounded-2xl bg-stone-50 p-4">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-300 text-sm font-semibold">{index + 1}</div>
                      <p className="text-sm leading-6 text-stone-700">{q}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">How partners can help</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">We are looking for the right early conversations.</h2>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {partnerRoles.map((role) => (
                <Card key={role.title} className="border border-white/10 bg-white/[0.055] text-white">
                  <CardContent className="p-7">
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <p className="mt-3 text-sm leading-6 text-stone-300">{role.copy}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 pt-10 md:px-8">
          <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-white/10 bg-[linear-gradient(135deg,rgba(251,191,36,0.16),rgba(255,255,255,0.06),rgba(16,185,129,0.10))] p-8 md:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-4xl font-semibold tracking-tight text-white">Help shape Dreamweaver Running.</h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-300">
                  Know an athlete, brand, race director, creator or outdoor industry leader we should speak with? We would love an introduction.
                </p>
              </div>
              <Button asChild size="lg" className="px-8">
                <a href="mailto:hello@dreamweaver.run?subject=Dreamweaver%20Running%20connection">
                  Make an introduction <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-8 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-stone-400 md:flex-row md:items-center md:justify-between">
          <div>© Dreamweaver Running. Built for the trail economy.</div>
          <div className="flex gap-5">
            <a className="hover:text-white" href="mailto:hello@dreamweaver.run">
              hello@dreamweaver.run
            </a>
            <a className="hover:text-white" href="https://dreamweaver.run">
              dreamweaver.run
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
