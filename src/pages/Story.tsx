import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const storyChapters = [
  {
    label: "Chapter 01",
    title: "THE PROBLEM",
    body: "Fashion became a factory. Identity became a trend cycle. People wore what algorithms told them to wear, not what their soul needed. Clothing lost its meaning — and so did the people wearing it.",
  },
  {
    label: "Chapter 02",
    title: "THE REBELLION",
    body: "We rejected the system. Not loudly, not violently — but quietly, deliberately. We chose to create something that couldn't be replicated, couldn't be scaled, couldn't be reduced to a marketing campaign. Something real.",
  },
  {
    label: "Chapter 03",
    title: "THE MEANING OF NF17",
    body: "NOTFOUND17. Not found in the system. Not found in the mainstream. The number 17 — the age of awakening, the moment you realize you don't have to follow the path they laid out for you. Only 17 pieces per size, because if everyone has it, it means nothing.",
  },
  {
    label: "Chapter 04",
    title: "THE COMMUNITY",
    body: "NF17 isn't a brand you buy — it's a circle you join. Creators, thinkers, rebels, dreamers. People who wear their identity on their sleeve — literally. Every patch tells a story. Every jacket is a conversation.",
  },
];

const Story = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-24"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Brand Story
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground">
              THE ORIGIN
            </h1>
          </motion.div>

          <div className="space-y-32">
            {storyChapters.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9 }}
                className="max-w-3xl"
              >
                <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-4">
                  {ch.label}
                </p>
                <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-8 leading-[0.9]">
                  {ch.title}
                </h2>
                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  {ch.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Story;
