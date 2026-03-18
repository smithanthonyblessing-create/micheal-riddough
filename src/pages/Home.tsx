import { Link } from "react-router-dom";
import { ArrowRight, Award, Building2, HeartPulse, BookOpen, Users, Target, TrendingUp, Quote, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import profileImg from "@/assets/mick-profile.jpeg";

const stats = [
  { value: "30+", label: "Years Experience" },
  { value: "$10M+", label: "Franchise Fees Generated" },
  { value: "2000", label: "Franchises Sold" },
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

const timeline = [
  { year: "1970s–1980s", title: "Clinical Pharmacy Professor", detail: "UCSF Medical Center & Visiting Professor at University of Sydney, Australia" },
  { year: "1990s", title: "Congressional Fellow", detail: "Office of Technology Assessment — added 2 vaccines to Medicare" },
  { year: "2000s", title: "Franchise Sales Leader", detail: "Generated $10M+ in franchise fees across 15 franchisor clients" },
  { year: "2010s+", title: "Executive Consultant", detail: "Advising franchise brands on growth strategy, sales systems, and market expansion" },
];

const capabilities = [
  { icon: Target, title: "Strategic Planning", desc: "Developing comprehensive growth roadmaps for franchise and healthcare organizations." },
  { icon: TrendingUp, title: "Revenue Growth", desc: "Designing sales systems that consistently deliver measurable results and ROI." },
  { icon: Users, title: "Team Building", desc: "Recruiting, training, and mentoring high-performance sales and operations teams." },
  { icon: BookOpen, title: "Published Research", desc: "Peer-reviewed publications in NEJM, JAMA, and the American Journal of Public Health." },
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
                fetchPriority="high"
                decoding="async"
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

    {/* Career Timeline */}
    <section className="bg-cream section-padding">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Career Journey</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Four decades of leadership spanning clinical pharmacy, public policy, and franchise development.
        </p>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
          <div className="space-y-12">
            {timeline.map((item, i) => (
              <div key={item.year} className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`hidden md:block md:w-1/2 ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="card-executive inline-block">
                    <p className="text-gold font-display text-lg font-bold mb-1">{item.year}</p>
                    <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.detail}</p>
                  </div>
                </div>
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-gold border-2 border-background -translate-x-1/2 mt-2 z-10" />
                {/* Mobile card */}
                <div className="md:hidden ml-10">
                  <p className="text-gold font-display text-lg font-bold mb-1">{item.year}</p>
                  <h3 className="font-display text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.detail}</p>
                </div>
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Core Capabilities</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Combining analytical rigor with real-world execution to drive transformative outcomes.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {capabilities.map((c) => (
            <div key={c.title} className="card-executive text-center">
              <div className="w-14 h-14 rounded-full bg-cream flex items-center justify-center mx-auto mb-4">
                <c.icon className="text-gold" size={26} />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{c.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonial / Quote */}
    <section className="relative bg-navy text-primary-foreground section-padding">
      <HeroBackground />
      <div className="section-container relative z-10 text-center max-w-3xl mx-auto">
        <Quote className="text-gold mx-auto mb-6" size={40} />
        <blockquote className="font-display text-2xl md:text-3xl italic leading-relaxed mb-6 text-primary-foreground/90">
          "In both healthcare and franchising, the formula is the same — rigorous analysis, bold action, and unwavering commitment to results."
        </blockquote>
        <p className="text-gold font-semibold">— Dr. Michael (Mick) Riddiough</p>
        <p className="text-primary-foreground/60 text-sm mt-1">PharmD, MPH</p>
      </div>
    </section>

    {/* Why Work With Me */}
    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">Why Work With Dr. Riddiough?</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With over three decades of executive experience across two distinct industries, Dr. Riddiough brings a rare combination of clinical expertise, policy acumen, and franchise development mastery.
            </p>
            <ul className="space-y-4">
              {[
                "Dual-career executive with proven results in both healthcare and franchising",
                "Congressional Fellow with legislative wins that impacted millions of Americans",
                "Award-winning franchise sales leader with $10M+ in documented revenue generation",
                "Published researcher in top-tier medical journals (NEJM, JAMA)",
                "Trusted advisor to franchise brands, healthcare organizations, and investors",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="text-gold mt-0.5 shrink-0" size={20} />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="card-executive p-8 text-center max-w-sm">
              <p className="font-display text-5xl font-bold text-gold mb-2">30+</p>
              <p className="font-display text-xl font-semibold mb-4">Years of Executive Leadership</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                From UCSF Medical Center to the halls of Congress to the boardrooms of America's top franchise brands.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-semibold px-6 py-3 rounded hover:opacity-90 transition-opacity text-sm"
              >
                Read Full Bio <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="bg-cream section-padding">
      <div className="section-container text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Ready to Connect?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Whether you're a franchise brand seeking growth, a board evaluating leadership, or an investor exploring opportunities — let's talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-gold text-accent-foreground font-semibold px-8 py-3 rounded hover:opacity-90 transition-opacity"
          >
            Contact Dr. Riddiough <ArrowRight size={18} />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary hover:text-primary-foreground transition-colors animate-blink"
          >
            Explore Case Studies
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Home;
