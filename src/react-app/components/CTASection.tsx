import { Link } from "react-router";

export default function CTASection() {
  return (
    <section className="py-12 md:py-20 bg-white z-20 relative">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Light rounded card */}
        <div className="bg-gradient-to-r from-orange-50/60 via-orange-50/80 to-orange-100/30 border border-orange-100/60 rounded-3xl overflow-hidden shadow-sm">
          <div className="flex flex-col lg:flex-row items-stretch">
            {/* Left - Text Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold italic leading-tight mb-6">
                <span className="text-gray-900">Raise Your </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600">Query</span>
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-fit px-8 py-3.5 bg-gradient-to-r from-bhagwa to-bhagwa-light text-white font-bold rounded-lg hover:from-bhagwa-light hover:to-gold transition-all duration-300 shadow-lg shadow-bhagwa/25"
              >
                Contact Us
              </Link>
            </div>

            {/* Right - Image */}
            <div className="lg:w-[45%] p-4 md:p-6 lg:p-8">
              <div className="h-64 lg:h-full min-h-[280px] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?w=800"
                  alt="Industrial chemical manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
