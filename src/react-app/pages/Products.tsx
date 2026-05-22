import { useState } from "react";
import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { products, productCategories, type Product } from "@/data/products";
import { Check, ArrowRight } from "lucide-react";

const categoryLabels: Record<string, string> = {
  "zinc-chemicals": "Zinc Chemicals",
  "metal-powders": "Metal Powders",
  "metal-ingots": "Metal Ingots",
};

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group border border-gray-100">
      {/* Product Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Category Badge */}
        <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          {categoryLabels[product.category]}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5">
        {/* Product Name & Formula */}
        <div className="flex items-baseline gap-2 mb-2">
          <h3 className="font-bold text-gray-900 text-lg">{product.name}</h3>
          <span className="text-gray-400 text-sm font-mono">{product.formula}</span>
        </div>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* View Details Link */}
        <Link
          to={`/products/${product.id}`}
          className="inline-flex items-center gap-1 text-orange-500 font-semibold text-sm hover:text-orange-600 transition-colors group/link"
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

  const filteredProducts = activeCategory === "all" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  const allCategories = [
    { id: "all", name: "All Products" },
    ...productCategories,
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Banner Section */}
        <section className="relative pt-32 pb-12 md:pt-44 md:pb-16 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=1600')" }}
          />
          <div className="absolute inset-0 bg-gray-900/70" />
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-3">
              Our Products
            </h1>
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <span className="text-orange-400">Products</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8 text-center">
            <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
              Our Product Range
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-gray-900 mt-3 mb-4">
              Quality Chemicals & Metals
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of zinc chemicals, metal powders, and ingots 
              manufactured to the highest quality standards.
            </p>

            {/* Category Tabs */}
            <div className="overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar">
              <div className="flex justify-center gap-2 md:gap-3 min-w-max">
                {allCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category.id
                        ? "bg-orange-500 text-white shadow-lg shadow-orange-500/25"
                        : "bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500"
                    }`}
                  >
                    {activeCategory === category.id && <Check className="w-4 h-4" />}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid Section */}
        <section className="py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            {/* Dark rounded card */}
            <div className="bg-gray-900 rounded-3xl overflow-hidden">
              <div className="flex flex-col lg:flex-row items-stretch">
                {/* Left - Text Content */}
                <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                  <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-6">
                    <span className="text-white">Need </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500">Custom</span>
                    <br />
                    <span className="text-white">Specifications?</span>
                  </h2>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-fit px-8 py-3.5 bg-sky-500 hover:bg-sky-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-sky-500/30 uppercase tracking-wider text-sm"
                  >
                    Request a Quote
                  </Link>
                </div>

                {/* Right - Image */}
                <div className="lg:w-[45%] p-4 md:p-6 lg:p-8">
                  <div className="h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80"
                      alt="Chemical manufacturing facility"
                      className="w-full h-full object-cover"
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
