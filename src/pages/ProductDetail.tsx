import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import patchesImage from "@/assets/patches.jpg";

const sizes = ["S", "M", "L", "XL"];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <Layout>
        <div className="pt-32 pb-24 container mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-muted-foreground hover:text-foreground font-body text-sm underline">
            Back to Products
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero Product */}
      <section className="pt-24 lg:pt-28">
        <div className="container mx-auto px-6 lg:px-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-body text-xs tracking-wider uppercase mb-8"
          >
            <ArrowLeft size={14} /> Back
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="aspect-square overflow-hidden bg-secondary"
            >
              <img
                src={product.image}
                alt={product.imageAlt}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <p className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-2">
                {product.drop}
              </p>
              <h1 className="font-display text-4xl md:text-6xl text-foreground mb-4">
                {product.name}
              </h1>
              <p className="font-body text-2xl text-foreground mb-2">${product.price}</p>
              <p className="font-body text-xs text-accent tracking-wider mb-8">
                Only {product.remaining} of 17 remaining per size
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                {product.description}
              </p>

              {/* Size selector */}
              <div className="mb-8">
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3">
                  Size
                </p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      className="w-12 h-12 border border-border text-foreground font-body text-sm hover:bg-foreground hover:text-primary-foreground transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="bg-foreground text-primary-foreground px-10 py-4 font-body text-sm tracking-[0.15em] uppercase hover:bg-muted-foreground transition-colors w-fit">
                Add to Cart
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 lg:py-32 border-t border-border mt-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
              The Story Behind
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-8">
              {product.name}
            </h2>
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              {product.story}
            </p>
          </div>
        </div>
      </section>

      {/* Patches */}
      <section className="py-24 lg:py-32 border-t border-border">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3">
                Customize
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                MAKE IT YOURS
              </h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Every jacket supports swappable patches. Choose symbols that represent
                your journey, your rebellion, your identity.
              </p>
            </div>
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={patchesImage}
                alt="Swappable patches"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
