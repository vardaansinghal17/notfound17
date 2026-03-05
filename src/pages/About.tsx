import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import lifestyleImage from "@/assets/lifestyle-1.jpg";

const About = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-20"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              About
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-8">
              NOTFOUND17 IS AN IDENTITY FOR THOSE WHO NEVER FIT INTO CONVENTIONAL SYSTEMS.
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] overflow-hidden"
            >
              <img src={lifestyleImage} alt="NF17 vision" className="w-full h-full object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:pt-12"
            >
              <div className="space-y-10">
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-4">Mission</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    We create limited-edition denim that carries meaning. Every jacket is a canvas
                    for your identity — not a trend to follow, but a statement to make. Only 17
                    pieces per size, because individuality shouldn't be mass-produced.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-4">Philosophy</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    Fashion has lost its soul. It's become about algorithms and hype cycles instead
                    of personal expression. NF17 exists to bring meaning back — through storytelling,
                    symbolism, and scarcity that creates value beyond price tags.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-2xl text-foreground mb-4">Founder Vision</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    "I started NF17 because I was tired of wearing clothes that said nothing about
                    who I am. The number 17 represents the age when I realized that not fitting in
                    wasn't a flaw — it was a superpower."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
