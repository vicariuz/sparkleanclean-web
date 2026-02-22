import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Wand2, Phone, Mail, CheckCircle, Star, MapPin, Clock, Shield, Leaf, Sparkles } from 'lucide-react';

export default function DeepCleaning() {
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

  const deepCleanAreas = [
    "Baseboards and trim throughout home",
    "Ceiling fans and light fixtures",
    "Inside all cabinets and drawers",
    "Oven and refrigerator deep clean",
    "Window sills, tracks, and frames",
    "Bathroom tile and grout scrubbing",
    "Behind and under all appliances",
    "Closet cleaning and organization",
    "Wall spot cleaning",
    "Air vent cleaning",
    "Door frames and handles",
    "Hard-to-reach areas"
  ];

  const whyChoose = [
    { icon: <Sparkles className="w-6 h-6" />, title: "Intensive Clean", text: "We reach areas regular cleaning misses" },
    { icon: <Shield className="w-6 h-6" />, title: "Experienced Team", text: "Trained in advanced cleaning techniques" },
    { icon: <Clock className="w-6 h-6" />, title: "Thorough Process", text: "4-8 hours for complete deep cleaning" },
    { icon: <Leaf className="w-6 h-6" />, title: "Safe Products", text: "Eco-friendly but powerful cleaners" }
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
            backgroundImage: `url('/img/deep-cleaning-service-lafayette.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Deep Cleaning Throughout Lafayette & Acadiana</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Deep Cleaning Services in Lafayette, LA
            </h1>
            
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              Go beyond surface cleaning with Sparklean's intensive deep cleaning service. Perfect for spring cleaning, moving, or when your Lafayette home needs extra attention.
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
              What's Included in Deep Cleaning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive deep cleaning service covers every corner of your Lafayette home
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deepCleanAreas.map((area, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-6 rounded-xl hover:bg-green-100 transition border-2 border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{area}</span>
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
              Professional Deep Cleaning for Lafayette Homes
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Deep cleaning goes far beyond regular housekeeping. While routine cleaning maintains surface cleanliness, <strong className="text-green-600">Sparklean's deep cleaning service</strong> tackles the hidden dirt, grime, and buildup that accumulates over time in your Lafayette home. We reach into corners, behind appliances, and areas that standard cleaning doesn't address.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our deep cleaning service is perfect for spring cleaning, preparing for holidays or special events, moving into or out of a Lafayette home, or simply giving your house a fresh start. Many of our Lafayette clients schedule deep cleaning seasonally – especially before summer humidity or after Louisiana's heavy pollen season.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              The Sparklean Deep Cleaning Process
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our deep cleaning begins with a detailed assessment of your Lafayette home. We identify areas needing special attention – whether it's mold and mildew from Louisiana humidity, stubborn kitchen grease, or bathroom buildup. Our team arrives with specialized equipment including steam cleaners, scrub brushes, and professional-grade products designed for intensive cleaning.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We work room by room, moving systematically through your home. In kitchens, we pull out appliances to clean behind and underneath, degrease range hoods, and deep clean inside ovens and refrigerators. Bathrooms receive thorough tile and grout scrubbing, fixture polishing, and mildew treatment. Throughout your home, we clean baseboards, door frames, window tracks, ceiling fans, and light fixtures – all the details that make a dramatic difference.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              When Should You Schedule Deep Cleaning?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most Lafayette homeowners benefit from deep cleaning 2-4 times per year. Consider scheduling deep cleaning in these situations: before or after major holidays and entertaining, during spring or fall cleaning seasons, after renovation or construction projects, when moving into a new Lafayette home, or if your home hasn't had professional cleaning in over 6 months.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Deep Cleaning vs. Regular Cleaning
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the difference helps you choose the right service for your Lafayette home. Regular cleaning maintains day-to-day cleanliness – vacuuming, mopping, dusting visible surfaces, and basic bathroom cleaning. Deep cleaning is more intensive and time-consuming, addressing accumulated dirt in hard-to-reach places, removing stubborn stains and buildup, and thoroughly sanitizing your entire home.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We recommend establishing regular cleaning service (weekly or bi-weekly) supplemented with seasonal deep cleaning. This combination keeps your Lafayette home consistently clean while ensuring nothing is overlooked long-term. Many clients start with deep cleaning to establish a clean baseline, then maintain it with regular service.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Lafayette-Specific Deep Cleaning Considerations
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Louisiana's climate creates unique cleaning challenges. High humidity promotes mold and mildew growth, especially in bathrooms, kitchens, and HVAC systems. Our deep cleaning specifically targets these moisture-prone areas with anti-microbial treatments. We also address the heavy pollen that coats Lafayette homes each spring, ensuring your home's air quality improves significantly after our service.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Choose Sparklean Deep Cleaning
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

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Deep Cleaning Pricing in Lafayette
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Deep cleaning is priced based on home size, condition, and specific needs. Most Lafayette homes range from $250-$500 for comprehensive deep cleaning service.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <p className="text-gray-700 text-lg mb-6">
              Contact us for a personalized quote for your Lafayette home. We'll discuss your specific deep cleaning needs and provide transparent pricing with no hidden fees.
            </p>
            <a href="#contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Get Your Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Deep Cleaning FAQs
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does deep cleaning take?
              </h3>
              <p className="text-gray-700">
                Deep cleaning typically takes 4-8 hours depending on your home's size and condition. A 2,000 sq ft Lafayette home usually requires 5-6 hours with our professional team. We'll provide an accurate time estimate during your consultation.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What's the difference between deep cleaning and regular cleaning?
              </h3>
              <p className="text-gray-700">
                Regular cleaning maintains surface cleanliness with routine tasks like vacuuming and dusting. Deep cleaning is more intensive – we clean inside appliances, scrub tile grout, wash baseboards, clean behind furniture, and address areas regular cleaning doesn't reach.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does deep cleaning cost in Lafayette?
              </h3>
              <p className="text-gray-700">
                Deep cleaning in Lafayette typically costs $250-$500 depending on home size and condition. Smaller homes (1,000-1,500 sq ft) start around $250, while larger homes (3,000+ sq ft) may range $400-$600. Call (337) 554-0468 for an exact quote.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should I get deep cleaning?
              </h3>
              <p className="text-gray-700">
                Most Lafayette homeowners benefit from deep cleaning 2-4 times per year – typically seasonally. If you have regular cleaning service, deep cleaning twice yearly (spring and fall) maintains optimal cleanliness and addresses Louisiana's seasonal challenges like humidity and pollen.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to be home during deep cleaning?
              </h3>
              <p className="text-gray-700">
                You don't need to be home. Many Lafayette clients provide access and leave while we work. We're fully insured and bonded. However, some prefer staying to point out specific areas needing attention or answer questions.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Should I deep clean before or after moving?
              </h3>
              <p className="text-gray-700">
                Both! Deep clean your new Lafayette home before moving in for a fresh start. Deep clean your old home when moving out to recover your security deposit and leave it pristine for new occupants. We offer move-in and move-out deep cleaning packages.
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
              Schedule Your Deep Cleaning Today
            </h2>
            <p className="text-xl text-gray-600">
              Call (337) 554-0468 or fill out the form below
            </p>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100">
            <input type="hidden" name="subject" value="Deep Cleaning Quote - Sparklean" />
            <input type="hidden" name="from_name" value="Sparklean Website - Deep Cleaning Page" />

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
                <option value="Under 1,500 sq ft">Under 1,500 sq ft</option>
                <option value="1,500-2,500 sq ft">1,500-2,500 sq ft</option>
                <option value="2,500-3,500 sq ft">2,500-3,500 sq ft</option>
                <option value="Over 3,500 sq ft">Over 3,500 sq ft</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
              <input
                type="date"
                name="preferred_date"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Special Instructions</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Any specific areas needing extra attention?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              ></textarea>
            </div>

            {formResult === "success" && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ✅ Request received! We'll call you within 24 hours.
              </div>
            )}
            {formResult === "error" && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ❌ Error. Please call (337) 554-0468.
              </div>
            )}

            <button
              type="submit"
              disabled={formResult === "Sending...."}
              className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {formResult === "Sending...." ? "Sending..." : "Request Deep Cleaning Quote"}
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
                alt="Sparklean"
                className="h-16 w-auto mb-4"
                loading="lazy"
              />
              <p className="text-gray-400">
                Professional deep cleaning in Lafayette, LA
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/residential-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Residential Cleaning</Link></li>
                <li><Link to="/commercial-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Commercial Cleaning</Link></li>
                <li><Link to="/move-out-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Move-Out Cleaning</Link></li>
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
