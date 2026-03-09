import Layout from "@/components/Layout";
import profileImg from "@/assets/mick-profile.jpeg";
import { Download, GraduationCap, Briefcase, Globe } from "lucide-react";

const About = () => (
  <Layout>
    <section className="bg-navy text-primary-foreground py-16 md:py-20">
      <div className="section-container text-center">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">About</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Dr. Michael (Mick) Riddiough</h1>
        <p className="text-primary-foreground/70 mt-3">PharmD, MPH — Executive Consultant</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile */}
          <div className="flex flex-col items-center lg:items-start gap-6">
            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gold">
              <img src={profileImg} alt="Mick Riddiough" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-3 w-full">
              <a
                href="/downloads/Michael_Riddiough_Resume.docx"
                download
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                <Download size={16} /> Franchise Resume
              </a>
              <a
                href="/downloads/My_Clinical_Pharmacy_Career.docx"
                download
                className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-3 rounded font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <Download size={16} /> Healthcare CV
              </a>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">Executive Biography</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Dr. Michael "Mick" Riddiough is an award-winning Franchise Development Consultant and Healthcare Policy Leader whose career spans three decades of measurable impact across two distinct industries.
              </p>
              <p>
                As President of The Riddiough Group, Mick has helped over 30 franchise companies accelerate growth through customized sales processes, innovative lead generation, and effective team building. His track record includes directing Beef Jerky Outlet's 1,567% growth rate, selling 20 units at $1.4M for Doctors Express, and growing Decorating Den Interiors by 280% at the unit level to international recognition.
              </p>
              <p>
                Before entering franchising, Mick earned his Doctor of Pharmacy (PharmD) from UC San Francisco and a Master of Public Health from UC Berkeley. He served as Assistant Clinical Professor at UCSF, a Visiting Professor at the University of Sydney, and a Congressional Fellow at the U.S. Congress's Office of Technology Assessment — where his research led Congress to add pneumococcal and influenza vaccines to the Medicare benefit package. His work was published in the New England Journal of Medicine, JAMA, and the American Journal of Public Health.
              </p>
            </div>

            {/* Education & Credentials */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="card-executive text-center">
                <GraduationCap className="text-gold mx-auto mb-3" size={28} />
                <h3 className="font-display font-semibold mb-1">Education</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>PharmD — UCSF</li>
                  <li>MPH — UC Berkeley</li>
                  <li>AA — Bakersfield CC</li>
                </ul>
              </div>
              <div className="card-executive text-center">
                <Briefcase className="text-gold mx-auto mb-3" size={28} />
                <h3 className="font-display font-semibold mb-1">Recognition</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>President's Cup Recipient</li>
                  <li>NEJM Published Author</li>
                  <li>Congressional Fellow</li>
                </ul>
              </div>
              <div className="card-executive text-center">
                <Globe className="text-gold mx-auto mb-3" size={28} />
                <h3 className="font-display font-semibold mb-1">Global Reach</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>Visiting Professor — Sydney</li>
                  <li>International Franchising</li>
                  <li>4 Master Licenses</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
