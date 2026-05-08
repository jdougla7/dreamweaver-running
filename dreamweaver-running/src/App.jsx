import { ArrowRight, BarChart3, Compass, Mail, Mountain, Sparkles, Trophy, Users } from "lucide-react"
import { motion } from "framer-motion"

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
}

const criteria = [
  {
    icon: Trophy,
    title: "Competitive credibility",
    text: "Podiums, strong race results and high ranking signals from platforms like UltraSignup, UTMB and ITRA.",
  },
  {
    icon: BarChart3,
    title: "Growing audience",
    text: "A social presence that is building momentum, with engagement that shows people care about the athlete’s story.",
  },
  {
    icon: Sparkles,
    title: "Human storytelling",
    text: "A life, voice or point of view that reaches beyond race splits and creates meaningful sponsor fit.",
  },
]

const steps = [
  "Identify high-potential trail runners",
  "Interview athletes about their goals and story",
  "Shape a clear sponsorship narrative",
  "Connect runners with aligned brand opportunities",
]

function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f4ec] text-[#172018]">
      <section className="relative px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,_rgba(72,111,79,0.25),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(205,139,75,0.22),_transparent_32%)]" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#172018]/10 bg-white/60 px-5 py-3 shadow-sm backdrop-blur">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#172018] text-white">
              <Mountain className="h-5 w-5" />
            </span>
            Dreamweaver Running
          </a>
          <a href="mailto:hello@dreamweaver.run" className="hidden rounded-full bg-[#172018] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#2b3d2e] sm:inline-flex">
            Contact us
          </a>
        </nav>

        <div id="top" className="mx-auto grid max-w-7xl gap-10 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex rounded-full border border-[#486f4f]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[#486f4f] shadow-sm">
              A platform for the next generation of trail running talent
            </p>
            <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#172018] sm:text-6xl lg:text-7xl">
              Find the runners brands should know before everyone else does.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#4b554c] sm:text-xl">
              Dreamweaver Running helps emerging and professional trail runners turn race performance, audience growth and authentic personal stories into stronger sponsorship opportunities.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="mailto:hello@dreamweaver.run" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#172018] px-7 py-4 font-semibold text-white shadow-lg shadow-[#172018]/20 transition hover:-translate-y-0.5 hover:bg-[#2b3d2e]">
                Start a conversation <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#approach" className="inline-flex items-center justify-center rounded-full border border-[#172018]/15 bg-white/70 px-7 py-4 font-semibold text-[#172018] transition hover:-translate-y-0.5 hover:bg-white">
                See the approach
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
            <div className="rounded-[2rem] border border-white/70 bg-white/55 p-4 shadow-2xl shadow-[#172018]/10 backdrop-blur">
              <div className="rounded-[1.5rem] bg-[#172018] p-6 text-white">
                <div className="mb-16 flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium">Candidate scorecard</span>
                  <Compass className="h-7 w-7 text-[#d6a15f]" />
                </div>
                <div className="space-y-5">
                  {[
                    ["Race credibility", "92"],
                    ["Audience momentum", "81"],
                    ["Story potential", "88"],
                  ].map(([label, score]) => (
                    <div key={label}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-white/75">{label}</span>
                        <span className="font-semibold">{score}/100</span>
                      </div>
                      <div className="h-3 rounded-full bg-white/10">
                        <div className="h-3 rounded-full bg-[#d6a15f]" style={{ width: `${score}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-10 rounded-2xl bg-white/10 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-[#d6a15f]">Signal</p>
                  <p className="mt-2 text-2xl font-bold">Strong emerging sponsor fit</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="approach" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="font-semibold text-[#486f4f]">How it works</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">A sharper way to spot and support trail running talent.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {criteria.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="rounded-[1.75rem] border border-[#172018]/10 bg-white p-7 shadow-sm">
                  <div className="mb-8 flex h-13 w-13 items-center justify-center rounded-2xl bg-[#486f4f]/10 text-[#486f4f]">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="mt-4 leading-7 text-[#59615a]">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] bg-[#172018] p-8 text-white md:grid-cols-[0.85fr_1.15fr] md:p-12">
          <div>
            <p className="font-semibold text-[#d6a15f]">From signal to story</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight">The Dreamweaver process</h2>
            <p className="mt-5 leading-7 text-white/70">
              We combine athlete discovery, interview-based storytelling and sponsor positioning to help promising runners become easier for brands to understand and support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <div key={step} className="rounded-3xl bg-white/10 p-6">
                <p className="text-sm font-semibold text-[#d6a15f]">0{index + 1}</p>
                <p className="mt-3 text-xl font-bold">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#172018]/10 bg-white p-8 text-center shadow-sm md:p-14">
          <Users className="mx-auto h-10 w-10 text-[#486f4f]" />
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Built for athletes with performance, presence and a story worth following.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#59615a]">
            We’re looking for runners who are competitive, compelling and ready to build long-term partnerships with brands that fit who they are.
          </p>
          <a href="mailto:hello@dreamweaver.run" className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#172018] px-7 py-4 font-semibold text-white transition hover:bg-[#2b3d2e]">
            <Mail className="h-5 w-5" /> Get in touch
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
