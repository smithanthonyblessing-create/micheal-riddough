import Layout from "@/components/Layout";
import { Globe, ShieldCheck, DollarSign, Users } from "lucide-react";

const CaseStudies = () => (
  <Layout>
    <section className="bg-navy text-primary-foreground py-16 md:py-20">
      <div className="section-container text-center">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Case Studies</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Impact in Action</h1>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container max-w-4xl space-y-16">
        {/* Case Study 1 - Australia */}
        <article className="card-executive">
          <div className="flex items-center gap-3 mb-4">
            <Globe className="text-gold" size={28} />
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">Healthcare / Pharmacy</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Visiting Professor — University of Sydney, Australia
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              <strong className="text-foreground">Background:</strong> While serving as a clinical pharmacy professor at UCSF, Dean Jere Goyan called from Sydney asking Mick to help Australian pharmacy schools implement clinical pharmacy teaching programs — a discipline then unfamiliar to the Australian education system.
            </p>
            <h3 className="font-display text-base font-semibold text-foreground mt-6">Actions Taken</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Educated faculty on the importance of clinical pharmacy education for future pharmacists</li>
              <li>Recommended classwork and clinical rotations for curriculum implementation</li>
              <li>Navigated internal politics between pharmacy and medical schools</li>
              <li>Defined characteristics of effective clinical pharmacy teaching staff</li>
              <li>Advised on institutional services such as a hospital-wide drug information center</li>
            </ul>
            <p className="mt-4 font-medium text-foreground italic">
              "My services were very well received while in Australia."
            </p>
          </div>
        </article>

        {/* Case Study 2 - Congress Vaccines */}
        <article className="card-executive">
          <div className="flex items-center gap-3 mb-4">
            <ShieldCheck className="text-gold" size={28} />
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">Healthcare / Policy</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Convincing Congress to Add Vaccines to Medicare
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              <strong className="text-foreground">Background:</strong> As a Congressional Fellow at the Office of Technology Assessment (OTA), Mick's team evaluated medical technologies for potential inclusion in Medicare's benefit package.
            </p>
            <h3 className="font-display text-base font-semibold text-foreground mt-6">The Project</h3>
            <p>
              Selected pneumococcal and influenza vaccines — proven to prevent disease in people 65+ — for comprehensive evaluation. A team of analysts, policy experts, and clinicians conducted a massive 2-year study measuring the economic and clinical impact of pneumococcal vaccine across the entire United States.
            </p>
            <h3 className="font-display text-base font-semibold text-foreground mt-6">Results</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Study proved millions saved in hospital costs and doctor visits</li>
              <li>Demonstrated significant life-saving outcomes</li>
              <li>"Marketed" the study to chairmen of 4 Congressional health subcommittees</li>
              <li>Law passed within 2 months — Medicare beneficiaries received the vaccine free of charge</li>
              <li>Repeated the process for influenza vaccine the following year with equal success</li>
            </ul>
            <p className="mt-4 font-medium text-foreground italic">
              Published in the New England Journal of Medicine, JAMA, and the American Journal of Public Health.
            </p>
          </div>
        </article>

        {/* Case Study 3 - KRA Franchising */}
        <article className="card-executive">
          <div className="flex items-center gap-3 mb-4">
            <DollarSign className="text-gold" size={28} />
            <span className="text-xs text-gold font-semibold uppercase tracking-wider">Franchising</span>
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            $10M in Franchise Fees for 15 Clients in 3 Years
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
            <p>
              <strong className="text-foreground">Background:</strong> With partner Mark Kiekenapp, Mick co-founded KRA (Kiekenapp and Riddiough Associates), an independent franchise sales company that helped franchisors learn to market and sell their franchises.
            </p>
            <h3 className="font-display text-base font-semibold text-foreground mt-6">Approach</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Attracted 15 franchisor clients simultaneously</li>
              <li>Recruited one proven franchise salesperson per client</li>
              <li>Created customized sales and marketing programs for each brand</li>
              <li>Provided quarterly training for all salespeople</li>
              <li>Daily monitoring and progress tracking for each franchisor</li>
            </ul>
            <h3 className="font-display text-base font-semibold text-foreground mt-6">Results</h3>
            <div className="flex items-center gap-3 mt-2">
              <Users className="text-gold shrink-0" size={20} />
              <p className="font-medium text-foreground">
                $10 million in Initial Franchise Fees generated across 15 clients in 3 years.
              </p>
            </div>
            <p className="mt-4 italic text-foreground">
              "In today's terminology, we unknowingly created a cross between a 'franchise broker' and 'Franchise Sales Organization.' It worked very well."
            </p>
          </div>
        </article>
      </div>
    </section>
  </Layout>
);

export default CaseStudies;
