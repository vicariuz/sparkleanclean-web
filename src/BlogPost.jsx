import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Clock, ArrowLeft, Tag, Phone, Mail } from 'lucide-react';
import { blogPosts } from './blogData';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/blog" className="text-green-600 hover:text-green-700 font-semibold text-lg">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

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
              <Link to="/blog" className="text-gray-700 hover:text-green-600 transition font-medium">Blog</Link>
              <Link to="/#contact" className="bg-green-600 text-white px-6 py-2.5 rounded-lg hover:bg-green-700 transition shadow-md">Get Quote</Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 z-10"></div>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 z-20 p-8 max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-4">
            <span className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              <Tag className="w-3 h-3" />
              <span>{post.category}</span>
            </span>
            <span className="flex items-center space-x-1 text-white/80 text-sm">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </span>
            <span className="text-white/80 text-sm">{post.date}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Back button */}
        <Link
          to="/blog"
          className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Blog</span>
        </Link>

        {/* Article body */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900
            prose-headings:font-bold
            prose-h2:text-3xl
            prose-h2:mt-10
            prose-h2:mb-6
            prose-h3:text-2xl
            prose-h3:mt-8
            prose-h3:mb-4
            prose-h3:text-green-700
            prose-p:text-gray-700
            prose-p:leading-relaxed
            prose-p:mb-6
            prose-ul:text-gray-700
            prose-ul:space-y-2
            prose-li:leading-relaxed
            prose-strong:text-gray-900"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Author Card */}
        <div className="mt-16 bg-green-50 rounded-2xl p-8 border-2 border-green-100 flex items-center space-x-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0">
            S
          </div>
          <div>
            <p className="text-xl font-bold text-gray-900">Sparklean Cleaning Services</p>
            <p className="text-green-600 font-medium mb-2">Professional Cleaning Experts in Lafayette, LA</p>
            <p className="text-gray-600">Providing eco-friendly residential and commercial cleaning services throughout Lafayette and surrounding areas.</p>
          </div>
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Need Professional Cleaning Services?</h3>
          <p className="text-green-100 mb-6">Contact Sparklean today for your free quote in Lafayette, LA!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:3375540468" className="flex items-center justify-center space-x-2 bg-white text-green-700 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition">
              <Phone className="w-5 h-5" />
              <span>(337) 554-0468</span>
            </a>
            <a href="mailto:contact@sparkleancleaners.com" className="flex items-center justify-center space-x-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {relatedPosts.map((related) => (
              <div key={related.id} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group border-2 border-gray-100 hover:border-green-200">
                <div className="h-48 overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {related.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-3 mb-2 group-hover:text-green-600 transition">
                    {related.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{related.excerpt.substring(0, 100)}...</p>
                  <Link
                    to={`/blog/${related.slug}`}
                    className="text-green-600 font-semibold hover:text-green-700 flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
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
