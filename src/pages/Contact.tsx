import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Contact
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-foreground mb-8">
                GET IN TOUCH
              </h1>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mb-12">
                For inquiries, collaborations, or press — reach out. We respond to
                those who have something to say.
              </p>

              <div className="space-y-6">
                <a
                  href="mailto:hello@notfound17.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} />
                  <span className="font-body text-sm">hello@notfound17.com</span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Instagram size={18} />
                  <span className="font-body text-sm">@notfound17</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-secondary text-foreground px-5 py-4 text-sm font-body border border-border focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-secondary text-foreground px-5 py-4 text-sm font-body border border-border focus:outline-none focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Subject
                  </label>
                  <select className="w-full bg-secondary text-foreground px-5 py-4 text-sm font-body border border-border focus:outline-none focus:border-foreground transition-colors appearance-none">
                    <option>General Inquiry</option>
                    <option>Press</option>
                    <option>Collaboration</option>
                    <option>Wholesale</option>
                  </select>
                </div>
                <div>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-secondary text-foreground px-5 py-4 text-sm font-body border border-border focus:outline-none focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-foreground text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.15em] uppercase hover:bg-muted-foreground transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
