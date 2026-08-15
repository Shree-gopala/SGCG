import { useParams, Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import { getProductById, products, productCategories } from "@/data/products";
import { PAGE_BANNER_GRADIENT } from "@/react-app/lib/pageBanner";
import { ArrowLeft, Check, Phone, Mail, FileText, ArrowRight, Package, FlaskConical, Layers, ChevronRight } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-paper2">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl text-ink mb-4">Product Not Found</h1>
            <p className="text-tx mb-8">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-sgrad text-ink px-6 py-3 rounded-full font-extrabold transition-all duration-300 shadow-glow hover:-translate-y-0.5"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryName = productCategories.find(c => c.id === product.category)?.name || product.category;
  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-paper2">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section
          className="relative pt-32 pb-14 md:pt-40 md:pb-16 border-b border-white/10 overflow-hidden"
          style={{ background: PAGE_BANNER_GRADIENT }}
        >
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
            <nav className="flex items-center gap-2 text-white/60 text-sm mb-4">
              <Link to="/" className="hover:text-saf transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/products" className="hover:text-saf transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-saf font-medium">{product.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="bg-sgrad text-ink text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {categoryName}
              </span>
              <span className="bg-white/10 text-saf border border-white/15 text-sm font-mono px-3 py-1 rounded-full">
                {product.formula}
              </span>
              <span className="bg-white/5 text-white/60 text-xs px-3 py-1 rounded-full">
                {product.cas}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-[#F7F1E1] font-semibold mb-2 tracking-tight">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-white/70 text-sm font-mono mb-1">{product.subtitle}</p>
            )}
            <p className="text-white/50 text-sm">{product.form}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">

              {/* ── Left Column ── */}
              <div className="lg:col-span-2 space-y-7">

                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden bg-white border border-line shadow-soft">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-sgrad text-ink text-sm font-extrabold px-4 py-1.5 rounded-full shadow">
                    {categoryName}
                  </span>
                </div>

                {/* PRODUCT OVERVIEW */}
                <div className="bg-white rounded-2xl p-7 border border-line shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-sgrad rounded-full" />
                    <h2 className="font-serif font-semibold text-ink text-lg uppercase tracking-wide">Product Overview</h2>
                  </div>
                  <p className="text-tx leading-relaxed text-[15px]">{product.overview}</p>
                </div>

                {/* TECHNICAL SPECIFICATIONS */}
                {product.technicalSpecs && product.technicalSpecs.length > 0 && (
                  <div className="bg-white rounded-2xl p-7 border border-line shadow-soft">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1 h-6 bg-sgrad rounded-full" />
                      <h2 className="font-serif font-semibold text-ink text-lg uppercase tracking-wide">Technical Specifications</h2>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-line">
                      <table className="w-full text-sm">
                        <tbody>
                          {product.technicalSpecs.map((spec, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-paper2" : "bg-white"}>
                              <td className="px-5 py-3 font-semibold text-tx w-1/2 border-r border-line">{spec.label}</td>
                              <td className="px-5 py-3 text-mut font-mono">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* KEY APPLICATIONS */}
                {product.keyApplications && product.keyApplications.length > 0 && (
                  <div className="bg-white rounded-2xl p-7 border border-line shadow-soft">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1 h-6 bg-sgrad rounded-full" />
                      <h2 className="font-serif font-semibold text-ink text-lg uppercase tracking-wide">Key Applications</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-2.5">
                      {product.keyApplications.map((app, i) => (
                        <div key={i} className="flex items-start gap-2.5 bg-saf/10 rounded-lg px-4 py-2.5">
                          <Check className="w-4 h-4 text-saf2 mt-0.5 flex-shrink-0" />
                          <span className="text-tx text-sm leading-snug">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* QUALITY ASSURANCE + BADGES */}
                <div className="bg-paper2 border border-line rounded-2xl p-7 shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-sgrad rounded-full" />
                    <h2 className="font-serif font-semibold text-ink text-lg uppercase tracking-wide">Quality Assurance</h2>
                  </div>
                  <p className="text-tx text-sm leading-relaxed mb-5">
                    Every batch of {product.name} undergoes rigorous quality testing in our in-house laboratory before dispatch. We provide Certificate of Analysis (COA) and Technical Data Sheets (TDS) with every shipment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["BIS Certified", "COA with Every Batch", "PAN India Delivery", "Custom Grades"].map((badge) => (
                      <div key={badge} className="flex flex-col items-center gap-1.5 bg-white border border-line shadow-sm rounded-xl px-3 py-3 text-center">
                        <Check className="w-5 h-5 text-saf2" />
                        <span className="text-ink text-xs font-semibold leading-tight">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PACKAGING & SUPPLY */}
                <div className="bg-white rounded-2xl p-7 border border-line shadow-soft">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-sgrad rounded-full" />
                    <h2 className="font-serif font-semibold text-ink text-lg uppercase tracking-wide">Packaging & Supply</h2>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-saf2 mt-0.5 flex-shrink-0" />
                    <p className="text-tx text-sm leading-relaxed">{product.packaging}</p>
                  </div>
                </div>
              </div>

              {/* ── Right Sidebar ── */}
              <div className="space-y-5 lg:sticky lg:top-28">

                {/* Grades / Purity */}
                {product.purityGrades && product.purityGrades.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-line shadow-soft">
                    <div className="flex items-center gap-2 mb-4">
                      <Layers className="w-5 h-5 text-saf2" />
                      <h3 className="font-serif font-semibold text-ink">Available Grades</h3>
                    </div>
                    <div className="space-y-2">
                      {product.purityGrades.map((grade, i) => (
                        <div key={i} className="flex items-center gap-2 bg-paper2 rounded-lg px-3 py-2">
                          <div className="w-2 h-2 rounded-full bg-saf2 flex-shrink-0" />
                          <span className="text-tx text-sm">{grade}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industries */}
                {product.industries && product.industries.length > 0 && (
                  <div className="bg-white rounded-2xl p-6 border border-line shadow-soft">
                    <div className="flex items-center gap-2 mb-4">
                      <FlaskConical className="w-5 h-5 text-saf2" />
                      <h3 className="font-serif font-semibold text-ink">Industries Served</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {product.industries.map((ind, i) => (
                        <span key={i} className="bg-saf/10 text-saf2 text-xs font-medium px-3 py-1.5 rounded-full border border-saf/20">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Request a Quote */}
                <div className="bg-white rounded-2xl overflow-hidden border border-line shadow-soft">
                  <div className="bg-sgrad px-6 py-5">
                    <h3 className="font-serif font-semibold text-ink text-lg">Request a Quote</h3>
                    <p className="text-ink/70 text-sm mt-1">
                      Get pricing & availability for {product.name}. Reply within 24 hours.
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <a href="tel:+919999665479" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-saf/10 rounded-xl flex items-center justify-center group-hover:bg-saf/20 transition-colors">
                        <Phone className="w-5 h-5 text-saf2" />
                      </div>
                      <div>
                        <p className="text-xs text-mut uppercase tracking-wider">Call / WhatsApp</p>
                        <p className="font-semibold text-saf2">+91 9999665479</p>
                      </div>
                    </a>
                    <a href="mailto:shreegopalasanwariachechemicals@gmail.com" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-saf/10 rounded-xl flex items-center justify-center group-hover:bg-saf/20 transition-colors">
                        <Mail className="w-5 h-5 text-saf2" />
                      </div>
                      <div>
                        <p className="text-xs text-mut uppercase tracking-wider">Email</p>
                        <p className="font-semibold text-saf2 text-xs">shreegopalasanwariachemicals@gmail.com</p>
                      </div>
                    </a>
                    <Link
                      to="/contact"
                      className="block w-full bg-sgrad text-ink text-center py-3 rounded-xl font-extrabold transition-all duration-300 shadow-glow hover:-translate-y-0.5"
                    >
                      Get Consultation
                    </Link>
                  </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 border border-line shadow-soft">
                    <h3 className="font-serif font-semibold text-ink mb-4">Related Products</h3>
                    <div className="space-y-3">
                      {relatedProducts.map((rel) => (
                        <Link
                          key={rel.id}
                          to={`/products/${rel.id}`}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-paper2 transition-colors group"
                        >
                          <img
                            src={rel.imageUrl}
                            alt={rel.name}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=100";
                            }}
                          />
                          <div>
                            <p className="font-medium text-ink group-hover:text-saf2 transition-colors text-sm leading-tight">
                              {rel.name}
                            </p>
                            <p className="text-xs text-mut font-mono mt-0.5">{rel.formula}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-mut group-hover:text-saf2 ml-auto transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brochure */}
                <div className="bg-white rounded-2xl p-5 border border-line shadow-soft">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-paper2 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-mut" />
                    </div>
                    <div>
                      <h3 className="font-serif font-semibold text-ink text-sm">Product Brochure</h3>
                      <p className="text-mut text-xs mt-1">
                        Detailed specifications, SDS & TDS available on request.
                      </p>
                      <Link
                        to="/contact"
                        className="text-saf2 text-sm font-medium mt-2 inline-flex items-center gap-1 hover:text-saf"
                      >
                        Contact us <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2A1B08] py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-[#F7F1E1] font-semibold mb-3 tracking-tight">
              Need This Product in Bulk?
            </h2>
            <p className="text-white/70 mb-6 max-w-xl mx-auto">
              We offer competitive pricing for bulk orders with flexible delivery options across India. Contact our sales team for a customized quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-sgrad text-ink px-6 py-3 rounded-full font-extrabold transition-all duration-300 shadow-glow hover:-translate-y-0.5"
              >
                Request Bulk Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-white/20 text-white/80 px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
