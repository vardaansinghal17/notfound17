import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { products } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              Collection
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-foreground">
              ALL DROPS
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.7 }}
              >
                <Link to={`/products/${product.id}`} className="group block">
                  <div className="aspect-square overflow-hidden bg-secondary mb-5">
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-1">
                    {product.drop}
                  </p>
                  <h2 className="font-display text-2xl text-foreground mb-1">{product.name}</h2>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm text-foreground">${product.price}</p>
                    <p className="font-body text-[10px] text-accent tracking-wider uppercase">
                      {product.remaining} of 17 remaining
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
