import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight, Tag } from 'lucide-react';
import { blogPosts } from './blogData';

export default function Blog() {
  return (
    <div className="min-h-screen bg-white">

      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/img/sparklean-cleaning-logo-lafayette.png" alt="Sparklean Logo" className="h-16 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-gray-700 hover:text-green-600 transition font-medium">Home</Link>
              <Link to="/#services" className="text-gray-700 hover:text-green-600 transition font-medium">Services</Link>
              <Link to="/#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition shadow-md">Get Quote</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Cleaning Tips & Guides</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Expert cleaning advice for Lafayette homes and businesses from the Sparklean team.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-100 hover:border-green-200 group">
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  {/* Category & Read time */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex items-center space-x-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                      <Tag className="w-3 h-3" />
                      <span>{post.category}</span>
                    </span>
                    <span className="flex items-center space-x-1 text-gray-500 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{post.date}</span>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-center space-x-2 text-green-600 font-semibold hover:text-green-700 transition group"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for a Sparkling Clean Home?</h2>
          <p className="text-green-100 text-xl mb-8">Contact us today for your free quote!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact" className="bg-white text-green-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition shadow-xl">
              Get Free Quote
            </Link>
            <a href="tel:3375540468" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
              (337) 554-0468
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2026 Sparklean Cleaning Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
