import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import { Stethoscope, BookOpen, Building, GraduationCap } from "lucide-react";

const milestones = [
  { year: "1970s", icon: GraduationCap, title: "PharmD at UCSF", desc: "Earned Doctor of Pharmacy from the #1 pharmacy school in the world, followed by a Certificate in Hospital and Clinical Pharmacy." },
  { year: "1970s–80s", icon: Stethoscope, title: "Clinical Faculty, UCSF", desc: "Spent 7 years teaching clinical therapeutics to pharmacy and medical students, while instructing physicians on surgical floors." },
  { year: "1980s", icon: BookOpen, title: "Visiting Professor, University of Sydney", desc: "Guided Australian pharmacy schools in implementing clinical pharmacy teaching programs at the invitation of Dean Goyan." },
  { year: "1980s", icon: GraduationCap, title: "MPH at UC Berkeley", desc: "Compressed a 2-year Master of Public Health program into one year." },
  { year: "1980s–90s", icon: Building, title: "Congressional Fellow, OTA", desc: "Conducted landmark research that led Congress to add pneumococcal and influenza vaccines to the Medicare benefit package." },
];

const Healthcare = () => (
  <Layout>
    <section className="relative bg-navy text-primary-foreground py-16 md:py-20">
      <HeroBackground />
      <div className="section-container text-center relative z-10">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Healthcare Leadership</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Shaping Policy.<br />Saving Lives.</h1>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          From clinical pharmacy education at UCSF to Congressional healthcare policy — a career dedicated to improving public health.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Career Timeline</h2>
        <div className="relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border" />
          <div className="space-y-10">
            {milestones.map((m) => (
              <div key={m.title} className="relative pl-16">
                <div className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <m.icon className="text-gold" size={20} />
                </div>
                <p className="text-xs text-gold font-semibold tracking-wider uppercase mb-1">{m.year}</p>
                <h3 className="font-display text-lg font-semibold mb-1">{m.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-cream section-padding">
      <div className="section-container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold mb-6">Published Work</h2>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Research on vaccine effectiveness was widely published in the most prestigious medical journals in the world.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {["New England Journal of Medicine", "JAMA", "American Journal of Public Health"].map((j) => (
            <span key={j} className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full">
              {j}
            </span>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Healthcare;
