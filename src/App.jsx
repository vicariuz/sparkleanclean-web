import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Home, Building2, Wand2, TruckIcon, Phone, Mail, CheckCircle, Star, MapPin, Clock } from 'lucide-react';

export default function SparkleanLanding() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Adrian Arguello",
      text: "They are wonderful! The team was professional, thorough, and left my home sparkling clean. I couldn't be happier with the service!",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      text: "Best cleaning service in Lafayette! They pay attention to every detail and use eco-friendly products. Highly recommend!",
      rating: 5,
    },
    {
      name: "Mike Rodriguez",
      text: "Professional and reliable. They've been cleaning our office for months and we're always impressed with their work.",
      rating: 5,
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };


  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Residential Cleaning",
      description: "Keep your home sparkling with our thorough residential cleaning services.",
      image: "/img/pexels-karolina-grabowska-4239146.jpg"
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Commercial Cleaning",
      description: "Professional cleaning solutions for offices and commercial spaces.",
      image: "/img/full-shot-people-cleaning-office.jpg"
    },
    {
      icon: <Wand2 className="w-8 h-8" />,
      title: "Deep Cleaning",
      description: "Intensive cleaning that reaches every corner and surface of your space.",
      image: "/img/pexels-karolina-grabowska-4239139.jpg"
    },
    {
      icon: <TruckIcon className="w-8 h-8" />,
      title: "Move-In/Move-Out",
      description: "Complete cleaning services for your moving transitions.",
      image: "/img/professional-cleaning-service-person-using-steam-cleaner-office.jpg"
    }
  ];

  const serviceAreas = [
    "Lafayette", "Scott", "Youngsville", "Broussard", "Carencro",
    "Duson", "Maurice", "Breaux Bridge", "St. Martinville", "Cade"
  ];

  const benefits = [
    "Professional & Experienced Team",
    "Eco-Friendly Cleaning Products",
    "Flexible Scheduling",
    "100% Satisfaction Guaranteed",
    "Affordable Pricing",
    "Insured & Bonded"
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Decorative Background Pattern */}
      <div className="fixed inset-0 -z-10 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img
                src="/img/logo3.png"
                alt="Sparklean Logo"
                className="h-16 w-auto"
              />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#services" className="text-gray-700 hover:text-green-600 transition font-medium">Services</a>
              <a href="#areas" className="text-gray-700 hover:text-green-600 transition font-medium">Service Areas</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 transition font-medium">About</a>
              <Link to="/blog" className="text-gray-700 hover:text-green-600 transition font-medium">Blog</Link>
              <a href="#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg">Get Quote</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Background Image */}
      <section className="relative py-20 overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-600/90 via-green-700/90 to-green-800/90"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url('/img/person-taking-care-office-cleaning.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Serving Lafayette & Surrounding Areas</span>
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Your Space, <span className="text-green-200">Sparkling Clean</span>
              </h1>
              <p className="text-xl text-green-50 mb-8 leading-relaxed">
                Professional cleaning services that transform your home or business into a pristine environment. Quality you can trust, cleanliness you can see.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contact" className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition text-center shadow-xl hover:shadow-2xl">
                  Get Free Quote
                </a>
                <a href="tel:3375540468" className="bg-green-500 text-white border-2 border-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition text-center shadow-xl">
                  (337) 554-0468
                </a>
              </div>
              <div className="mt-8 flex items-center space-x-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-green-300 border-2 border-white"></div>
                  ))}
                </div>
                <div>
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-green-100">Lafayette's Newest Premium Cleaning Service</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="/img/pexels-karolina-grabowska-4239131.jpg"
                alt="Professional Cleaning"
                className="rounded-3xl shadow-2xl border-4 border-white/20"
              />
            </div>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services Section with Images */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive cleaning solutions tailored to your needs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-300">
                <div className="h-48 overflow-hidden bg-gradient-to-br from-green-50 to-green-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="text-green-600 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="areas" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">Proudly serving Lafayette and surrounding communities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <MapPin className="w-6 h-6 text-green-600 mr-2" />
                  We Serve These Areas
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {serviceAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t-2 border-gray-100">
                  <p className="text-gray-600">
                    Don't see your area? <a href="#contact" className="text-green-600 font-semibold hover:text-green-700">Contact us</a> - we may still be able to help!
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d221273.0871405634!2d-92.19380499999999!3d30.224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86249c2b7d7b7d73%3A0x8b4c2e6b8c8c8c8c!2sLafayette%2C%20LA!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lafayette Service Area Map"
                ></iframe>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-green-600 text-white rounded-2xl p-6 shadow-xl max-w-xs">
                <p className="font-bold text-lg mb-1">Central Lafayette Location</p>
                <p className="text-green-100 text-sm">Fast response times across all service areas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/img/full-shot-people-cleaning-office.jpg"
                alt="Professional Team"
                className="rounded-3xl shadow-2xl border-4 border-green-100"
                loading="lazy"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Sparklean?</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're not just another cleaning company. We're your partners in creating healthier, happier spaces with attention to detail and a commitment to excellence.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-green-50 p-4 rounded-lg hover:bg-green-100 transition">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 text-lg font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Don't just take our word for it - hear from our happy customers!</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 border-2 border-green-100 relative">
              {/* Large quote icon */}
              <div className="absolute top-8 left-8 text-green-200 opacity-50">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2h2V8h-2zm12 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2h2V8h-2z" />
                </svg>
              </div>

              {/* Testimonial content */}
              <div className="relative z-10 text-center">
                <div className="mb-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-2xl text-gray-800 italic leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].text}"
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-2xl font-bold">
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <p className="text-xl font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                    <p className="text-green-600 font-medium">Verified Customer</p>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <button
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 rounded-full p-3 shadow-lg transition"
                aria-label="Previous testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white hover:bg-green-50 text-green-600 rounded-full p-3 shadow-lg transition"
                aria-label="Next testimonial"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition ${index === currentTestimonial ? 'bg-green-600 w-8' : 'bg-gray-300'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-gray-600">Let's make your space sparkle! Reach out today.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-2xl shadow-xl border-2 border-green-100">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Service Needed</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option value="residential">Residential Cleaning</option>
                    <option value="commercial">Commercial Cleaning</option>
                    <option value="deep">Deep Cleaning</option>
                    <option value="move">Move-In/Move-Out</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none transition"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-lg hover:shadow-xl"
                >
                  Request Quote
                </button>
              </form>
            </div>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Call us</p>
                      <a href="tel:3375540468" className="text-gray-900 font-bold text-xl hover:text-green-600 transition">
                        (337) 554-0468
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Email us</p>
                      <a href="mailto:contact@sparkleancleaners.com" className="text-gray-900 font-bold text-lg hover:text-green-600 transition break-all">
                        contact@sparkleancleaners.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm font-medium">Location</p>
                      <p className="text-gray-900 font-bold text-lg">
                        Lafayette, Louisiana
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white shadow-xl">
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-green-500/30 pb-3">
                    <span className="font-medium">Monday - Friday:</span>
                    <span className="font-bold">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-green-500/30 pb-3">
                    <span className="font-medium">Saturday:</span>
                    <span className="font-bold">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span className="font-bold">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img
                src="/img/logo6.png"
                alt="Sparklean Logo"
                className="h-16 w-auto mb-4"
              />
              <p className="text-gray-400">
                Professional cleaning services serving Lafayette and surrounding areas.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#services" className="text-gray-400 hover:text-green-400 transition">Services</a></li>
                <li><a href="#areas" className="text-gray-400 hover:text-green-400 transition">Service Areas</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-green-400 transition">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-green-400 transition">Contact</a></li>
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
            <p className="text-gray-400">© 2024 Sparklean Cleaning Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
