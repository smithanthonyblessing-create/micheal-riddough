import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, HeartPulse } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import profileImg from "@/assets/mick-profile.jpeg";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "$10M+", label: "Franchise Fees Generated" },
  { value: "220+", label: "Franchises Awarded" },
  { value: "2", label: "Vaccines Added to Medicare" },
];

const highlights = [
  {
    icon: Building2,
    title: "Franchise Development",
    desc: "Proven track record growing 30+ franchise brands through strategic sales, marketing, and operational excellence.",
    link: "/franchise",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Policy",
    desc: "Congressional Fellow who successfully added pneumococcal and influenza vaccines to the Medicare benefit package.",
    link: "/healthcare",
  },
  {
    icon: Award,
    title: "Award-Winning Leadership",
    desc: "President's Cup recipient for exemplary franchise sales leadership, with publications in NEJM and JAMA.",
    link: "/about",
  },
];

const Home = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-navy text-primary-foreground section-padding">
      <HeroBackground />
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Executive Portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Dr. Michael<br />
              <span className="text-gold">(Mick) Riddiough</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Franchise Development Consultant &amp; Healthcare Policy Leader. 
              PharmD, MPH — transforming industries through strategic vision and proven results.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity"
              >
                Get in Touch <ArrowRight size={18} />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 border border-gold text-gold px-6 py-3 rounded hover:bg-gold hover:text-accent-foreground transition-colors animate-blink"
              >
                View Case Studies
              </Link>
            </div>
          </div>

          <div className="flex justify-center animate-fade-up animate-delay-200">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gold shadow-2xl">
              <img
                src={profileImg}
                alt="Dr. Michael Riddiough"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-cream">
      <div className="section-container py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl md:text-4xl font-bold text-primary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Highlights */}
    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Areas of Expertise</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          A unique dual-career executive blending franchise growth strategy with healthcare policy innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <Link key={h.title} to={h.link} className="card-executive group hover:border-gold transition-colors">
              <h.icon className="text-gold mb-4" size={32} />
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-gold transition-colors">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
