import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import heroImage from "@/assets/hero-main.jpg";
import lifestyleImage from "@/assets/lifestyle-1.jpg";
import patchesImage from "@/assets/patches.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8 },
  }),
};

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img src={heroImage} alt="NOTFOUND17 hero campaign" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/60" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-12 pb-16 lg:pb-24">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4"
            >
              Drop 001 — Limited to 17 pieces per size
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-8"
            >
              FOR THOSE WHO WERE NEVER MEANT TO FIT IN.
            </motion.h1>
            <motion.div variants={fadeUp} custom={2} className="flex flex-wrap gap-4">
              <Link
                to="/products"
                className="bg-foreground text-primary-foreground px-8 py-4 font-body text-sm tracking-[0.15em] uppercase hover:bg-muted-foreground transition-colors inline-flex items-center gap-3"
              >
                Explore Drop <ArrowRight size={16} />
              </Link>
              <button className="border border-foreground text-foreground px-8 py-4 font-body text-sm tracking-[0.15em] uppercase hover:bg-foreground hover:text-primary-foreground transition-colors">
                Join Early Access
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Limited Drop */}
      <section className="py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Limited Drop
            </p>
            <h2 className="font-display text-4xl md:text-6xl text-foreground">
              ONLY 17 PER SIZE.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="aspect-square overflow-hidden bg-secondary mb-4">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                        {product.drop}
                      </p>
                      <h3 className="font-display text-xl text-foreground">
                        {product.name}
                      </h3>
                    </div>
                    <div className="text-right">
                      <p className="font-body text-sm text-foreground">${product.price}</p>
                      <p className="font-body text-[10px] text-accent tracking-wider">
                        {product.remaining} left
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Identity Section */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-8">
                NOT JUST CLOTHING.
                <br />
                <span className="text-muted-foreground">AN IDENTITY.</span>
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md">
                NOTFOUND17 doesn't follow trends. Every piece carries meaning — a rejection
                of the ordinary, an embrace of what makes you different. This is denim
                with a soul.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              className="aspect-square overflow-hidden"
            >
              <img
                src={lifestyleImage}
                alt="NF17 lifestyle"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Patches Section */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="order-2 lg:order-1 aspect-[16/10] overflow-hidden"
            >
              <img
                src={patchesImage}
                alt="NOTFOUND17 swappable patches"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                The Patch Concept
              </p>
              <h2 className="font-display text-4xl md:text-6xl text-foreground mb-6">
                YOUR STORY. YOUR PATCHES.
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-md mb-8">
                Every NF17 jacket comes with swappable patches — symbols that represent
                your personal journey. A skull for defiance. A compass for direction.
                A broken chain for freedom. Choose the ones that tell your truth.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { symbol: "☠", meaning: "Defiance" },
                  { symbol: "⎈", meaning: "Direction" },
                  { symbol: "⛓", meaning: "Freedom" },
                  { symbol: "👁", meaning: "Awareness" },
                ].map((patch) => (
                  <div
                    key={patch.meaning}
                    className="border border-border p-4 group hover:border-foreground transition-colors"
                  >
                    <span className="text-2xl mb-2 block">{patch.symbol}</span>
                    <p className="font-body text-xs tracking-wider uppercase text-muted-foreground group-hover:text-foreground transition-colors">
                      {patch.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Community
            </p>
            <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
              JOIN THE NF17 CIRCLE
            </h2>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-10">
              Be the first to know about new drops, exclusive stories, and early access.
              This isn't a newsletter — it's an invitation.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-secondary text-foreground px-6 py-4 text-sm font-body border border-border focus:outline-none focus:border-foreground transition-colors"
              />
              <button className="w-full sm:w-auto bg-foreground text-primary-foreground px-8 py-4 font-body text-sm tracking-[0.15em] uppercase whitespace-nowrap hover:bg-muted-foreground transition-colors">
                Join
              </button>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram size={18} />
              <span className="font-body text-xs tracking-[0.2em] uppercase">Follow @notfound17</span>
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
