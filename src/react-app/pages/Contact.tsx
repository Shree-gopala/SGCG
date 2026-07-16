import { useState, FormEvent } from "react";
import { Link } from "react-router";
import Header from "@/react-app/components/Header";
import Footer from "@/react-app/components/Footer";
import { ScrollReveal } from "@/react-app/components/ScrollReveal";
import { BackgroundPattern } from "@/react-app/components/BackgroundPattern";
import { companyInfo } from "@/data/company";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Validation Logic
  const validate = () => {
    let newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) newErrors.email = "Invalid email address";
    
    if (!formData.subject) newErrors.subject = "Please select a subject";
    
    if (formData.message.length < 10) newErrors.message = "Message must be at least 10 characters";
    
    const phoneRegex = /^[0-9]{10,12}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  
  // Pehle check karein ki saare fields sahi bhare hain ya nahi
  if (!validate()) {
    console.log("Validation failed", errors);
    return; 
  }

  setIsSubmitting(true);

  try {
    const response = await fetch("/send-email.php", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" }
    });

    if (response.ok) {
      // YAHAN SE SUCCESS MESSAGE TRIGGER HOGA
      setIsSubmitted(true); 
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
    } else {
      alert("Mail bhejane mein problem aayi. PHP mail setup check karein.");
    }
  } catch (err) {
    alert("Network error! Connection check karein.");
  } finally {
    setIsSubmitting(false);
  }
};
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Phone",
      details: (
        <div className="flex flex-col gap-0.5 text-sm font-semibold">
          <a href="tel:+919999665479" className="text-gray-600 hover:text-orange-500 transition-colors font-mono">+91 99996 65479</a>
          <a href="tel:+919310543479" className="text-gray-600 hover:text-orange-500 transition-colors font-mono">+91 93105 43479</a>
        </div>
      ),
    },
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Email",
      details: (
        <div className="text-sm font-semibold">
          <a href="mailto:shreegopalasanwariachemicals@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors break-all">
            shreegopalasanwariachemicals@gmail.com
          </a>
        </div>
      ),
    },
    {
      icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Address",
      details: (
        <div className="text-sm font-semibold">
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent("4th Floor, G-4, Pushkar Enclave, Paschim Vihar, New Delhi - 110063")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-orange-500 transition-colors"
          >
            4th Floor, G-4, Pushkar Enclave, Paschim Vihar, New Delhi – 110063
          </a>
        </div>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Business Hours",
      details: <span className="text-gray-600 text-sm font-semibold">Mon - Sat: 9:00 AM - 6:00 PM</span>,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      {/* Banner Section */}
      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16 bg-gradient-to-r from-orange-50 via-white to-orange-100/40 border-b border-orange-100/50 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gray-900 font-bold mb-3 animate-fade-in-up">
            Contact Us
          </h1>
          <nav className="flex items-center justify-center gap-2 text-gray-500 text-sm animate-fade-in-up animation-delay-200">
            <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span>›</span>
            <span className="text-orange-600 font-medium">Contact Us</span>
          </nav>
        </div>
      </section>

      <main className="flex-1">
        {/* Contact Info Cards */}
        <section className="py-12 md:py-16 bg-white relative overflow-hidden">
          <BackgroundPattern />
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="text-center mb-8 md:mb-10">
              <span className="text-orange-500 text-sm font-bold tracking-wider uppercase">
                Get In Touch
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-gray-900 font-bold mt-2">
                We'd Love To Hear From You
              </h2>
              <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                Reach out for product inquiries, quotes, or partnership opportunities
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-xl border border-gray-150 shadow-sm hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 sm:w-14 sm:h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 mb-3 sm:mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-1 sm:mb-2">
                    {info.title}
                  </h3>
                  <div>
                    {info.details}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>

        {/* Contact Form & Map Section */}
        <section className="py-12 md:py-16 bg-gray-50">
          <ScrollReveal className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="font-serif text-2xl text-gray-900 font-bold mb-2">
                  Send us a Message
                </h2>
                <p className="text-gray-500 text-sm mb-6">
                  Fill out the form below and we'll get back to you within 24 hours
                </p>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-xl mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">Thank you for reaching out. We'll respond shortly.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-orange-500 font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                          placeholder="Your name"
                        />
                        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all bg-white"
                        >
                          <option value="">Select subject</option>
                          <option value="inquiry">Product Inquiry</option>
                          <option value="quote">Request a Quote</option>
                          <option value="partnership">Partnership</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none transition-all resize-none"
                        placeholder="Describe your requirements..."
                      />
                      {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-lg transition-colors shadow-md shadow-orange-500/20 disabled:opacity-50"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Map & Company Info */}
              <div className="space-y-6">
                {/* Map */}
                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110998.60215507964!2d75.65660889726564!3d29.15093599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391232d94aborced%3A0x7b0b4e4a9f8fa8e7!2sHisar%2C%20Haryana!5e0!3m2!1sen!2sin!4v1704067200000!5m2!1sen!2sin"
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-500"
                    title="SGSC Location"
                  />
                  <div className="p-5 space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Factory Unit – 1</h4>
                        <p className="text-gray-600 text-sm">Near Jindal Supreme India Limited, Delhi Road, Hisar, Haryana – 125001</p>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 my-2" />
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm mb-1">Factory Unit – 2</h4>
                        <p className="text-gray-600 text-sm">Village Kharar, Delhi Road, Tehsil Hisar, District Hisar, Haryana – 125001, India</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Company Info Card */}
                <div className="bg-gradient-to-br from-orange-50/60 to-orange-100/30 border border-orange-100/50 p-8 rounded-2xl text-gray-900 shadow-sm">
                  <h3 className="font-serif text-xl font-bold mb-2">{companyInfo.shortName}</h3>
                  <p className="text-orange-600 font-semibold text-sm mb-4">{companyInfo.name}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    With over {companyInfo.yearsOfExperience} years of experience in chemical manufacturing, 
                    we are your trusted partner for high-quality zinc chemicals, metal powders, and ingots.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white border border-orange-100/40 shadow-sm rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">{companyInfo.yearsOfExperience}+</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Years</p>
                    </div>
                    <div className="bg-white border border-orange-100/40 shadow-sm rounded-xl p-4 text-center">
                      <p className="text-3xl font-bold text-orange-600">{companyInfo.productLines}+</p>
                      <p className="text-gray-500 text-xs uppercase tracking-wider">Products</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-orange-50/50 via-orange-50 to-orange-100/20 border-t border-orange-100/40 py-10">
          <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-xl md:text-2xl text-gray-900 font-bold">
                Need Industrial Chemical Solutions?
              </h2>
              <p className="text-gray-600 text-sm">
                Get in touch with our experts today.
              </p>
            </div>
            <Link 
              to="/products"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-colors"
            >
              View Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
   
  );
}
