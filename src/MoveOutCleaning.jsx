import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TruckIcon, Phone, Mail, CheckCircle, Star, MapPin, Clock, Shield, DollarSign, FileCheck } from 'lucide-react';

export default function MoveOutCleaning() {
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

  const checklist = [
    "Deep clean all appliances (inside and out)",
    "Scrub all bathrooms including tile and grout",
    "Clean inside all cabinets and drawers",
    "Wipe down all walls and baseboards",
    "Clean all windows, tracks, and sills",
    "Vacuum and mop all floors thoroughly",
    "Remove all trash and debris",
    "Clean light fixtures and ceiling fans",
    "Dust all surfaces and shelves",
    "Clean inside closets",
    "Sanitize door handles and switches",
    "Final walkthrough inspection"
  ];

  const whyChoose = [
    { icon: <DollarSign className="w-6 h-6" />, title: "Deposit Recovery", text: "Get your full security deposit back" },
    { icon: <FileCheck className="w-6 h-6" />, title: "Landlord Approved", text: "Meets all landlord cleaning requirements" },
    { icon: <Clock className="w-6 h-6" />, title: "Fast Turnaround", text: "Available on short notice for move-out deadlines" },
    { icon: <Shield className="w-6 h-6" />, title: "Guaranteed Clean", text: "100% satisfaction or we return to re-clean" }
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
            backgroundImage: `url('/img/move-out-cleaning-lafayette-louisiana.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm font-medium">Move-Out Cleaning in Lafayette & Surrounding Areas</span>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Move-In & Move-Out Cleaning Services in Lafayette, LA
            </h1>
            
            <p className="text-xl text-green-50 mb-8 leading-relaxed">
              Get your full security deposit back with Sparklean's thorough move-out cleaning service. We handle every detail so your Lafayette rental or home sale is move-in ready.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition text-center shadow-xl">
                Book Move-Out Cleaning
              </a>
              <a href="tel:3375540468" className="bg-green-500 border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition text-center shadow-xl">
                Call (337) 554-0468
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Move-Out Cleaning Checklist
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every item your Lafayette landlord expects – we cover it all
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist.map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-6 rounded-xl hover:bg-green-100 transition border-2 border-green-100">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-800 font-medium">{item}</span>
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
              Professional Move-Out Cleaning in Lafayette, Louisiana
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Moving is stressful enough without worrying about cleaning your Lafayette rental or home. <strong className="text-green-600">Sparklean Cleaning Services</strong> specializes in move-out cleaning throughout Lafayette, Scott, Youngsville, Broussard, and surrounding Acadiana areas. Our comprehensive cleaning ensures you get your full security deposit back and leave your property in pristine condition.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              We've helped hundreds of Lafayette renters recover their security deposits by meeting or exceeding landlord cleaning requirements. Our team knows exactly what property managers and landlords look for during final inspections. We clean every area on your lease checklist – and then some – ensuring nothing is overlooked that could cost you money.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Why Move-Out Cleaning Matters
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Lafayette landlords and property managers have specific cleaning standards outlined in lease agreements. Failing to meet these standards can result in deductions from your security deposit – often costing more than professional cleaning would have. Our move-out cleaning service typically costs $200-$400, far less than the $500-$1,000+ deposits at risk.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Beyond recovering your deposit, thorough move-out cleaning is simply the right thing to do. It shows respect for the property owner and leaves your Lafayette rental ready for the next tenant. For home sellers, professional move-out cleaning makes your property more attractive to buyers and can help close sales faster.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Our Move-Out Cleaning Process
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              We start by reviewing your Lafayette lease agreement's cleaning requirements. This ensures we address every item your landlord expects. Our team arrives with all necessary equipment and eco-friendly products. We work systematically through each room, following a detailed checklist that covers every surface, appliance, and area.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Special attention goes to areas landlords scrutinize most: kitchen appliances (especially ovens and refrigerators), bathroom tile and grout, carpets and baseboards, windows and blinds, and light fixtures and fans. We complete a final walkthrough inspection to ensure nothing is missed before leaving your Lafayette property spotless.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Move-In Cleaning for Lafayette Renters
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Moving into a new Lafayette rental? Don't assume it's clean just because it looks tidy. Previous tenants may have done minimal cleaning, and landlords often do basic cleaning at best. Our move-in cleaning service ensures your new home is truly sanitized and ready for your family.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              Move-in cleaning gives you a fresh start in your Lafayette home. We sanitize bathrooms and kitchens, clean inside cabinets and drawers where previous tenants stored items, wipe down all surfaces, and ensure the property is truly clean before you unpack. This is especially important for families with children or anyone with allergies.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              Timing Your Move-Out Cleaning
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Schedule your Lafayette move-out cleaning after you've removed all belongings but before your final walkthrough with the landlord. This typically means booking 1-2 days before your lease ends. We offer flexible scheduling, including weekend availability, to accommodate your moving timeline.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              For the best results, complete your move-out in this order: remove all furniture and belongings, repair any damage, have Sparklean perform professional cleaning, and conduct final walkthrough with landlord. This sequence ensures your Lafayette rental looks its absolute best during inspection.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-10 mb-4">
              What Makes Lafayette Move-Outs Unique
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Louisiana's humid climate creates specific cleaning challenges for move-outs. Mold and mildew are common concerns Lafayette landlords inspect carefully. We use specialized treatments for moisture-prone areas like bathrooms, under sinks, and around windows. We also address the red Louisiana clay and mud that accumulates near entryways – a common deduction source in local rentals.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Why Lafayette Movers Choose Sparklean
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
            Move-Out Cleaning Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Our Lafayette move-out cleaning typically costs $200-$450 depending on home size and condition – far less than losing your security deposit.
          </p>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-2">1-2 Bedroom</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">$200-$300</p>
                <p className="text-gray-600">Apartments & small homes</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-2">3-4 Bedroom</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">$300-$400</p>
                <p className="text-gray-600">Standard family homes</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="text-2xl font-bold text-green-600 mb-2">5+ Bedroom</h3>
                <p className="text-3xl font-bold text-gray-900 mb-2">$400+</p>
                <p className="text-gray-600">Large homes</p>
              </div>
            </div>
            <a href="#contact" className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg">
              Get Exact Quote
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Move-Out Cleaning FAQs
          </h2>
          
          <div className="space-y-6">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Will move-out cleaning guarantee I get my deposit back?
              </h3>
              <p className="text-gray-700">
                While we can't guarantee deposit return (as that depends on property damage and other factors), our thorough cleaning addresses all cleaning-related deductions Lafayette landlords typically make. Most clients who use our service report receiving their full deposit back.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                When should I schedule move-out cleaning?
              </h3>
              <p className="text-gray-700">
                Schedule cleaning after you've completely moved out but 1-2 days before your lease ends. This gives you time for the final walkthrough with your Lafayette landlord while everything is still spotless. We offer same-day service when available for urgent situations.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                How long does move-out cleaning take?
              </h3>
              <p className="text-gray-700">
                Most Lafayette move-out cleans take 3-6 hours depending on property size and condition. A 2-bedroom apartment typically requires 3-4 hours, while a larger 4-bedroom house may take 5-6 hours with our professional team.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do I need to be present during cleaning?
              </h3>
              <p className="text-gray-700">
                No, you don't need to be present. Most Lafayette clients provide access and return for a final check before their landlord walkthrough. We're fully insured and treat your property with complete professionalism.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                What if my landlord finds something missed?
              </h3>
              <p className="text-gray-700">
                We offer a satisfaction guarantee. If your Lafayette landlord identifies cleaning issues during the walkthrough, contact us immediately and we'll return to address those specific areas at no additional charge.
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Do you clean carpets as part of move-out service?
              </h3>
              <p className="text-gray-700">
                Our standard move-out cleaning includes thorough vacuuming. Professional carpet steam cleaning is available as an add-on service. Many Lafayette landlords require professional carpet cleaning, so ask about our discounted add-on rate when booking.
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
              Book Your Move-Out Cleaning
            </h2>
            <p className="text-xl text-gray-600">
              Get your deposit back – call (337) 554-0468 today
            </p>
          </div>

          <form onSubmit={onSubmit} className="bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100">
            <input type="hidden" name="subject" value="Move-Out Cleaning Request - Sparklean" />
            <input type="hidden" name="from_name" value="Sparklean Website - Move-Out Page" />

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

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Property Type</label>
                <select
                  name="property_type"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                >
                  <option value="">Select type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Townhome">Townhome</option>
                  <option value="Condo">Condo</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Bedrooms</label>
                <select
                  name="bedrooms"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                >
                  <option value="">Select</option>
                  <option value="1">1 Bedroom</option>
                  <option value="2">2 Bedrooms</option>
                  <option value="3">3 Bedrooms</option>
                  <option value="4">4 Bedrooms</option>
                  <option value="5+">5+ Bedrooms</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Move-Out Date *</label>
              <input
                type="date"
                name="moveout_date"
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Property Address</label>
              <input
                type="text"
                name="address"
                placeholder="Lafayette address"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Additional Notes</label>
              <textarea
                name="message"
                rows="3"
                placeholder="Any specific concerns or requirements?"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
              ></textarea>
            </div>

            {formResult === "success" && (
              <div className="bg-green-50 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg text-center font-medium mb-6">
                ✅ Booking received! We'll confirm your appointment within 2 hours.
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
              {formResult === "Sending...." ? "Sending..." : "Book Move-Out Cleaning"}
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
                Professional move-out cleaning in Lafayette, LA
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><Link to="/residential-cleaning-lafayette" className="text-gray-400 hover:text-green-400 transition">Residential Cleaning</Link></li>
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
