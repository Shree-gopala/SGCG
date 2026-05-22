import { useParams, Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { getProductById, products, productCategories } from "@/data/products";
import { ArrowLeft, Check, Phone, Mail, FileText, ArrowRight } from "lucide-react";

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
  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

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
              {product.name}
            </h1>
            <nav className="flex items-center justify-center gap-2 text-white/80 text-sm">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <span>›</span>
              <Link to="/products" className="hover:text-white transition-colors">Products</Link>
              <span>›</span>
              <span className="text-orange-400">{product.name}</span>
            </nav>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 md:py-12">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Left Column - Product Info */}
              <div className="lg:col-span-2 space-y-8">
                {/* Product Image */}
                <div className="relative rounded-2xl overflow-hidden">
                  <img 
                    src={product.imageUrl || "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800"} 
                    alt={product.name}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-orange-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                    {categoryName}
                  </span>
                </div>

                {/* Product Title */}
                <div>
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                    <span className="uppercase tracking-wider">{categoryName}</span>
                    <span className="font-mono text-orange-500">{product.formula}</span>
                  </div>
                  <h1 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mb-4">
                    {product.name}
                  </h1>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Available Grades */}
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="w-5 h-5 text-orange-500" />
                    <h2 className="font-bold text-gray-900">Available Grades</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {product.purityGrades.map((grade, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {grade}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Industrial Applications */}
                <div className="bg-white rounded-xl p-6 border border-gray-100">
                  <div className="flex items-center gap-2 mb-4">
                    <Check className="w-5 h-5 text-orange-500" />
                    <h2 className="font-bold text-gray-900">Industrial Applications</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {product.keyApplications.map((app, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">
                          {app.title} — <span className="text-gray-500">{app.description}</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quality Assurance */}
                <div className="bg-gray-800 rounded-xl p-6">
                  <h2 className="font-bold text-white mb-2">Quality Assurance</h2>
                  <p className="text-gray-300 text-sm mb-4">
                    Every batch of {product.name} undergoes rigorous quality testing in our in-house laboratory before dispatch. We provide detailed test certificates and can customize specifications to meet your exact requirements.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Check className="w-4 h-4" /> Lab Tested
                    </span>
                    <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Check className="w-4 h-4" /> Certificate Provided
                    </span>
                    <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                      <Check className="w-4 h-4" /> Custom Specs
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Sidebar */}
              <div className="space-y-6">
                {/* Request a Quote Card */}
                <div className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="bg-orange-500 px-5 py-4">
                    <h3 className="font-bold text-white">Request a Quote</h3>
                    <p className="text-white/80 text-sm mt-1">
                      Get pricing and availability for {product.name}. Our team will respond within 24 hours.
                    </p>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Phone className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Call Us</p>
                        <p className="font-semibold text-orange-500">+91-8708108686</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                        <Mail className="w-5 h-5 text-orange-500" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                        <p className="font-semibold text-orange-500 text-sm">ghanshyam.kumar.sgsc@gmail.com</p>
                      </div>
                    </div>
                    <Link 
                      to="/contact"
                      className="block w-full bg-orange-500 text-white text-center py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                    >
                      Get Consultation
                    </Link>
                  </div>
                </div>

                {/* Related Products */}
                {relatedProducts.length > 0 && (
                  <div className="bg-white rounded-xl p-5 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-orange-500" />
                      Related Products
                    </h3>
                    <div className="space-y-3">
                      {relatedProducts.map((relProduct) => (
                        <Link 
                          key={relProduct.id}
                          to={`/products/${relProduct.id}`}
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <img 
                            src={relProduct.imageUrl || "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=100"} 
                            alt={relProduct.name}
                            className="w-12 h-12 object-cover rounded-lg"
                          />
                          <div>
                            <p className="font-medium text-gray-900 group-hover:text-orange-500 transition-colors text-sm">
                              {relProduct.name}
                            </p>
                            <p className="text-xs text-gray-500 font-mono">{relProduct.formula}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Brochure */}
                <div className="bg-white rounded-xl p-5 border border-gray-100">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">Product Brochure</h3>
                      <p className="text-gray-500 text-xs mt-1">
                        Download detailed specifications and safety data sheets.
                      </p>
                      <Link 
                        to="/contact"
                        className="text-orange-500 text-sm font-medium mt-2 inline-block hover:text-orange-600"
                      >
                        Contact us for documentation
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 py-12 md:py-16">
          <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
            <h2 className="font-serif text-2xl md:text-3xl text-white font-bold mb-3">
              Need This Product in Bulk?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
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
                className="inline-flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
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
