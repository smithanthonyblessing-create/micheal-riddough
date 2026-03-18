import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import { Search, BarChart3, Lightbulb, Rocket, CheckCircle, UserCheck } from "lucide-react";

const steps = [
  { icon: UserCheck, title: "Candidate Evaluation & Rapport", desc: "Get to know franchise candidates before explaining the business. Evaluate the candidate's objectives and qualifications, assess the degree of alignment between the candidate and the franchise, and build rapport to establish a strong relationship." },
  { icon: Search, title: "Discovery & Assessment", desc: "Deep-dive into your brand, market position, FDD, competition, and growth objectives to understand the full picture." },
  { icon: Lightbulb, title: "Strategy Development", desc: "Craft a customized franchise sales process, identify target candidates, and build a marketing plan that attracts ideal franchisees." },
  { icon: BarChart3, title: "Implementation & Execution", desc: "Launch lead generation campaigns, nurture candidates through the sales funnel, and implement Discovery Day programs." },
  { icon: Rocket, title: "Growth & Optimization", desc: "Continuous monitoring, quarterly training, and data-driven adjustments to maximize franchise sales results." },
];

const Methodology = () => (
  <Layout>
    <section className="relative bg-navy text-primary-foreground py-16 md:py-20">
      <HeroBackground />
      <div className="section-container text-center relative z-10">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Methodology</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">A Proven Approach</h1>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          Every engagement follows a disciplined, data-driven methodology refined over 30+ years of franchise development success.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <div className="space-y-8">
          {steps.map((s, i) => (
            <div key={s.title} className="card-executive flex gap-6 items-start">
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0">
                <s.icon className="text-gold" size={24} />
              </div>
              <div>
                <p className="text-xs text-gold font-semibold tracking-wider uppercase mb-1">Step {i + 1}</p>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-cream section-padding">
      <div className="section-container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold mb-6">What Sets This Apart</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {[
            "Dual expertise: healthcare analytical rigor + franchise sales acumen",
            "Hands-on operator — not just a consultant, but a former franchise owner",
            "Published researcher with data-driven decision-making at the core",
            "Network of industry relationships built over three decades",
          ].map((item) => (
            <div key={item} className="flex gap-3 items-start">
              <CheckCircle className="text-gold shrink-0 mt-0.5" size={18} />
              <p className="text-sm text-muted-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Methodology;
