import { useParams, Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { getProductById, products, productCategories } from "@/data/products";
import { ArrowLeft, Check, Phone, Mail, FileText, ArrowRight, Package, FlaskConical, Layers, ChevronRight } from "lucide-react";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="font-serif text-4xl text-gray-900 mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative pt-32 pb-14 md:pt-40 md:pb-16 bg-gradient-to-r from-orange-50 via-white to-orange-100/40 border-b border-orange-100/50 overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8">
            <nav className="flex items-center gap-2 text-gray-500 text-sm mb-4 animate-fade-in-up">
              <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/products" className="hover:text-orange-500 transition-colors">Products</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-orange-600 font-medium">{product.name}</span>
            </nav>
            <div className="flex flex-wrap items-center gap-3 mb-3 animate-fade-in-up animation-delay-100">
              <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                {categoryName}
              </span>
              <span className="bg-orange-50 text-orange-800 border border-orange-100 text-sm font-mono px-3 py-1 rounded-full">
                {product.formula}
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {product.cas}
              </span>
            </div>
            <h1 className="font-serif text-3xl md:text-5xl text-gray-900 font-bold mb-2 animate-fade-in-up animation-delay-200">
              {product.name}
            </h1>
            {product.subtitle && (
              <p className="text-gray-600 text-sm font-mono mb-1 animate-fade-in-up animation-delay-300">{product.subtitle}</p>
            )}
            <p className="text-gray-500 text-sm animate-fade-in-up animation-delay-300">{product.form}</p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-10 md:py-14">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-8 items-start">

              {/* ── Left Column ── */}
              <div className="lg:col-span-2 space-y-7">

                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-64 md:h-80 object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full shadow">
                    {categoryName}
                  </span>
                </div>

                {/* PRODUCT OVERVIEW */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-orange-500 rounded-full" />
                    <h2 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Product Overview</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-[15px]">{product.overview}</p>
                </div>

                {/* TECHNICAL SPECIFICATIONS */}
                {product.technicalSpecs && product.technicalSpecs.length > 0 && (
                  <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                    <div className="flex items-center gap-2 mb-5">
                      <div className="w-1 h-6 bg-orange-500 rounded-full" />
                      <h2 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Technical Specifications</h2>
                    </div>
                    <div className="overflow-hidden rounded-xl border border-gray-100">
                      <table className="w-full text-sm">
                        <tbody>
                          {product.technicalSpecs.map((spec, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                              <td className="px-5 py-3 font-semibold text-gray-700 w-1/2 border-r border-gray-100">{spec.label}</td>
                              <td className="px-5 py-3 text-gray-600 font-mono">{spec.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* KEY APPLICATIONS */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-5">
                    <div className="w-1 h-6 bg-orange-500 rounded-full" />
                    <h2 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Key Applications</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {product.keyApplications.map((app, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-orange-50 rounded-lg px-4 py-2.5">
                        <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm leading-snug">{app}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* QUALITY ASSURANCE + BADGES */}
                <div className="bg-gradient-to-br from-orange-50/60 to-orange-100/30 border border-orange-100/50 rounded-2xl p-7 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-orange-500 rounded-full" />
                    <h2 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Quality Assurance</h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">
                    Every batch of {product.name} undergoes rigorous quality testing in our in-house laboratory before dispatch. We provide Certificate of Analysis (COA) and Technical Data Sheets (TDS) with every shipment.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {["BIS Certified", "COA with Every Batch", "PAN India Delivery", "Custom Grades"].map((badge) => (
                      <div key={badge} className="flex flex-col items-center gap-1.5 bg-white border border-orange-100/40 shadow-sm rounded-xl px-3 py-3 text-center">
                        <Check className="w-5 h-5 text-orange-600" />
                        <span className="text-gray-800 text-xs font-semibold leading-tight">{badge}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* PACKAGING & SUPPLY */}
                <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-1 h-6 bg-orange-500 rounded-full" />
                    <h2 className="font-bold text-gray-900 text-lg uppercase tracking-wide">Packaging & Supply</h2>
                  </div>
                  <div className="flex items-start gap-3">
                    <Package className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-700 text-sm leading-relaxed">{product.packaging}</p>
                  </div>
                </div>
              </div>

              {/* ── Right Sidebar ── */}
              <div className="space-y-5 lg:sticky lg:top-28">

                {/* Grades / Purity */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-gray-900">Available Grades</h3>
                  </div>
                  <div className="space-y-2">
                    {product.purityGrades.map((grade, i) => (
                      <div key={i} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                        <div className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{grade}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Industries */}
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <FlaskConical className="w-5 h-5 text-orange-500" />
                    <h3 className="font-bold text-gray-900">Industries Served</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.industries.map((ind, i) => (
                      <span key={i} className="bg-orange-50 text-orange-700 text-xs font-medium px-3 py-1.5 rounded-full border border-orange-100">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Request a Quote */}
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 px-6 py-5">
                    <h3 className="font-bold text-white text-lg">Request a Quote</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Get pricing & availability for {product.name}. Reply within 24 hours.
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <a href="tel:+919999665479" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Phone className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Call / WhatsApp</p>
                        <p className="font-semibold text-orange-500">+91 9999665479</p>
                      </div>
                    </a>
                    <a href="mailto:shreegopalasanwariachemicals@gmail.com" className="flex items-center gap-3 group">
                      <div className="w-10 h-10 bg-orange-50 rounded-xl flex items-center justify-center group-hover:bg-orange-100 transition-colors">
                        <Mail className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                        <p className="font-semibold text-orange-500 text-xs">shreegopalasanwariachemicals@gmail.com</p>
                      </div>
                    </a>
                    <Link
                      to="/contact"
                      className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-xl font-semibold transition-colors"
                    >
                      Get Consultation
                    </Link>
                  </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-4">Related Products</h3>
                    <div className="space-y-3">
                      {relatedProducts.map((rel) => (
                        <Link
                          key={rel.id}
                          to={`/products/${rel.id}`}
                          className="flex items-center gap-3 p-2 rounded-xl hover:bg-gray-50 transition-colors group"
                        >
                          <img
                            src={rel.imageUrl}
                            alt={rel.name}
                            className="w-12 h-12 object-cover rounded-lg flex-shrink-0"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100";
                            }}
                          />
                          <div>
                            <p className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors text-sm leading-tight">
                              {rel.name}
                            </p>
                            <p className="text-xs text-gray-400 font-mono mt-0.5">{rel.formula}</p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-orange-500 ml-auto transition-colors" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Brochure */}
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Product Brochure</h3>
                      <p className="text-gray-400 text-xs mt-1">
                        Detailed specifications, SDS & TDS available on request.
                      </p>
                      <Link
                        to="/contact"
                        className="text-orange-500 text-sm font-medium mt-2 inline-flex items-center gap-1 hover:text-orange-600"
                      >
                        Contact us <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-50/50 via-orange-50 to-orange-100/20 border-t border-orange-100/40 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-gray-900 font-bold mb-3">
              Need This Product in Bulk?
            </h2>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              We offer competitive pricing for bulk orders with flexible delivery options across India. Contact our sales team for a customized quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
              >
                Request Bulk Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center gap-2 border border-orange-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors"
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
