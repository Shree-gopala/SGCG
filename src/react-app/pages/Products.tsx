import { useMemo, useState } from "react";
import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import Kicker from "@/react-app/components/Kicker";
import { PAGE_BANNER_GRADIENT } from "@/react-app/lib/pageBanner";
import { products, productCategories, type Product } from "@/data/products";
import { Check, ArrowRight, Search } from "lucide-react";

const categoryLabels: Record<string, string> = {
  "chemicals": "Chemicals",
  "metal-powders": "Metal Powders",
  "metal-ingots": "Metal Ingots",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-lg transition-all duration-300 group border border-line">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-sgrad text-ink text-xs font-extrabold px-3 py-1 rounded-full">
          {categoryLabels[product.category]}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5">
        {/* Product Name & Formula */}
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="font-serif font-semibold text-ink text-lg">{product.name}</h3>
          <span className="text-mut text-sm font-mono">{product.formula}</span>
        </div>

        {/* Description */}
        <p className="text-tx text-sm leading-relaxed mb-4 line-clamp-2">
          {product.overview}
        </p>

        {/* View Details Link */}
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-1 text-saf2 font-semibold text-sm hover:text-saf transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    const byCategory = activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);
    const q = searchTerm.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter(
      (p) => p.name.toLowerCase().includes(q) || p.formula.toLowerCase().includes(q)
    );
  }, [activeCategory, searchTerm]);

  const allCategories = [
    { id: "all", name: "All Products" },
    ...productCategories,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-paper2">
      <Header />

      <main className="flex-1">
        {/* Banner Section */}
        <section
          className="relative pt-32 pb-12 md:pt-40 md:pb-16 border-b border-white/10 overflow-hidden"
          style={{ background: PAGE_BANNER_GRADIENT }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#F7F1E1] font-semibold mb-3 animate-fade-in-up tracking-tight">
              Our <span className="italic text-transparent bg-clip-text bg-sgrad">Products</span>
            </h1>
            <nav className="flex items-center justify-center gap-2 text-white/60 text-sm animate-fade-in-up animation-delay-200">
              <Link to="/" className="hover:text-saf transition-colors">Home</Link>
              <span>›</span>
              <span className="text-saf font-medium">Products</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <Kicker center>Our Product Range</Kicker>
            <h2 className="font-serif text-3xl md:text-4xl text-ink mt-3 mb-4 tracking-tight">
              Quality Chemicals & Metals
            </h2>
            <p className="text-mut text-lg max-w-2xl mx-auto mb-10">
              Explore our comprehensive range of zinc chemicals, metal powders, and ingots
              manufactured to the highest quality standards.
            </p>

            {/* Search */}
            <div className="max-w-md mx-auto mb-6 relative">
              <Search className="w-4 h-4 text-mut absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search products or formula…"
                className="w-full pl-11 pr-4 py-3 rounded-full border border-line bg-paper2 text-sm text-ink placeholder:text-mut focus:outline-none focus:ring-2 focus:ring-saf2/30 focus:border-saf2 transition-all"
              />
            </div>

            {/* Category Tabs */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
              <div className="flex justify-center gap-2 md:gap-3 min-w-max">
                {allCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-sgrad text-ink shadow-glow"
                        : "bg-white text-tx border border-line hover:border-saf/40 hover:text-saf2"
                    }`}
                  >
                    {activeCategory === category.id && <Check className="w-4 h-4" />}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-mut">No products found matching your search.</p>
              </div>
            )}
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-paper2">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Light rounded card */}
            <div className="bg-white border border-line rounded-3xl overflow-hidden shadow-soft">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left - Text Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-6 tracking-tight">
                    <span className="text-ink">Need </span>
                    <span className="italic text-transparent bg-clip-text bg-sgrad">Custom</span>
                    <br />
                    <span className="text-ink">Specifications?</span>
                  </h2>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-fit px-8 py-3.5 bg-sgrad text-ink font-extrabold rounded-full transition-all duration-300 shadow-glow hover:-translate-y-0.5 uppercase tracking-wider text-sm"
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Right - Image */}
                <div className="lg:w-[45%] p-4 md:p-6 lg:p-8">
                  <div className="h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800"
                      alt="Chemical manufacturing facility"
                      className="w-full h-full object-cover animate-ken-burns"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
