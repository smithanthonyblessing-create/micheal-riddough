import Layout from "@/components/Layout";
import HeroBackground from "@/components/HeroBackground";
import { Mail, Phone, Linkedin, Calendar, MapPin } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="relative bg-navy text-primary-foreground py-16 md:py-20">
      <HeroBackground />
      <div className="section-container text-center relative z-10">
        <p className="text-gold font-semibold tracking-widest uppercase text-sm mb-4">Contact</p>
        <h1 className="font-display text-4xl md:text-5xl font-bold">Let's Connect</h1>
        <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
          Available for franchise consulting engagements, board advisory roles, speaking engagements, and strategic partnerships.
        </p>
      </div>
    </section>

    <section className="section-padding">
      <div className="section-container max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-bold">Get in Touch</h2>
            <div className="space-y-5">
              <a href="mailto:mariddiough@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-medium group-hover:text-gold transition-colors">mick@theriddioughgroup.com</p>
                </div>
              </a>
              <a href="tel:3365759585" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-medium group-hover:text-gold transition-colors">(336) 575-9585</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-medium">Indian Trail, SC 29707</p>
                </div>
              </div>
              <a href="https://www.linkedin.com/in/mickriddiough" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Linkedin className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">LinkedIn</p>
                  <p className="font-medium group-hover:text-gold transition-colors">Connect on LinkedIn</p>
                </div>
              </a>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Calendar className="text-gold" size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">Schedule a Meeting</p>
                  <p className="font-medium group-hover:text-gold transition-colors">Book via Calendly</p>
                </div>
              </a>
            </div>
          </div>

          <div className="card-executive flex flex-col justify-center">
            <h3 className="font-display text-xl font-bold mb-4">Who Should Reach Out?</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><span className="text-gold font-bold">→</span><span><strong className="text-foreground">Franchisors</strong> seeking to accelerate unit growth and sales</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span><span><strong className="text-foreground">Boards & Advisory Groups</strong> looking for franchise industry expertise</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span><span><strong className="text-foreground">Investors</strong> evaluating franchise opportunities</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span><span><strong className="text-foreground">Conference Organizers</strong> seeking an experienced franchise speaker</span></li>
              <li className="flex gap-2"><span className="text-gold font-bold">→</span><span><strong className="text-foreground">Recruiters</strong> with executive-level franchise roles</span></li>
            </ul>
            <div className="mt-6 flex flex-col gap-3">
              <a href="/downloads/Michael_Riddiough_Resume.docx" download className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded font-semibold text-sm hover:opacity-90 transition-opacity">Download Franchise Resume</a>
              <a href="/downloads/My_Clinical_Pharmacy_Career.docx" download className="flex items-center justify-center gap-2 border-2 border-primary text-primary px-5 py-3 rounded font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-colors">Download Healthcare CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
