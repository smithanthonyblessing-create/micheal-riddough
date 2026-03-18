import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import { Link } from "react-router-dom";
import { TrendingUp, Users, Target, Megaphone, ArrowRight } from "lucide-react";

const clients = [
  { name: "Beef Jerky Outlet", result: "1,567% growth, 220 franchises awarded, President's Cup", period: "2013–2017" },
  { name: "Doctors Express", result: "20 units sold totalling $1.4M in one year", period: "2012–2013" },
  { name: "Decorating Den Interiors", result: "280% unit growth, 60 regional franchises, 4 international licenses", period: "1986–1999" },
  { name: "1-800-JUNKPRO", result: "7-step qualification process, Discovery Day program", period: "2018–Present" },
  { name: "Max Muscle Sports Nutrition", result: "Grew from 30 to 120+ units plus 12 regional franchises", period: "2007–2009" },
  { name: "Kolache Factory", result: "Built sales process from scratch, 2 franchises awarded", period: "2017–2018" },
];

const services = [
  { icon: Target, title: "Customized Sales Process", desc: "Full-cycle franchise qualification and education programs tailored to each brand." },
  { icon: Megaphone, title: "Strategic Lead Generation", desc: "Targeted marketing campaigns and candidate nurturing programs that deliver qualified leads." },
  { icon: Users, title: "Sales Team Development", desc: "Building and training high-performing franchise sales teams and outsourced development." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven growth plans that have generated $10M+ in initial franchise fees for 15 franchisors in 3 years." },
];

const Franchise = () => (
  <Layout>
    <section className="relative bg-navy text-primary-foreground py-16 md:py-20">
      <HeroBackground />
      <div className="section-container text-center relative z-10">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Franchise Development</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Growing Brands.<br />Driving Results.</h1>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          Over 30 franchise companies grown through proven sales processes, innovative marketing, and dedicated support.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Core Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="card-executive flex gap-4">
              <s.icon className="text-gold shrink-0 mt-1" size={28} />
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-cream section-padding">
      <div className="section-container">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Client Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c) => (
            <div key={c.name} className="card-executive">
              <p className="text-xs text-muted-foreground mb-1">{c.period}</p>
              <h3 className="font-display text-lg font-semibold mb-2">{c.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{c.result}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/case-studies" className="inline-flex items-center gap-2 text-gold font-semibold hover:underline animate-blink">
            View Detailed Case Studies <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Franchise;
