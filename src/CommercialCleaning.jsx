import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, Phone, Mail, CheckCircle, Star, MapPin, Clock, Shield, Leaf, DollarSign, Users } from 'lucide-react';

export default function CommercialCleaning() {
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

  const services = [
    "Office cleaning and sanitization",
    "Restroom deep cleaning and stocking",
    "Break room and kitchen cleaning",
    "Floor care (vacuuming, mopping, buffing)",
    "Window cleaning (interior/exterior)",
    "Trash removal and recycling",
    "Dusting and surface disinfection",
    "After-hours cleaning available"
  ];

  const whyChoose = [
    { icon: <Shield className="w-6 h-6" />, title: "Fully Insured", text: "Commercial liability coverage for your protection" },
    { icon: <Clock className="w-6 h-6" />, title: "Flexible Hours", text: "Evening and weekend service to avoid disruption" },
    { icon: <Users className="w-6 h-6" />, title: "Trained Staff", text: "Background-checked, professional cleaners" },
    { icon: <Leaf className="w-6 h-6" />, title: "Green Products", text: "Safe for employees and the environment" }
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
            backgroundImage: `url('/img/commercial-office-cleaning-lafayette.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Professional Commercial Cleaning in Lafayette</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Cleaning Services in Lafayette, LA
            </h1>
            
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              Keep your Lafayette business spotless with Sparklean's professional office cleaning services. Flexible scheduling, reliable service, and superior results for your workplace.
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

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Commercial Cleaning Services We Provide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive office cleaning solutions tailored to your Lafayette business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-6 rounded-xl hover:bg-green-100 transition border-2 border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{service}</span>
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
              Professional Office Cleaning for Lafayette Businesses
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Your office environment directly impacts employee productivity, client impressions, and overall business success. <strong className="text-green-600">Sparklean Cleaning Services</strong> provides reliable, professional commercial cleaning services throughout Lafayette, Louisiana. We serve offices, retail spaces, medical facilities, and commercial buildings in Lafayette, Scott, Youngsville, Broussard, and surrounding areas.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We understand that every business has unique cleaning needs and schedules. That's why we offer flexible commercial cleaning plans – from daily janitorial services to weekly office cleaning in Lafayette. Our professional cleaning crews work around your business hours, ensuring minimal disruption to your operations.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              After-Hours Cleaning for Maximum Convenience
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Most Lafayette businesses prefer evening or weekend cleaning to avoid interrupting daily operations. Our commercial cleaning team is available for after-hours service, arriving after your employees leave and completing all work before your next business day begins. We're fully insured and bonded, giving you peace of mind when we're on your premises.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Industries We Serve in Lafayette
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Sparklean has extensive experience providing commercial cleaning services to various industries throughout Lafayette and Acadiana. We serve medical offices and clinics, law firms and professional offices, retail stores and showrooms, restaurants and hospitality businesses, educational facilities, fitness centers and gyms, religious facilities, and property management companies. Each industry has specific cleaning requirements, and our team is trained to meet those specialized needs.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Green Cleaning for Healthier Workplaces
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Today's Lafayette businesses increasingly prioritize employee health and environmental responsibility. Our eco-friendly commercial cleaning products are EPA-approved, non-toxic, and highly effective against germs and bacteria. We use green cleaning methods that improve indoor air quality while reducing your company's environmental footprint – perfect for businesses pursuing LEED certification or sustainability goals.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Consistent Quality You Can Count On
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Consistency is crucial in commercial cleaning. When you partner with Sparklean, you'll work with the same professional cleaning team who learns your facility's specific needs and preferences. We use detailed cleaning checklists, conduct regular quality inspections, and maintain open communication to ensure your Lafayette office consistently meets your cleanliness standards.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Lafayette Businesses Choose Sparklean
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
            Competitive Commercial Cleaning Rates
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our commercial cleaning prices depend on square footage, cleaning frequency, and services required. Most Lafayette offices pay between $200-$800 per month for regular cleaning service.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <p className="text-gray-700 text-lg mb-6">
              Request a free walkthrough and quote for your Lafayette business. We'll assess your facility and provide a customized cleaning plan with transparent pricing – no hidden fees.
            </p>
            <a href="#contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Commercial Cleaning FAQs
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How much does commercial cleaning cost in Lafayette?
              </h3>
              <p className="text-gray-700">
                Commercial cleaning costs vary by square footage and frequency. Small offices (1,000-3,000 sq ft) typically pay $200-$400/month for weekly service. Larger facilities may range from $500-$2,000+ monthly. Contact us at (337) 554-0468 for a free quote specific to your Lafayette business.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Can you clean after business hours?
              </h3>
              <p className="text-gray-700">
                Yes! Most of our Lafayette commercial clients prefer evening or weekend cleaning. We're flexible and work around your business schedule to minimize disruption. Our team can arrive after 6 PM or on weekends as needed.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you provide cleaning supplies and equipment?
              </h3>
              <p className="text-gray-700">
                Yes, Sparklean provides all cleaning supplies, equipment, and eco-friendly products. You don't need to purchase or store anything. We arrive fully equipped with professional-grade tools and materials for comprehensive office cleaning.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Are your cleaners background checked?
              </h3>
              <p className="text-gray-700">
                Absolutely. All Sparklean cleaning staff undergo thorough background checks before working in any Lafayette business. We're also fully insured and bonded, providing complete protection for your commercial property.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if we're not satisfied with the cleaning?
              </h3>
              <p className="text-gray-700">
                We offer a 100% satisfaction guarantee. If you're not completely happy with any aspect of our commercial cleaning service, contact us within 24 hours and we'll return to re-clean those areas at no additional charge.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How often should our office be professionally cleaned?
              </h3>
              <p className="text-gray-700">
                Most Lafayette offices benefit from weekly or bi-weekly professional cleaning. High-traffic businesses like medical offices or restaurants may need daily service. We'll assess your needs and recommend an appropriate schedule during your free consultation.
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
              Request a Free Commercial Cleaning Quote
            </h2>
            <p className="text-xl text-gray-600">
              Serving Lafayette, Scott, Youngsville, Broussard & surrounding areas
            </p>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100">
            <input type="hidden" name="subject" value="Commercial Cleaning Quote - Sparklean" />
            <input type="hidden" name="from_name" value="Sparklean Website - Commercial Page" />

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Business Name *</label>
                <input
                  type="text"
                  name="business_name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Contact Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
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
              <label className="block text-gray-700 font-semibold mb-2">Facility Size (sq ft)</label>
              <input
                type="text"
                name="facility_size"
                placeholder="e.g., 5,000 sq ft"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Preferred Cleaning Frequency</label>
              <select
                name="frequency"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              >
                <option value="">Select frequency</option>
                <option value="Daily">Daily</option>
                <option value="Weekly">Weekly</option>
                <option value="Bi-Weekly">Bi-Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="One-Time">One-Time Deep Clean</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Details</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your commercial cleaning needs..."
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              ></textarea>
            </div>

            {formResult === "success" && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ✅ Quote request received! We'll contact you within 24 hours.
              </div>
            )}
            {formResult === "error" && (
              <div className="bg-red-50 border-2 border-red-200 text-red-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ❌ Error sending. Please call (337) 554-0468.
              </div>
            )}

            <button
              type="submit"
              disabled={formResult === "Sending...."}
              className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl disabled:opacity-50"
            >
              {formResult === "Sending...." ? "Sending..." : "Request Free Quote"}
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
                Professional commercial cleaning in Lafayette, LA
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/residential-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Residential Cleaning</Link></li>
                <li><Link to="/deep-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Deep Cleaning</Link></li>
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
