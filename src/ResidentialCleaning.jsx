import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Phone, Mail, CheckCircle, Star, MapPin, Clock, Sparkles, Shield, Leaf, DollarSign } from 'lucide-react';

export default function ResidentialCleaning() {
  const [formResult, setFormResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "9406abf5-896d-446b-8883-15bfa63498e4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setFormResult("success");
      event.target.reset();
    } else {
      setFormResult("error");
    }
  };

  const benefits = [
    "Thorough cleaning of all rooms",
    "Kitchen deep clean (appliances, counters, cabinets)",
    "Bathroom sanitization",
    "Dusting and vacuuming",
    "Floor mopping and care",
    "Window cleaning (interior)",
    "Eco-friendly products",
    "Flexible scheduling"
  ];

  const whyChoose = [
    { icon: <Shield className="w-6 h-6" />, title: "Insured & Bonded", text: "Full insurance coverage for your peace of mind" },
    { icon: <Leaf className="w-6 h-6" />, title: "Eco-Friendly", text: "Safe products for your family and pets" },
    { icon: <Star className="w-6 h-6" />, title: "Experienced Team", text: "Trained professionals with years of experience" },
    { icon: <DollarSign className="w-6 h-6" />, title: "Affordable Rates", text: "Competitive pricing with no hidden fees" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/img/sparklean-cleaning-logo-lafayette.webp"
                alt="Sparklean Cleaning Services Lafayette"
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition font-medium">Home</Link>
              <Link to="/blog" className="text-gray-700 hover:text-green-600 transition font-medium">Blog</Link>
              <a href="tel:3375540468" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition shadow-md">
                (337) 554-0468
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/img/residential-cleaning-lafayette-la.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Serving Lafayette & Surrounding Areas</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Professional Residential Cleaning Services in Lafayette, LA
            </h1>
            
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              Transform your home into a spotless sanctuary with Sparklean's expert house cleaning services. We handle the cleaning so you can focus on what matters most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition text-center shadow-xl">
                Get Free Quote
              </a>
              <a href="tel:3375540468" className="bg-green-500 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition text-center shadow-xl">
                Call (337) 554-0468
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What's Included in Our House Cleaning Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive residential cleaning covers every area of your Lafayette home, ensuring a thorough and professional clean every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-6 rounded-xl hover:bg-green-100 transition border-2 border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Expert Home Cleaning Services for Lafayette Residents
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              At <strong className="text-green-600">Sparklean Cleaning Services</strong>, we understand that your home is your sanctuary. That's why we provide professional residential cleaning services throughout Lafayette, Louisiana and surrounding areas including Scott, Youngsville, Broussard, and Carencro. Our experienced team treats your home with the care and respect it deserves.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Whether you need weekly maid service, bi-weekly house cleaning, or a one-time deep clean in Lafayette, we customize our services to fit your schedule and budget. Our professional cleaners are background-checked, trained, and equipped with eco-friendly cleaning products that are safe for your family and pets.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Our Residential Cleaning Process
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Every Sparklean cleaning begins with a detailed consultation to understand your specific needs. We create a customized cleaning plan that addresses your priorities and preferences. Our team arrives on time with all necessary supplies and equipment, ready to transform your Lafayette home.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We follow a systematic room-by-room approach, ensuring nothing is missed. From dusting ceiling fans to scrubbing bathroom grout, we handle every detail with professional precision. Our quality control process includes a final walkthrough to guarantee your complete satisfaction before we leave.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Lafayette Homeowners Choose Sparklean
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              As a locally owned cleaning company in Lafayette, we understand the unique challenges Louisiana homes face – from high humidity that promotes mold growth to seasonal pollen that coats every surface. Our cleaning methods are specifically designed to address these local conditions, ensuring your home stays cleaner longer.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We take pride in building long-term relationships with our clients. Many of our customers have been with us for years, trusting us with their homes and recommending us to friends and family throughout the Acadiana region. Our commitment to quality, reliability, and excellent customer service has made us one of Lafayette's most trusted house cleaning services.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Flexible Scheduling for Your Lifestyle
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Life in Lafayette is busy, and we know your schedule doesn't always fit a typical 9-5 pattern. That's why we offer flexible scheduling options including early morning, evening, and weekend appointments. Whether you need regular weekly service or occasional deep cleaning, we work around your schedule, not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Sparklean for Your Lafayette Home
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChoose.map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Affordable House Cleaning Rates in Lafayette
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our residential cleaning prices are based on the size of your home, frequency of service, and specific cleaning requirements. Most Lafayette homes range from $120-$250 per cleaning session.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <p className="text-gray-700 text-lg mb-6">
              Every home is unique, which is why we provide customized quotes based on your specific needs. Contact us today for a free, no-obligation quote for your Lafayette home.
            </p>
            <a href="#contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does house cleaning cost in Lafayette, LA?
              </h3>
              <p className="text-gray-700">
                Our residential cleaning services in Lafayette typically range from $120-$250 depending on home size, condition, and frequency. Weekly or bi-weekly service customers receive discounted rates. Contact us at (337) 554-0468 for an exact quote for your Lafayette home.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to be home during the cleaning?
              </h3>
              <p className="text-gray-700">
                No, you don't need to be home. Many of our Lafayette clients provide us with a key or garage code for convenient access. Our team is fully insured and bonded, and we treat your home with the utmost respect and security.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What cleaning products do you use?
              </h3>
              <p className="text-gray-700">
                We use professional-grade, eco-friendly cleaning products that are safe for children, pets, and the environment. All our products are non-toxic and biodegradable, yet powerful enough to tackle Louisiana's toughest cleaning challenges including humidity-related issues.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does a typical house cleaning take?
              </h3>
              <p className="text-gray-700">
                Most standard residential cleanings in Lafayette take 2-4 hours depending on home size and condition. Larger homes or first-time deep cleans may take longer. We'll provide an accurate time estimate during your free consultation.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What areas do you serve besides Lafayette?
              </h3>
              <p className="text-gray-700">
                We provide residential cleaning services throughout the Acadiana region including Lafayette, Scott, Youngsville, Broussard, Carencro, Duson, Maurice, Breaux Bridge, St. Martinville, and Cade. Contact us to confirm service availability in your specific area.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you offer same-day or emergency cleaning services?
              </h3>
              <p className="text-gray-700">
                Yes! We understand that unexpected situations arise. While we recommend booking in advance, we often accommodate same-day and emergency cleaning requests in Lafayette when our schedule allows. Call us at (337) 554-0468 to check availability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Get Your Free Residential Cleaning Quote
            </h2>
            <p className="text-xl text-gray-600">
              Fill out the form below or call us at (337) 554-0468
            </p>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100">
            <input type="hidden" name="subject" value="Residential Cleaning Quote Request - Sparklean" />
            <input type="hidden" name="from_name" value="Sparklean Website - Residential Page" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Home Size</label>
              <select
                name="home_size"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              >
                <option value="">Select home size</option>
                <option value="1-2 bedrooms">1-2 Bedrooms</option>
                <option value="3-4 bedrooms">3-4 Bedrooms</option>
                <option value="5+ bedrooms">5+ Bedrooms</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your cleaning needs..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              ></textarea>
            </div>

            {formResult === "success" && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ✅ Message sent! We'll contact you within 24 hours.
              </div>
            )}
            {formResult === "error" && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ❌ Something went wrong. Please call us at (337) 554-0468.
              </div>
            )}

            <button
              type="submit"
              disabled={formResult === "Sending...."}
              className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {formResult === "Sending...." ? "Sending..." : "Get Free Quote"}
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/img/sparklean-logo-white.webp"
                alt="Sparklean Cleaning Services"
                className="h-16 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-400">
                Professional residential cleaning services in Lafayette, LA
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-green-400 transition">Home</Link></li>
                <li><Link to="/blog" className="text-gray-400 hover:text-green-400 transition">Blog</Link></li>
                <li><Link to="/commercial-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Commercial Cleaning</Link></li>
                <li><Link to="/deep-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Deep Cleaning</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>(337) 554-0468</li>
                <li>contact@sparkleancleaners.com</li>
                <li>Lafayette, Louisiana</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2026 Sparklean Cleaning Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
